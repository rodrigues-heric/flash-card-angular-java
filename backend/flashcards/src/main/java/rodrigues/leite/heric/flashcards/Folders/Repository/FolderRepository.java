package rodrigues.leite.heric.flashcards.Folders.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rodrigues.leite.heric.flashcards.Folders.Model.FolderModel;

public interface FolderRepository extends JpaRepository<FolderModel, Long> {
}
