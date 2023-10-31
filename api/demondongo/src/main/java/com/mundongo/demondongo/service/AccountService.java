package com.mundongo.demondongo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.mundongo.demondongo.model.Account;
import com.mundongo.demondongo.model.Comment;

import java.util.List;
import java.util.Optional;

import com.mundongo.demondongo.repository.AccountRepository;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accRep;

    public ResponseEntity<List<Account>> read() {
        return new ResponseEntity<>(accRep.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Account> readSpecific(Long id) {
        Optional<Account> query = accRep.findById(id);
        if (query.isPresent()) {
            return new ResponseEntity<>(query.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    public ResponseEntity<String> create(Account account) {
        accRep.save(account);
        return new ResponseEntity<>("Account created", HttpStatus.CREATED);
    }

    public ResponseEntity<String> update(Account account, Long id) {
        Optional<Account> query = accRep.findById(id);
        if (query.isPresent()) {
            var instance = query.get();
            instance = account;
            accRep.save(instance);
            return new ResponseEntity<>("Account updated", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Account not found", HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> addComment(Long id, Comment comment) {
        Optional<Account> query = accRep.findById(id);
        if (query.isPresent()) {
            var instance = query.get();
            instance.addComment(comment);
            accRep.save(instance);
            return new ResponseEntity<>("Comment added", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Account not found", HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<String> delete(Long id) {
        Optional<Account> query = accRep.findById(id);
        if (query.isPresent()) {
            accRep.deleteById(id);
            return new ResponseEntity<>("Account deleted", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Account not found", HttpStatus.NOT_FOUND);
        }
    }
}