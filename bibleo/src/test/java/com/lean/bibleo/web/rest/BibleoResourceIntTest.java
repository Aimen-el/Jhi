package com.lean.bibleo.web.rest;

import com.lean.bibleo.BibleoApp;

import com.lean.bibleo.domain.Bibleo;
import com.lean.bibleo.repository.BibleoRepository;
import com.lean.bibleo.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.ArrayList;

import static com.lean.bibleo.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the BibleoResource REST controller.
 *
 * @see BibleoResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = BibleoApp.class)
public class BibleoResourceIntTest {

    private static final String DEFAULT_TITRE = "AAAAAAAAAA";
    private static final String UPDATED_TITRE = "BBBBBBBBBB";

    private static final String DEFAULT_AUTEUR = "AAAAAAAAAA";
    private static final String UPDATED_AUTEUR = "BBBBBBBBBB";

    private static final String DEFAULT_EDITION = "AAAAAAAAAA";
    private static final String UPDATED_EDITION = "BBBBBBBBBB";

    private static final String DEFAULT_ISBN = "AAAAAAAAAA";
    private static final String UPDATED_ISBN = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATEACHAT = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATEACHAT = LocalDate.now(ZoneId.systemDefault());

    private static final Boolean DEFAULT_DIPONIBILITE = false;
    private static final Boolean UPDATED_DIPONIBILITE = true;

    @Autowired
    private BibleoRepository bibleoRepository;


    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restBibleoMockMvc;

