package rodrigues.leite.heric.flashcards.Folders.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rodrigues.leite.heric.flashcards.Folders.Model.FolderModel;
import rodrigues.leite.heric.flashcards.Folders.Repository.FolderRepository;

import java.util.Optional;

@Service
public class FolderService {

    @Autowired
    private FolderRepository folderRepository;

    public FolderModel saveFolder(FolderModel folder) {
        return this.folderRepository.save(folder);
    }

    public Optional<FolderModel> getFolderById(Long id) {
        return this.folderRepository.findById(id);
    }
}
