//UserRepository.java
package com.mundongo.demondongo.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mundongo.demondongo.domain.*;

public interface UsersRepository extends JpaRepository<Users, Long> {
}