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
@RequestMapping("/place")
public class PlaceController {

    @Autowired
    private PlaceRepository lugarTuristicoRepository;

    @GetMapping
    public ResponseEntity<List<Place>> read() {
        List<Place> query = lugarTuristicoRepository.findAll();
        return new ResponseEntity<List<Place>>(query, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Place> readId(@PathVariable Long id) {
        Optional<Place> query = lugarTuristicoRepository.findById(id);
        if (query.isPresent()) {
            return new ResponseEntity<Place>(query.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Place lugarTuristico) {
        lugarTuristicoRepository.save(lugarTuristico);
        return new ResponseEntity<>("Lugar Turistico created :)))", HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@RequestBody Place lugarTuristicoDetails, @PathVariable Long id) {
        Optional<Place> query = lugarTuristicoRepository.findById(id);
        if (query.isPresent()) {
            Place lugar = query.get();
            lugar.setNombre(lugarTuristicoDetails.getNombre());
            lugar.setDescripcion(lugarTuristicoDetails.getDescripcion());
            lugar.setDireccion(lugarTuristicoDetails.getDireccion());
            lugar.setLatitud(lugarTuristicoDetails.getLatitud());
            lugar.setLongitud(lugarTuristicoDetails.getLongitud());
            lugar.setUrlImagen(lugarTuristicoDetails.getUrlImagen());
            lugarTuristicoRepository.save(lugar);
            return new ResponseEntity<>("Lugar Turistico updated :D", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Lugar Turistico not found :((", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        Optional<Place> query = lugarTuristicoRepository.findById(id);
        if (query.isPresent()) {
            lugarTuristicoRepository.deleteById(id);
            return new ResponseEntity<>("Lugar Turistico deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Lugar Turistico not found :((", HttpStatus.NOT_FOUND);
        }
    }
}
