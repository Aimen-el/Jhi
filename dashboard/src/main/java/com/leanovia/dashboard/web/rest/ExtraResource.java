package com.leanovia.dashboard.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.leanovia.dashboard.domain.Extra;
import com.leanovia.dashboard.repository.ExtraRepository;
import com.leanovia.dashboard.web.rest.errors.BadRequestAlertException;
import com.leanovia.dashboard.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Extra.
 */
@RestController
@RequestMapping("/api")
public class ExtraResource {

    private final Logger log = LoggerFactory.getLogger(ExtraResource.class);

    private static final String ENTITY_NAME = "extra";

    private final ExtraRepository extraRepository;

    public ExtraResource(ExtraRepository extraRepository) {
        this.extraRepository = extraRepository;
    }

    /**
     * POST  /extras : Create a new extra.
     *
     * @param extra the extra to create
     * @return the ResponseEntity with status 201 (Created) and with body the new extra, or with status 400 (Bad Request) if the extra has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/extras")
    @Timed
    public ResponseEntity<Extra> createExtra(@Valid @RequestBody Extra extra) throws URISyntaxException {
        log.debug("REST request to save Extra : {}", extra);
        if (extra.getId() != null) {
            throw new BadRequestAlertException("A new extra cannot already have an ID", ENTITY_NAME, "idexists");
        }        
        Extra result = extraRepository.save(extra);
        return ResponseEntity.created(new URI("/api/extras/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /extras : Updates an existing extra.
     *
     * @param extra the extra to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated extra,
     * or with status 400 (Bad Request) if the extra is not valid,
     * or with status 500 (Internal Server Error) if the extra couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/extras")
    @Timed
    public ResponseEntity<Extra> updateExtra(@Valid @RequestBody Extra extra) throws URISyntaxException {
        log.debug("REST request to update Extra : {}", extra);
        if (extra.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }        
        Extra result = extraRepository.save(extra);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, extra.getId().toString()))
            .body(result);
    }

    /**
     * GET  /extras : get all the extras.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of extras in body
     */
    @GetMapping("/extras")
    @Timed
    public List<Extra> getAllExtras() {
        log.debug("REST request to get all Extras");
        return extraRepository.findAll();
    }

    /**
     * GET  /extras/:id : get the "id" extra.
     *
     * @param id the id of the extra to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the extra, or with status 404 (Not Found)
     */
    @GetMapping("/extras/{id}")
    @Timed
    public ResponseEntity<Extra> getExtra(@PathVariable Long id) {
        log.debug("REST request to get Extra : {}", id);
        Optional<Extra> extra = extraRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(extra);
    }

    /**
     * DELETE  /extras/:id : delete the "id" extra.
     *
     * @param id the id of the extra to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/extras/{id}")
    @Timed
    public ResponseEntity<Void> deleteExtra(@PathVariable Long id) {
        log.debug("REST request to delete Extra : {}", id);
        extraRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
