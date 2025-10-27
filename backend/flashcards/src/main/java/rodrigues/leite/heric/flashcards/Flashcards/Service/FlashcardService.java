package rodrigues.leite.heric.flashcards.Flashcards.Service;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rodrigues.leite.heric.flashcards.Decks.Model.DecksModel;
import rodrigues.leite.heric.flashcards.Decks.Repository.DecksRepository;
import rodrigues.leite.heric.flashcards.Flashcards.DTO.FlashcardRequestDTO;
import rodrigues.leite.heric.flashcards.Flashcards.DTO.FlashcardResponseDTO;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;
import rodrigues.leite.heric.flashcards.Flashcards.Repository.FlashcardRepository;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class FlashcardService {

    @Autowired
    private FlashcardRepository flashcardRepository;
    @Autowired
    private DecksRepository decksRepository;
    
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public FlashcardModel saveFlashcard(FlashcardModel flashcard) {
        return this.flashcardRepository.save(flashcard);
    }

    @Transactional
    public FlashcardResponseDTO saveFlashcardWithDeck(FlashcardRequestDTO dto) {
        FlashcardModel flashcard_to_save = new FlashcardModel();
        flashcard_to_save.setFaceText(dto.getFaceText());
        flashcard_to_save.setBackText(dto.getBackText());
        
        FlashcardModel flashcard_saved = this.flashcardRepository.save(flashcard_to_save);
        Set<Long> deckIds = new HashSet<>();

        if (dto.getDeckId() != null && !dto.getDeckId().isEmpty()) {
            deckIds.addAll(dto.getDeckId());
            
            for (Long deckId : dto.getDeckId()) {
                DecksModel deck = decksRepository.findById(deckId)
                    .orElseThrow(() -> new RuntimeException("Deck not found: " + deckId));

                if (deck.getFlashcards() == null) {
                    deck.setFlashcards(new HashSet<>());
                }
                
                deck.getFlashcards().add(flashcard_saved);
                flashcard_saved.getDecks().add(deck);
                
                flashcardRepository.save(flashcard_saved);
                decksRepository.save(deck);
                
                entityManager.flush();
            }
        }

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
        Optional<FlashcardModel> flashcard = this.flashcardRepository.findById(id);
        
        if (flashcard.isPresent()) {
            FlashcardModel card = flashcard.get();
            card.getDecks().forEach(deck -> deck.getFlashcards().remove(card));
            card.getDecks().clear();
            this.flashcardRepository.delete(card);
        }
    }
}
