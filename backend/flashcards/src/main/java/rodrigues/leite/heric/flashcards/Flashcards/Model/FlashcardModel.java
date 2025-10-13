package rodrigues.leite.heric.flashcards.Flashcards.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
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
    private Long id;

    @Column(name = "face_text", nullable = false)
    private String faceText;

    @Column(name = "back_text", nullable = false)
    private String backText;

    @ManyToMany(mappedBy = "flashcards")
    private Set<DecksModel> decks = new HashSet<>();
}
