package rodrigues.leite.heric.flashcards.Flashcards.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;

import java.util.List;

public interface FlashcardRepository extends JpaRepository<FlashcardModel, Long> {
    @Query(
            value = "SELECT f.* FROM \"TB_CARDS\" f WHERE f.ID NOT IN (SELECT ID_CARD FROM \"TB_DECKS_CARDS\")",
            nativeQuery = true
    )
    List<FlashcardModel> findAllHomeCards();

    @Query(
            value = "SELECT f.* FROM \"TB_CARDS\" f " +
                    "JOIN \"TB_DECKS_CARDS\" dc ON f.ID = dc.ID_CARD " +
                    "WHERE dc.ID_DECK = :deckId",
            nativeQuery = true
    )
    List<FlashcardModel> findFlashcardsByDeckId(Long deckId);
}
