package com.cg.admin.model;

import java.util.List;

public class TheatreModel {
	private long theatreID;

	private String theatreName;

	private String theatreCity;

	private String managerName;

	private Long managerContact;

	private List<MovieModel> movies;

	public List<MovieModel> getMovies() {
		return movies;
	}

	public void setMovies(List<MovieModel> movies) {
		this.movies = movies;
	}

	public long getTheatreID() {
		return theatreID;
	}

	public void setTheatreID(long theatreID) {
		this.theatreID = theatreID;
	}

	public String getTheatreName() {
		return theatreName;
	}

	public void setTheatreName(String theatreName) {
		this.theatreName = theatreName;
	}

	public String getTheatreCity() {
		return theatreCity;
	}

	public void setTheatreCity(String theatreCity) {
		this.theatreCity = theatreCity;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public Long getManagerContact() {
		return managerContact;
	}

	public void setManagerContact(Long managerContact) {
		this.managerContact = managerContact;
	}

}
