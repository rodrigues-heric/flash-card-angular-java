package rodrigues.leite.heric.flashcards.Decks.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import rodrigues.leite.heric.flashcards.Decks.Model.DecksModel;
import rodrigues.leite.heric.flashcards.Decks.Service.DecksService;

import java.util.Optional;

@Controller
@RequestMapping("/api/decks")
public class DecksController {

    @Autowired
    private DecksService decksService;

    @PostMapping("/save")
    public ResponseEntity<DecksModel> saveDeck(@RequestBody DecksModel folder) {
        return ResponseEntity.ok(this.decksService.saveDeck(folder));
    }

    @GetMapping("/all")
    public ResponseEntity<Iterable<DecksModel>> getAllDecks() {
        return ResponseEntity.ok(this.decksService.getAllDecks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<DecksModel>> getDeckById(@PathVariable Long id) {
        return ResponseEntity.ok(this.decksService.getDeckById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Optional<DecksModel>> updateDeck(@PathVariable Long id, @RequestBody DecksModel folder) {
        return ResponseEntity.ok(this.decksService.updateDeck(id, folder));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDeck(@PathVariable Long id) {
        if (this.decksService.getDeckById(id).isPresent()) {
            this.decksService.deleteDeck(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}
