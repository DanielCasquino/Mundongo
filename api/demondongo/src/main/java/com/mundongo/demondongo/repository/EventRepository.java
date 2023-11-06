package com.mundongo.demondongo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.mundongo.demondongo.model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}