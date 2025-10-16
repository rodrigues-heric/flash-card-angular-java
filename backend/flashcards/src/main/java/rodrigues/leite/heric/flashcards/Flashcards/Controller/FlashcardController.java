package rodrigues.leite.heric.flashcards.Flashcards.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;
import rodrigues.leite.heric.flashcards.Flashcards.Service.FlashcardService;

import java.util.Optional;

@Controller
@RequestMapping("/api/flashcards")
public class FlashcardController {

    @Autowired
    private FlashcardService flashcardService;

    @PostMapping("/save")
    public ResponseEntity<FlashcardModel> saveFlashcard(@RequestBody FlashcardModel flashcard) {
        return ResponseEntity.ok(this.flashcardService.saveFlashcard(flashcard));
    }

    @GetMapping("/all")
    public ResponseEntity<Iterable<FlashcardModel>> getAllFlashcards() {
        return ResponseEntity.ok(this.flashcardService.getAllFlashcards());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<FlashcardModel>> getFlashcardById(@PathVariable Long id) {
        return ResponseEntity.ok(this.flashcardService.getFlashcardById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Optional<FlashcardModel>> updateFlashcard(
            @PathVariable Long id,
            @RequestBody FlashcardModel flashcard
    ) {
        return ResponseEntity.ok(this.flashcardService.updateFlashcard(id, flashcard));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFlashcard(@PathVariable Long id) {
        if (this.flashcardService.getFlashcardById(id).isPresent()) {
            this.flashcardService.deleteFlashcard(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}
