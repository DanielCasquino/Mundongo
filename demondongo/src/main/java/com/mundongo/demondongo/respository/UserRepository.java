package com.mundongo.demondongo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mundongo.demondongo.domain.*;

public interface UserRepository extends JpaRepository<User, Long> {

}
