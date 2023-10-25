//UserController.java

package com.mundongo.demondongo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mundongo.demondongo.respository.UserRepository;

import java.util.List;
import java.util.Optional;

import com.mundongo.demondongo.domain.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<User>> read() {
        List<User> query = userRepository.findAll();
        return new ResponseEntity<List<User>>(query, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> readId(@PathVariable Long id) {
        Optional<User> query = userRepository.findById(id);
        if (query.isPresent()) {
            return new ResponseEntity<User>(query.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>("User created :)))", HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@RequestBody User user, @PathVariable Long id) {
        Optional<User> query = userRepository.findById(id);
        if (query.isPresent()) {
            User temp = query.get();
            temp.setEmail(user.getEmail());
            temp.setName(user.getName());
            temp.setLastName(user.getLastName());
            userRepository.save(temp);
            return new ResponseEntity<>("User updated :D", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found :((", HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        Optional<User> query = userRepository.findById(id);
        if (query.isPresent()) {
            userRepository.deleteById(id);
            return new ResponseEntity<>("User deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("User not found :((", HttpStatus.NOT_FOUND);
        }
    }
}
