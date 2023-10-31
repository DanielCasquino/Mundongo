package com.mundongo.demondongo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mundongo.demondongo.model.Place;
import com.mundongo.demondongo.repository.PlaceRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/places")
public class PlaceController {

    @Autowired
    private PlaceRepository PlaceRepository;

    @GetMapping
    public ResponseEntity<List<Place>> read() {
        List<Place> query = PlaceRepository.findAll();
        return new ResponseEntity<List<Place>>(query, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Place> readId(@PathVariable Long id) {
        Optional<Place> query = PlaceRepository.findById(id);
        if (query.isPresent()) {
            return new ResponseEntity<Place>(query.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Place Place) {
        PlaceRepository.save(Place);
        return new ResponseEntity<>("Place created :)))", HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@RequestBody Place PlaceDetails, @PathVariable Long id) {
        Optional<Place> query = PlaceRepository.findById(id);
        if (query.isPresent()) {
            Place lugar = query.get();
            lugar.setNombre(PlaceDetails.getNombre());
            lugar.setDescripcion(PlaceDetails.getDescripcion());
            lugar.setDireccion(PlaceDetails.getDireccion());
            lugar.setLatitud(PlaceDetails.getLatitud());
            lugar.setLongitud(PlaceDetails.getLongitud());
            lugar.setUrlImagen(PlaceDetails.getUrlImagen());
            PlaceRepository.save(lugar);
            return new ResponseEntity<>("Place updated :D", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Place not found :((", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        Optional<Place> query = PlaceRepository.findById(id);
        if (query.isPresent()) {
            PlaceRepository.deleteById(id);
            return new ResponseEntity<>("Place deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Place not found :((", HttpStatus.NOT_FOUND);
        }
    }
}
