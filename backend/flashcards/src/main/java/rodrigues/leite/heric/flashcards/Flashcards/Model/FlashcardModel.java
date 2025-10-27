package rodrigues.leite.heric.flashcards.Flashcards.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import rodrigues.leite.heric.flashcards.Decks.Model.DecksModel;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_cards")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FlashcardModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @EqualsAndHashCode.Include
    private Long id;

    @Column(name = "face_text", nullable = false)
    private String faceText;

    @Column(name = "back_text", nullable = false)
    private String backText;

    @ManyToMany(mappedBy = "flashcards", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JsonIgnoreProperties("flashcards")
    private Set<DecksModel> decks = new HashSet<>();

    public void addDeck(DecksModel deck) {
        this.decks.add(deck);
        deck.getFlashcards().add(this);
    }

    public void removeDeck(DecksModel deck) {
        this.decks.remove(deck);
        deck.getFlashcards().remove(this);
    }

    @Override
    public String toString() {
        return "FlashcardModel{" +
                "id=" + id +
                ", faceText='" + faceText + "\'" +
                ", backText='" + backText + "\'" +
                "}";
    }
}
