package com.leanovia.dashboard.repository;

import com.leanovia.dashboard.domain.Extra;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.*;

/**
 * Spring Data JPA repository for the Extra entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ExtraRepository extends JpaRepository<Extra, Long> {

}
