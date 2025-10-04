package rodrigues.leite.heric.flashcards.Flashcards.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;

public interface FlashcardRepository extends JpaRepository<FlashcardModel, Long> {
}
