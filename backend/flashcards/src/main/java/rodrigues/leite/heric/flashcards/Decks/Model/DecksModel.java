package rodrigues.leite.heric.flashcards.Decks.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_decks")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class DecksModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @EqualsAndHashCode.Include
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH}, fetch = FetchType.LAZY)
    @JoinTable(
            name = "tb_decks_cards",
            joinColumns = @JoinColumn(name = "id_deck", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "id_card", referencedColumnName = "id")
    )
    @JsonIgnoreProperties("decks")
    private Set<FlashcardModel> flashcards = new HashSet<>();

    public void addFlashcard(FlashcardModel flashcard) {
        this.flashcards.add(flashcard);
        flashcard.getDecks().add(this);
    }

    public void removeFlashcard(FlashcardModel flashcard) {
        this.flashcards.remove(flashcard);
        flashcard.getDecks().remove(this);
    }

    @Override
    public String toString() {
        return "DecksModel{" +
                "id=" + id +
                ", name='" + name + "\'" +
                "}";
    }
}
