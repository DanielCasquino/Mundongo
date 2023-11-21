package com.mundongo.demondongo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mundongo.demondongo.model.Comment;
import com.mundongo.demondongo.repository.CommentRepository;

@RestController
@RequestMapping("api/comments")
public class CommentController {

  @Autowired
  private CommentRepository commentRepository;

  @PatchMapping("/addReply/{commentId}")
  public ResponseEntity<String> addReply(@RequestBody Comment reply, @PathVariable Long commentId) {
    Optional<Comment> query = commentRepository.findById(commentId);
    if (query.isPresent()) {
      Comment instance = query.get();
      instance.addReply(reply);
      commentRepository.save(instance);
      return new ResponseEntity<>("Reply added successfully", HttpStatus.CREATED);
    } else {
      return new ResponseEntity<>("Reply added successfully", HttpStatus.NOT_FOUND);
    }
  }
}
