package rodrigues.leite.heric.flashcards.Flashcards.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;
import rodrigues.leite.heric.flashcards.Flashcards.Repository.FlashcardRepository;

@Service
public class FlashcardService {

    @Autowired
    private FlashcardRepository flashcardRepository;

    public FlashcardModel saveFlashcard(FlashcardModel flashcard) {
        return this.flashcardRepository.save(flashcard);
    }
}
