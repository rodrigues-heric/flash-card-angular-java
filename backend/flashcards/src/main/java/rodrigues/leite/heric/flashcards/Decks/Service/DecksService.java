package rodrigues.leite.heric.flashcards.Decks.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rodrigues.leite.heric.flashcards.Decks.Model.DecksModel;
import rodrigues.leite.heric.flashcards.Decks.Repository.DecksRepository;

import java.util.Optional;

@Service
public class DecksService {

    @Autowired
    private DecksRepository decksRepository;

    public DecksModel saveFolder(DecksModel folder) {
        return this.decksRepository.save(folder);
    }

    public Optional<DecksModel> getFolderById(Long id) {
        return this.decksRepository.findById(id);
    }

    public Optional<DecksModel> updateFolder(Long id, DecksModel folder) {
        Optional<DecksModel> existingFolderOptional = this.getFolderById(id);

        if (existingFolderOptional.isPresent()) {
            DecksModel existingFolder = existingFolderOptional.get();
            existingFolder.setName(folder.getName());

            return Optional.of(this.saveFolder(existingFolder));
        }

        return Optional.empty();
    }

    public void deleteFolder(Long id) {
        this.decksRepository.deleteById(id);
    }
}
