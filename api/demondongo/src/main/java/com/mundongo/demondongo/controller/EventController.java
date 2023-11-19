package com.mundongo.demondongo.controller;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.mundongo.demondongo.model.Event;
import com.mundongo.demondongo.dto.EventDTO;

import com.mundongo.demondongo.repository.EventRepository;

import java.lang.reflect.Type;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @GetMapping
    public ResponseEntity<List<Event>> read() {
        List<Event> query = eventRepository.findAll();
        return new ResponseEntity<List<Event>>(query, HttpStatus.OK);
    }

    @GetMapping("/nocomments")
    public ResponseEntity<List<EventDTO>> readNoComments() {
        List<Event> query = eventRepository.findAll();
        ModelMapper modelMapper = new ModelMapper();
        Type listType = new TypeToken<List<EventDTO>>() {
        }.getType();
        List<EventDTO> dtos = modelMapper.map(query, listType);
        return new ResponseEntity<List<EventDTO>>(dtos, HttpStatus.OK);
    }

    @GetMapping("/nocomments/{searchName}")
    public ResponseEntity<List<EventDTO>> readNameNoComments(@PathVariable String searchName) {
        List<Event> query = eventRepository.findByNameContainingIgnoreCase(searchName);
        ModelMapper modelMapper = new ModelMapper();
        Type listType = new TypeToken<List<EventDTO>>() {
        }.getType();
        List<EventDTO> dtos = modelMapper.map(query, listType);
        return new ResponseEntity<List<EventDTO>>(dtos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Event> readId(@PathVariable("id") Long id) {
        Optional<Event> query = eventRepository.findById(id);
        if (query.isPresent()) {
            return new ResponseEntity<Event>(query.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    // @GetMapping("/nocomments/{id}")
    // public ResponseEntity<EventDTO> readIdNoComments(@PathVariable Long id) {
    // Optional<Event> query = eventRepository.findById(id);
    // if (query.isPresent()) {
    // return new ResponseEntity<EventDTO>(new EventDTO(query.get()),
    // HttpStatus.OK);
    // }
    // return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    // }

    // Ya no porque springboot se molesta, me da flojera usar pathparams

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Event Event) {
        eventRepository.save(Event);
        return new ResponseEntity<>("Event created :)))", HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@RequestBody Event data, @PathVariable Long id) {
        Optional<Event> query = eventRepository.findById(id);
        if (query.isPresent()) {
            Event instance = query.get();
            instance = data;
            eventRepository.save(instance);
            return new ResponseEntity<>("Event updated :D", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Event not found :((", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        Optional<Event> query = eventRepository.findById(id);
        if (query.isPresent()) {
            eventRepository.deleteById(id);
            return new ResponseEntity<>("Event deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Event not found :((", HttpStatus.NOT_FOUND);
        }
    }
}
