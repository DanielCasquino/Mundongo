package com.mundongo.demondongo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mundongo.demondongo.domain.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

}