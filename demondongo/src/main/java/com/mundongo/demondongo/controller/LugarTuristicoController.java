package com.mundongo.demondongo.controller;

import com.mundongo.demondongo.domain.LugarTuristico;
import com.mundongo.demondongo.respository.LugarTuristicoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lugares-turisticos")
public class LugarTuristicoController {

    private final LugarTuristicoRepository lugarTuristicoRepository;

    public LugarTuristicoController(LugarTuristicoRepository lugarTuristicoRepository) {
        this.lugarTuristicoRepository = lugarTuristicoRepository;
    }

    @GetMapping
    public List<LugarTuristico> getAllLugaresTuristicos() {
        return lugarTuristicoRepository.findAll();
    }

    @PostMapping
    public LugarTuristico createLugarTuristico(@RequestBody LugarTuristico lugarTuristico) {
        return lugarTuristicoRepository.save(lugarTuristico);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LugarTuristico> getLugarTuristicoById(@PathVariable Long id) {
        return lugarTuristicoRepository.findById(id)
               .map(lugar -> ResponseEntity.ok().body(lugar))
               .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<LugarTuristico> updateLugarTuristico(@PathVariable Long id, @RequestBody LugarTuristico lugarTuristico) {
        return lugarTuristicoRepository.findById(id)
               .map(lugar -> {
                   lugar.setNombre(lugarTuristico.getNombre());
                   lugar.setDescripcion(lugarTuristico.getDescripcion());
                   lugar.setDireccion(lugarTuristico.getDireccion());
                   lugar.setLatitud(lugarTuristico.getLatitud());
                   lugar.setLongitud(lugarTuristico.getLongitud());
                   lugar.setUrlImagen(lugarTuristico.getUrlImagen());
                   LugarTuristico updatedLugarTuristico = lugarTuristicoRepository.save(lugar);
                   return ResponseEntity.ok().body(updatedLugarTuristico);
               }).orElse(ResponseEntity.notFound().build());
    }

    

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLugarTuristico(@PathVariable Long id) {
        return lugarTuristicoRepository.findById(id)
               .map(lugar -> {
                   lugarTuristicoRepository.deleteById(id);
                   return ResponseEntity.ok().build();
               }).orElse(ResponseEntity.notFound().build());
    }


}