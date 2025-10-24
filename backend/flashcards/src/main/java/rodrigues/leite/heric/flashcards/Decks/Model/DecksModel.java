package rodrigues.leite.heric.flashcards.Decks.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import rodrigues.leite.heric.flashcards.Flashcards.Model.FlashcardModel;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "tb_decks")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DecksModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "tb_decks_cards",
            joinColumns = @JoinColumn(name = "id_deck"),
            inverseJoinColumns = @JoinColumn(name = "id_card")
    )
    @JsonIgnoreProperties("decks")
    private Set<FlashcardModel> flashcards = new HashSet<>();

    @Override
    public String toString() {
        return "DecksModel{" +
                "id=" + id +
                ", name='" + name + "\'" +
                "}";
    }
}
