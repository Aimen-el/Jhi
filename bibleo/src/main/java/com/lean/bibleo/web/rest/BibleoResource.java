package com.lean.bibleo.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.lean.bibleo.domain.Bibleo;
import com.lean.bibleo.repository.BibleoRepository;
import com.lean.bibleo.web.rest.errors.BadRequestAlertException;
import com.lean.bibleo.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

/**
 * REST controller for managing Bibleo.
 */
@RestController
@RequestMapping("/api")
public class BibleoResource {

    private final Logger log = LoggerFactory.getLogger(BibleoResource.class);

    private static final String ENTITY_NAME = "bibleo";

    private final BibleoRepository bibleoRepository;

    public BibleoResource(BibleoRepository bibleoRepository) {
        this.bibleoRepository = bibleoRepository;
    }

    /**
     * POST  /bibleos : Create a new bibleo.
     *
     * @param bibleo the bibleo to create
     * @return the ResponseEntity with status 201 (Created) and with body the new bibleo, or with status 400 (Bad Request) if the bibleo has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/bibleos")
    @Timed
    public ResponseEntity<Bibleo> createBibleo(@Valid @RequestBody Bibleo bibleo) throws URISyntaxException {
        log.debug("REST request to save Bibleo : {}", bibleo);
        if (bibleo.getId() != null) {
            throw new BadRequestAlertException("A new bibleo cannot already have an ID", ENTITY_NAME, "idexists");
        }        
        Bibleo result = bibleoRepository.save(bibleo);
        return ResponseEntity.created(new URI("/api/bibleos/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /bibleos : Updates an existing bibleo.
     *
     * @param bibleo the bibleo to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated bibleo,
     * or with status 400 (Bad Request) if the bibleo is not valid,
     * or with status 500 (Internal Server Error) if the bibleo couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/bibleos")
    @Timed
    public ResponseEntity<Bibleo> updateBibleo(@RequestBody Bibleo bibleo) throws URISyntaxException {
        log.debug("REST request to update Bibleo : {}", bibleo);
        if (bibleo.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }        
        Bibleo result = bibleoRepository.save(bibleo);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, bibleo.getId().toString()))
            .body(result);
    }

    /**
     * GET  /bibleos : get all the bibleos.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of bibleos in body
     */
    @GetMapping("/bibleos")
    @Timed
    public List<Bibleo> getAllBibleos() {
        log.debug("REST request to get all Bibleos");
        return bibleoRepository.findAll();
    }

    /**
     * GET  /bibleos/:id : get the "id" bibleo.
     *
     * @param id the id of the bibleo to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the bibleo, or with status 404 (Not Found)
     */
    @GetMapping("/bibleos/{id}")
    @Timed
    public ResponseEntity<Bibleo> getBibleo(@PathVariable Long id) {
        log.debug("REST request to get Bibleo : {}", id);
        Optional<Bibleo> bibleo = bibleoRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(bibleo);
    }

    /**
     * DELETE  /bibleos/:id : delete the "id" bibleo.
     *
     * @param id the id of the bibleo to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/bibleos/{id}")
    @Timed
    public ResponseEntity<Void> deleteBibleo(@PathVariable Long id) {
        log.debug("REST request to delete Bibleo : {}", id);
        bibleoRepository.deleteById(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
