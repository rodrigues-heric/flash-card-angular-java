package rodrigues.leite.heric.flashcards.Flashcards.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;
import rodrigues.leite.heric.flashcards.Flashcards.Repository.FlashcardRepository;

import java.util.Optional;

@Service
public class FlashcardService {

    @Autowired
    private FlashcardRepository flashcardRepository;

    public FlashcardModel saveFlashcard(FlashcardModel flashcard) {
        return this.flashcardRepository.save(flashcard);
    }

    public Optional<FlashcardModel> getFlashcardById(Long id) {
        return this.flashcardRepository.findById(id);
    }

    public Optional<FlashcardModel> updateFlashcard(Long id, FlashcardModel flashcard) {
        Optional<FlashcardModel> existingFlashcardOptional = this.getFlashcardById(id);

        if (existingFlashcardOptional.isPresent()) {
            FlashcardModel existingFlashcard = existingFlashcardOptional.get();
            existingFlashcard.setFaceText(flashcard.getFaceText());
            existingFlashcard.setBackText(flashcard.getBackText());
            existingFlashcard.setOptionalHint(flashcard.getOptionalHint());

            return Optional.of(this.saveFlashcard(existingFlashcard));
        }

        return Optional.empty();
    }

    public void deleteFlashcard(Long id) {
        this.flashcardRepository.deleteById(id);
    }
}
