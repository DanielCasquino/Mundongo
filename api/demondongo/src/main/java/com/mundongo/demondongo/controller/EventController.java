package com.mundongo.demondongo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import com.mundongo.demondongo.model.Event;
import com.mundongo.demondongo.repository.EventRepository;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("api/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @Secured({ "ADMIN", "USER" })
    @GetMapping
    public ResponseEntity<List<Event>> read() {
        List<Event> query = eventRepository.findAll();
        return new ResponseEntity<List<Event>>(query, HttpStatus.OK);
    }

    @Secured({ "ADMIN", "USER" })
    @GetMapping("/{id}")
    public ResponseEntity<Event> readId(@PathVariable Long id) {
        Optional<Event> query = eventRepository.findById(id);
        if (query.isPresent()) {
            return new ResponseEntity<Event>(query.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

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