    private Bibleo bibleo;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final BibleoResource bibleoResource = new BibleoResource(bibleoRepository);
        this.restBibleoMockMvc = MockMvcBuilders.standaloneSetup(bibleoResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Bibleo createEntity(EntityManager em) {
        Bibleo bibleo = new Bibleo()
            .titre(DEFAULT_TITRE)
            .auteur(DEFAULT_AUTEUR)
            .edition(DEFAULT_EDITION)
            .isbn(DEFAULT_ISBN)
            .dateachat(DEFAULT_DATEACHAT)
            .diponibilite(DEFAULT_DIPONIBILITE);
        return bibleo;
    }

    @Before
    public void initTest() {
        bibleo = createEntity(em);
    }

    @Test
    @Transactional
    public void createBibleo() throws Exception {
        int databaseSizeBeforeCreate = bibleoRepository.findAll().size();

        // Create the Bibleo
        restBibleoMockMvc.perform(post("/api/bibleos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(bibleo)))
            .andExpect(status().isCreated());

        // Validate the Bibleo in the database
        List<Bibleo> bibleoList = bibleoRepository.findAll();
        assertThat(bibleoList).hasSize(databaseSizeBeforeCreate + 1);
        Bibleo testBibleo = bibleoList.get(bibleoList.size() - 1);
        assertThat(testBibleo.getTitre()).isEqualTo(DEFAULT_TITRE);
        assertThat(testBibleo.getAuteur()).isEqualTo(DEFAULT_AUTEUR);
        assertThat(testBibleo.getEdition()).isEqualTo(DEFAULT_EDITION);
        assertThat(testBibleo.getIsbn()).isEqualTo(DEFAULT_ISBN);
        assertThat(testBibleo.getDateachat()).isEqualTo(DEFAULT_DATEACHAT);
        assertThat(testBibleo.isDiponibilite()).isEqualTo(DEFAULT_DIPONIBILITE);
    }

    @Test
    @Transactional
    public void createBibleoWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = bibleoRepository.findAll().size();

        // Create the Bibleo with an existing ID
        bibleo.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restBibleoMockMvc.perform(post("/api/bibleos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(bibleo)))
            .andExpect(status().isBadRequest());

        // Validate the Bibleo in the database
        List<Bibleo> bibleoList = bibleoRepository.findAll();
        assertThat(bibleoList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllBibleos() throws Exception {
        // Initialize the database
        bibleoRepository.saveAndFlush(bibleo);

        // Get all the bibleoList
        restBibleoMockMvc.perform(get("/api/bibleos?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(bibleo.getId().intValue())))
            .andExpect(jsonPath("$.[*].titre").value(hasItem(DEFAULT_TITRE.toString())))
            .andExpect(jsonPath("$.[*].auteur").value(hasItem(DEFAULT_AUTEUR.toString())))
            .andExpect(jsonPath("$.[*].edition").value(hasItem(DEFAULT_EDITION.toString())))
            .andExpect(jsonPath("$.[*].isbn").value(hasItem(DEFAULT_ISBN.toString())))
            .andExpect(jsonPath("$.[*].dateachat").value(hasItem(DEFAULT_DATEACHAT.toString())))
            .andExpect(jsonPath("$.[*].diponibilite").value(hasItem(DEFAULT_DIPONIBILITE.booleanValue())));
    }
    

    @Test
    @Transactional
    public void getBibleo() throws Exception {
        // Initialize the database
        bibleoRepository.saveAndFlush(bibleo);

        // Get the bibleo
        restBibleoMockMvc.perform(get("/api/bibleos/{id}", bibleo.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(bibleo.getId().intValue()))
            .andExpect(jsonPath("$.titre").value(DEFAULT_TITRE.toString()))
            .andExpect(jsonPath("$.auteur").value(DEFAULT_AUTEUR.toString()))
            .andExpect(jsonPath("$.edition").value(DEFAULT_EDITION.toString()))
            .andExpect(jsonPath("$.isbn").value(DEFAULT_ISBN.toString()))
            .andExpect(jsonPath("$.dateachat").value(DEFAULT_DATEACHAT.toString()))
            .andExpect(jsonPath("$.diponibilite").value(DEFAULT_DIPONIBILITE.booleanValue()));
    }
    @Test
    @Transactional
    public void getNonExistingBibleo() throws Exception {
        // Get the bibleo
        restBibleoMockMvc.perform(get("/api/bibleos/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateBibleo() throws Exception {
        // Initialize the database
        bibleoRepository.saveAndFlush(bibleo);

        int databaseSizeBeforeUpdate = bibleoRepository.findAll().size();

        // Update the bibleo
        Bibleo updatedBibleo = bibleoRepository.findById(bibleo.getId()).get();
        // Disconnect from session so that the updates on updatedBibleo are not directly saved in db
        em.detach(updatedBibleo);
        updatedBibleo
            .titre(UPDATED_TITRE)
            .auteur(UPDATED_AUTEUR)
            .edition(UPDATED_EDITION)
            .isbn(UPDATED_ISBN)
            .dateachat(UPDATED_DATEACHAT)
            .diponibilite(UPDATED_DIPONIBILITE);

        restBibleoMockMvc.perform(put("/api/bibleos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedBibleo)))
            .andExpect(status().isOk());

        // Validate the Bibleo in the database
        List<Bibleo> bibleoList = bibleoRepository.findAll();
        assertThat(bibleoList).hasSize(databaseSizeBeforeUpdate);
        Bibleo testBibleo = bibleoList.get(bibleoList.size() - 1);
        assertThat(testBibleo.getTitre()).isEqualTo(UPDATED_TITRE);
        assertThat(testBibleo.getAuteur()).isEqualTo(UPDATED_AUTEUR);
        assertThat(testBibleo.getEdition()).isEqualTo(UPDATED_EDITION);
        assertThat(testBibleo.getIsbn()).isEqualTo(UPDATED_ISBN);
        assertThat(testBibleo.getDateachat()).isEqualTo(UPDATED_DATEACHAT);
        assertThat(testBibleo.isDiponibilite()).isEqualTo(UPDATED_DIPONIBILITE);
    }

    @Test
    @Transactional
    public void updateNonExistingBibleo() throws Exception {
        int databaseSizeBeforeUpdate = bibleoRepository.findAll().size();

        // Create the Bibleo

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restBibleoMockMvc.perform(put("/api/bibleos")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(bibleo)))
            .andExpect(status().isBadRequest());

        // Validate the Bibleo in the database
        List<Bibleo> bibleoList = bibleoRepository.findAll();
        assertThat(bibleoList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteBibleo() throws Exception {
        // Initialize the database
        bibleoRepository.saveAndFlush(bibleo);

        int databaseSizeBeforeDelete = bibleoRepository.findAll().size();

        // Get the bibleo
        restBibleoMockMvc.perform(delete("/api/bibleos/{id}", bibleo.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Bibleo> bibleoList = bibleoRepository.findAll();
        assertThat(bibleoList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Bibleo.class);
        Bibleo bibleo1 = new Bibleo();
        bibleo1.setId(1L);
        Bibleo bibleo2 = new Bibleo();
        bibleo2.setId(bibleo1.getId());
        assertThat(bibleo1).isEqualTo(bibleo2);
        bibleo2.setId(2L);
        assertThat(bibleo1).isNotEqualTo(bibleo2);
        bibleo1.setId(null);
        assertThat(bibleo1).isNotEqualTo(bibleo2);
    }
}
