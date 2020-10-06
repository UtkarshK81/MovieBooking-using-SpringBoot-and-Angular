package com.cg.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.admin.entity.Theatre;
import com.cg.admin.exception.ResourceNotFoundException;
import com.cg.admin.service.TheatreService;

@RestController
@CrossOrigin("http://localhost:4200")
public class TheatreController {

	@Autowired
	private TheatreService tService;
	
	@GetMapping("/theatres")
	public ResponseEntity<List<Theatre>> getAllTheatres(){
		return ResponseEntity.ok().body(tService.getAllTheatres());
	}
	@CrossOrigin
	@GetMapping("/theatres/{id}")
	public ResponseEntity<Theatre> getTheatreById(@PathVariable Long id) throws ResourceNotFoundException{
		return ResponseEntity.ok().body(tService.getTheatreById(id));
	}
	
	@PostMapping("/theatres")
	public ResponseEntity<Theatre> createTheatre(@RequestBody Theatre theatre){
		return ResponseEntity.ok().body(this.tService.createTheatre(theatre));
	}
	
	@PutMapping("/theatres/{id}")
	public ResponseEntity<Theatre> updateTheatre(@PathVariable Long id, @RequestBody Theatre theatre) throws ResourceNotFoundException{
		theatre.setTheatreID(id);
		return ResponseEntity.ok().body(this.tService.updateTheatre(theatre));
	}
	@CrossOrigin
	@DeleteMapping("/theatres/{id}")
	public HttpStatus deleteTheatre(@PathVariable Long id) throws ResourceNotFoundException{
		this.tService.deleteTheatre(id);
		return HttpStatus.OK;
	}
	
	@GetMapping("theatres/theatre/{theaterName}")
	public ResponseEntity<List<Theatre>> findByTheatreName(@PathVariable("theaterName") String theaterName){
		
		return new ResponseEntity<List<Theatre>>(tService.findByTheatreName(theaterName), HttpStatus.ACCEPTED);
	}
}
