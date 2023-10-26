package com.mundongo.demondongo.controller;

import com.mundongo.demondongo.domain.LugarTuristico;
import com.mundongo.demondongo.respository.LugarTuristicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lugares-turisticos")
public class LugarTuristicoController {

    @Autowired
    private LugarTuristicoRepository lugarTuristicoRepository;

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

}