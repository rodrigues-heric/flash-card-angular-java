package rodrigues.leite.heric.flashcards.Flashcards.Service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rodrigues.leite.heric.flashcards.Decks.Model.DecksModel;
import rodrigues.leite.heric.flashcards.Decks.Repository.DecksRepository;
import rodrigues.leite.heric.flashcards.Flashcards.DTO.FlashcardRequestDTO;
import rodrigues.leite.heric.flashcards.Flashcards.DTO.FlashcardResponseDTO;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;
import rodrigues.leite.heric.flashcards.Flashcards.Repository.FlashcardRepository;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class FlashcardService {

    @Autowired
    private FlashcardRepository flashcardRepository;
    @Autowired
    private DecksRepository decksRepository;

    @Transactional
    public FlashcardModel saveFlashcard(FlashcardModel flashcard) {
        return this.flashcardRepository.save(flashcard);
    }

    @Transactional
    public FlashcardResponseDTO saveFlashcardWithDeck(FlashcardRequestDTO dto) {
        FlashcardModel flashcard_to_save = new FlashcardModel();
        flashcard_to_save.setFaceText(dto.getFaceText());
        flashcard_to_save.setBackText(dto.getBackText());

        if (dto.getDeckId() != null && !dto.getDeckId().isEmpty()) {
            Set<DecksModel> decks = dto.getDeckId().stream()
                    .map(id -> decksRepository.findById(id)
                            .orElseThrow(() -> new RuntimeException("Deck not found: " + id)))
                    .collect(Collectors.toSet());

            flashcard_to_save.setDecks(decks);
            decks.forEach(deck -> deck.getFlashcards().add(flashcard_to_save));
        }

        FlashcardModel flashcard_saved = this.flashcardRepository.save(flashcard_to_save);
        Set<Long> deckIds = flashcard_saved.getDecks().stream()
                .map(DecksModel::getId)
                .collect(Collectors.toSet());
        return new FlashcardResponseDTO(
                flashcard_saved.getId(),
                flashcard_saved.getFaceText(),
                flashcard_saved.getBackText(),
                deckIds
        );
    }

    @Transactional
    public Iterable<FlashcardModel> getAllFlashcards() {
        return this.flashcardRepository.findAll();
    }

    @Transactional
    public Iterable<FlashcardModel> getAllHomeFlashcards() {
        return this.flashcardRepository.findAllHomeCards();
    }

    @Transactional
    public Optional<FlashcardModel> getFlashcardById(Long id) {
        return this.flashcardRepository.findById(id);
    }

    @Transactional
    public Iterable<FlashcardModel> getFlashcardsByDeckId(Long deckId) {
        return this.flashcardRepository.findFlashcardsByDeckId(deckId);
    }

    @Transactional
    public Optional<FlashcardModel> updateFlashcard(Long id, FlashcardModel flashcard) {
        Optional<FlashcardModel> existingFlashcardOptional = this.getFlashcardById(id);

        if (existingFlashcardOptional.isPresent()) {
            FlashcardModel existingFlashcard = existingFlashcardOptional.get();
            existingFlashcard.setFaceText(flashcard.getFaceText());
            existingFlashcard.setBackText(flashcard.getBackText());

            return Optional.of(this.saveFlashcard(existingFlashcard));
        }

        return Optional.empty();
    }

    @Transactional
    public void deleteFlashcard(Long id) {
        this.flashcardRepository.deleteById(id);
    }
}
