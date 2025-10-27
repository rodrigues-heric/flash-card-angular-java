package rodrigues.leite.heric.flashcards.Flashcards.Repository;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class DeckCardRepository {
    
    private final JdbcTemplate jdbcTemplate;

    public DeckCardRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void addCardToDeck(Long deckId, Long cardId) {
        String sql = "INSERT INTO tb_decks_cards (id_deck, id_card) VALUES (?, ?)";
        jdbcTemplate.update(sql, deckId, cardId);
    }

    public void removeCardFromDeck(Long deckId, Long cardId) {
        String sql = "DELETE FROM tb_decks_cards WHERE id_deck = ? AND id_card = ?";
        jdbcTemplate.update(sql, deckId, cardId);
    }

    public boolean existsCardInDeck(Long deckId, Long cardId) {
        String sql = "SELECT COUNT(*) FROM tb_decks_cards WHERE id_deck = ? AND id_card = ?";
        int count = jdbcTemplate.queryForObject(sql, Integer.class, deckId, cardId);
        return count > 0;
    }
}