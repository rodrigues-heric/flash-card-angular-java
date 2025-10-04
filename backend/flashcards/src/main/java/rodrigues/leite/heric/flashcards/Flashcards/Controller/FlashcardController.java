package rodrigues.leite.heric.flashcards.Flashcards.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;
import rodrigues.leite.heric.flashcards.Flashcards.Service.FlashcardService;

@Controller
@RequestMapping("/flashcards")
public class FlashcardController {

    @Autowired
    private FlashcardService flashcardService;

    @PostMapping("/save")
    public ResponseEntity<FlashcardModel> saveFlashcard(@RequestBody FlashcardModel flashcard) {
        return ResponseEntity.ok(this.flashcardService.saveFlashcard(flashcard));
    }
}
