package rodrigues.leite.heric.flashcards.Decks.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rodrigues.leite.heric.flashcards.Decks.Model.DecksModel;
import rodrigues.leite.heric.flashcards.Decks.Repository.DecksRepository;

import java.util.Optional;

@Service
public class DecksService {

    @Autowired
    private DecksRepository decksRepository;

    public DecksModel saveDeck(DecksModel deck) {
        return this.decksRepository.save(deck);
    }

    public Iterable<DecksModel> getAllDecks() {
        return this.decksRepository.findAll();
    }

    public Optional<DecksModel> getDeckById(Long id) {
        return this.decksRepository.findById(id);
    }

    public Optional<DecksModel> updateDeck(Long id, DecksModel deck) {
        Optional<DecksModel> existingDeckOptional = this.getDeckById(id);

        if (existingDeckOptional.isPresent()) {
            DecksModel existingDeck = existingDeckOptional.get();
            existingDeck.setName(deck.getName());

            return Optional.of(this.saveDeck(existingDeck));
        }

        return Optional.empty();
    }

    public void deleteDeck(Long id) {
        this.decksRepository.deleteById(id);
    }
}
