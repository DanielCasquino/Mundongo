package com.mundongo.demondongo.model;

import jakarta.persistence.*;


@Entity
@Table(name = "tag")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String tag;

    @Column (nullable = false)
    private String color;

    public Tag() {
    }

    public Tag(String tag, String color) {
        this.tag = tag;
        this.color = color;
    }

    public Long getId() {
        return this.id;
    }

    public String getTag() {
        return this.tag;
    }

    public String getColor() {
        return this.color;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public void setColor(String color) {
        this.color = color;
    }

}
