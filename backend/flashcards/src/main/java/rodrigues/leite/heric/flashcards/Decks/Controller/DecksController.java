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
    public ResponseEntity<DecksModel> saveFolder(@RequestBody DecksModel folder) {
        return ResponseEntity.ok(this.decksService.saveFolder(folder));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<DecksModel>> getFolderById(@PathVariable Long id) {
        return ResponseEntity.ok(this.decksService.getFolderById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Optional<DecksModel>> updateFolder(@PathVariable Long id, @RequestBody DecksModel folder) {
        return ResponseEntity.ok(this.decksService.updateFolder(id, folder));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFolder(@PathVariable Long id) {
        if (this.decksService.getFolderById(id).isPresent()) {
            this.decksService.deleteFolder(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}
