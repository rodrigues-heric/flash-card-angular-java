package rodrigues.leite.heric.flashcards.Folders.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import rodrigues.leite.heric.flashcards.Folders.Model.FolderModel;
import rodrigues.leite.heric.flashcards.Folders.Service.FolderService;

@Controller
@RequestMapping("/api/folders")
public class FolderController {

    @Autowired
    private FolderService folderService;

    @PostMapping("/save")
    public ResponseEntity<FolderModel> saveFolder(@RequestBody FolderModel folder) {
        return ResponseEntity.ok(this.folderService.saveFolder(folder));
    }
}
