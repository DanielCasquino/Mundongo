package com.mundongo.demondongo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mundongo.demondongo.domain.LugarTuristico;
import com.mundongo.demondongo.respository.LugarTuristicoRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/lugares-turisticos")
public class LugarTuristicoController {

    @Autowired
    private LugarTuristicoRepository lugarTuristicoRepository;

    @GetMapping
    public ResponseEntity<List<LugarTuristico>> read() {
        List<LugarTuristico> query = lugarTuristicoRepository.findAll();
        return new ResponseEntity<List<LugarTuristico>>(query, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LugarTuristico> readId(@PathVariable Long id) {
        Optional<LugarTuristico> query = lugarTuristicoRepository.findById(id);
        if (query.isPresent()) {
            return new ResponseEntity<LugarTuristico>(query.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody LugarTuristico lugarTuristico) {
        lugarTuristicoRepository.save(lugarTuristico);
        return new ResponseEntity<>("Lugar Turistico created :)))", HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@RequestBody LugarTuristico lugarTuristicoDetails, @PathVariable Long id) {
        Optional<LugarTuristico> query = lugarTuristicoRepository.findById(id);
        if (query.isPresent()) {
            LugarTuristico lugar = query.get();
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
        Optional<LugarTuristico> query = lugarTuristicoRepository.findById(id);
        if (query.isPresent()) {
            lugarTuristicoRepository.deleteById(id);
            return new ResponseEntity<>("Lugar Turistico deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Lugar Turistico not found :((", HttpStatus.NOT_FOUND);
        }
    }
}
