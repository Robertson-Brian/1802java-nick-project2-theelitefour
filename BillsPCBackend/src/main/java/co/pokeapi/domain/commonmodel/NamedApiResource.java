package co.pokeapi.domain.commonmodel;

public class NamedApiResource {
	private String url;
	private String name;

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "NamedApiResource [url=" + url + ", name=" + name + "]";
	}
}
