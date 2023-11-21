package com.mundongo.demondongo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import java.time.LocalDateTime;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(length = 1000)
    private String content;

    @OneToOne
    private Account author;

    @Column(nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime date;

    @OneToMany
    @JoinTable(name = "comment_replies", joinColumns = @JoinColumn(name = "comment_id"), inverseJoinColumns = @JoinColumn(name = "replies_id"))
    private Set<Comment> replies;

    public Set<Comment> getReplies() {
        return this.replies;
    }

    public void addReply(Comment reply) {
        this.replies.add(reply);
    }

    public Comment() {
    }

    public Comment(Long id, String content, Account author) {
        this.id = id;
        this.content = content;
        this.author = author;
        this.date = LocalDateTime.now();
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Account getAuthor() {
        return this.author;
    }

    public void setAuthor(Account author) {
        this.author = author;
    }
}
