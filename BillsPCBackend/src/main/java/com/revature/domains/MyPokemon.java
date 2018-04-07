package com.revature.domains;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class MyPokemon {
	private Integer id;
	private String name;
	private String sprite;
	private List<MyMove> moves;
	Map<String, Integer> stats;
	List<String> types;
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getSprite() {
		return sprite;
	}
	
	public void setSprite(String sprite) {
		this.sprite = sprite;
	}
	
	public List<MyMove> getMoves() {
		return moves;
	}
	
	public void setMoves(List<MyMove> moves) {
		this.moves = moves;
	}
	
	public Map<String, Integer> getStats() {
		return stats;
	}
	
	public void setStats(Map<String, Integer> stats) {
		this.stats = stats;
	}
	
	public List<String> getTypes() {
		return types;
	}
	
	public void setTypes(List<String> types) {
		this.types = types;
	}
	
	@Override
	public String toString() {
		return "Pokemon [id=" + id + ", name=" + name + ", sprite=" + sprite + ", moves=" + moves + ", stats=" + stats
				+ ", types=" + types + "]";
	}
	
	
}
