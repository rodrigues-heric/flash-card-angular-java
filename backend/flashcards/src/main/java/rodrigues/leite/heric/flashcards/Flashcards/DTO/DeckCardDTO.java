package rodrigues.leite.heric.flashcards.Flashcards.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeckCardDTO {
    private Long deckId;
    private Long cardId;
}