package com.mundongo.demondongo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mundongo.demondongo.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
