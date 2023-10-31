package com.mundongo.demondongo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mundongo.demondongo.domain.Place;

public interface PlaceRepository extends JpaRepository<Place, Long> {
}
