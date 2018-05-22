package com.leanovia.dashboard.web.rest;

import com.leanovia.dashboard.DashboardApp;

import com.leanovia.dashboard.domain.Extra;
import com.leanovia.dashboard.repository.ExtraRepository;
import com.leanovia.dashboard.web.rest.errors.ExceptionTranslator;

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
import java.util.List;
import java.util.ArrayList;

import static com.leanovia.dashboard.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the ExtraResource REST controller.
 *
 * @see ExtraResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = DashboardApp.class)
public class ExtraResourceIntTest {

    @Autowired
    private ExtraRepository extraRepository;


    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restExtraMockMvc;

    private Extra extra;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final ExtraResource extraResource = new ExtraResource(extraRepository);
        this.restExtraMockMvc = MockMvcBuilders.standaloneSetup(extraResource)
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
    public static Extra createEntity(EntityManager em) {
        Extra extra = new Extra();
        return extra;
    }

    @Before
    public void initTest() {
        extra = createEntity(em);
    }

    @Test
    @Transactional
    public void createExtra() throws Exception {
        int databaseSizeBeforeCreate = extraRepository.findAll().size();

        // Create the Extra
        restExtraMockMvc.perform(post("/api/extras")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(extra)))
            .andExpect(status().isCreated());

        // Validate the Extra in the database
        List<Extra> extraList = extraRepository.findAll();
        assertThat(extraList).hasSize(databaseSizeBeforeCreate + 1);
        Extra testExtra = extraList.get(extraList.size() - 1);
    }

    @Test
    @Transactional
    public void createExtraWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = extraRepository.findAll().size();

        // Create the Extra with an existing ID
        extra.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restExtraMockMvc.perform(post("/api/extras")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(extra)))
            .andExpect(status().isBadRequest());

        // Validate the Extra in the database
        List<Extra> extraList = extraRepository.findAll();
        assertThat(extraList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllExtras() throws Exception {
        // Initialize the database
        extraRepository.saveAndFlush(extra);

        // Get all the extraList
        restExtraMockMvc.perform(get("/api/extras?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(extra.getId().intValue())));
    }
    

    @Test
    @Transactional
    public void getExtra() throws Exception {
        // Initialize the database
        extraRepository.saveAndFlush(extra);

        // Get the extra
        restExtraMockMvc.perform(get("/api/extras/{id}", extra.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(extra.getId().intValue()));
    }
    @Test
    @Transactional
    public void getNonExistingExtra() throws Exception {
        // Get the extra
        restExtraMockMvc.perform(get("/api/extras/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateExtra() throws Exception {
        // Initialize the database
        extraRepository.saveAndFlush(extra);

        int databaseSizeBeforeUpdate = extraRepository.findAll().size();

        // Update the extra
        Extra updatedExtra = extraRepository.findById(extra.getId()).get();
        // Disconnect from session so that the updates on updatedExtra are not directly saved in db
        em.detach(updatedExtra);

        restExtraMockMvc.perform(put("/api/extras")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedExtra)))
            .andExpect(status().isOk());

        // Validate the Extra in the database
        List<Extra> extraList = extraRepository.findAll();
        assertThat(extraList).hasSize(databaseSizeBeforeUpdate);
        Extra testExtra = extraList.get(extraList.size() - 1);
    }

    @Test
    @Transactional
    public void updateNonExistingExtra() throws Exception {
        int databaseSizeBeforeUpdate = extraRepository.findAll().size();

        // Create the Extra

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restExtraMockMvc.perform(put("/api/extras")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(extra)))
            .andExpect(status().isBadRequest());

        // Validate the Extra in the database
        List<Extra> extraList = extraRepository.findAll();
        assertThat(extraList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteExtra() throws Exception {
        // Initialize the database
        extraRepository.saveAndFlush(extra);

        int databaseSizeBeforeDelete = extraRepository.findAll().size();

        // Get the extra
        restExtraMockMvc.perform(delete("/api/extras/{id}", extra.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Extra> extraList = extraRepository.findAll();
        assertThat(extraList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Extra.class);
        Extra extra1 = new Extra();
        extra1.setId(1L);
        Extra extra2 = new Extra();
        extra2.setId(extra1.getId());
        assertThat(extra1).isEqualTo(extra2);
        extra2.setId(2L);
        assertThat(extra1).isNotEqualTo(extra2);
        extra1.setId(null);
        assertThat(extra1).isNotEqualTo(extra2);
    }
}
