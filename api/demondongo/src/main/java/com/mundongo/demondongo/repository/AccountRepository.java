package com.mundongo.demondongo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mundongo.demondongo.model.Account;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    Account findByEmail(String email);
}