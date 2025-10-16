package rodrigues.leite.heric.flashcards.Decks.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rodrigues.leite.heric.flashcards.Decks.Model.DecksModel;

public interface DecksRepository extends JpaRepository<DecksModel, Long> {
}
