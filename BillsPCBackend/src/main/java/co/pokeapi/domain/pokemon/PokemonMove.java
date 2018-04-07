package co.pokeapi.domain.pokemon;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import co.pokeapi.domain.commonmodel.NamedApiResource;

public class PokemonMove {
	public NamedApiResource move;
	private List<PokemonMoveVersion> moveVersion;
	
	public NamedApiResource getMove() {
		return move;
	}

	public void setMove(NamedApiResource move) {
		this.move = move;
	}

	public List<PokemonMoveVersion> getMoveVersion() {
		return moveVersion;
	}

	@JsonProperty("version_group_details")
	public void setMoveVersion(List<PokemonMoveVersion> moveVersion) {
		this.moveVersion = moveVersion;
	}

	@Override
	public String toString() {
		return "Move [move=" + move + "]";
	}
}
