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

import com.mundongo.demondongo.domain.Account;
import com.mundongo.demondongo.repository.AccountRepository;

import java.util.List;
import java.util.Optional;;

@RestController
@RequestMapping("api/account")
public class AccountController {
    @Autowired
    private AccountRepository userRepository;

    @GetMapping
    public ResponseEntity<List<Account>> read() {
        List<Account> query = userRepository.findAll();
        return new ResponseEntity<List<Account>>(query, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> readId(@PathVariable Long id) {
        Optional<Account> query = userRepository.findById(id);
        if (query.isPresent()) {
            return new ResponseEntity<Account>(query.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Account user) {
        userRepository.save(user);
        return new ResponseEntity<>("Account created :)))", HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@RequestBody Account user, @PathVariable Long id) {
        Optional<Account> query = userRepository.findById(id);
        if (query.isPresent()) {
            Account temp = query.get();
            temp.setEmail(user.getEmail());
            temp.setName(user.getName());
            temp.setLastName(user.getLastName());
            userRepository.save(temp);
            return new ResponseEntity<>("Account updated :D", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Account not found :((", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        Optional<Account> query = userRepository.findById(id);
        if (query.isPresent()) {
            userRepository.deleteById(id);
            return new ResponseEntity<>("Account deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Account not found :((", HttpStatus.NOT_FOUND);
        }
    }
}
