package com.lean.bibleo.repository;

import com.lean.bibleo.domain.Bibleo;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.*;

/**
 * Spring Data JPA repository for the Bibleo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BibleoRepository extends JpaRepository<Bibleo, Long> {

}
