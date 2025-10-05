package rodrigues.leite.heric.flashcards.Folders.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import rodrigues.leite.heric.flashcards.Folders.Model.FolderModel;
import rodrigues.leite.heric.flashcards.Folders.Service.FolderService;

import java.util.Optional;

@Controller
@RequestMapping("/api/folders")
public class FolderController {

    @Autowired
    private FolderService folderService;

    @PostMapping("/save")
    public ResponseEntity<FolderModel> saveFolder(@RequestBody FolderModel folder) {
        return ResponseEntity.ok(this.folderService.saveFolder(folder));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<FolderModel>> getFolderById(@PathVariable Long id) {
        return ResponseEntity.ok(this.folderService.getFolderById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Optional<FolderModel>> updateFolder(@PathVariable Long id, @RequestBody FolderModel folder) {
        return ResponseEntity.ok(this.folderService.updateFolder(id, folder));
    }
}
