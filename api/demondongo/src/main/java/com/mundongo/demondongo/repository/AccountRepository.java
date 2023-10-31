package com.mundongo.demondongo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mundongo.demondongo.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

}