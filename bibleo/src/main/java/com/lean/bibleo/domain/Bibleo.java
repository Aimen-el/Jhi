package com.lean.bibleo.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;


import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Bibleo.
 */
@Entity
@Table(name = "bibleo")
public class Bibleo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "titre")
    private String titre;

    @Column(name = "auteur")
    private String auteur;

    @Column(name = "edition")
    private String edition;

    @Column(name = "isbn")
    private String isbn;

    @Column(name = "dateachat")
    private LocalDate dateachat;

    @Column(name = "diponibilite")
    private Boolean diponibilite;
    
    @OneToOne(optional = false)
    @NotNull
    @JoinColumn(unique = true)
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public Bibleo titre(String titre) {
        this.titre = titre;
        return this;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getAuteur() {
        return auteur;
    }

    public Bibleo auteur(String auteur) {
        this.auteur = auteur;
        return this;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public String getEdition() {
        return edition;
    }

    public Bibleo edition(String edition) {
        this.edition = edition;
        return this;
    }

    public void setEdition(String edition) {
        this.edition = edition;
    }

    public String getIsbn() {
        return isbn;
    }

    public Bibleo isbn(String isbn) {
        this.isbn = isbn;
        return this;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public LocalDate getDateachat() {
        return dateachat;
    }

    public Bibleo dateachat(LocalDate dateachat) {
        this.dateachat = dateachat;
        return this;
    }

    public void setDateachat(LocalDate dateachat) {
        this.dateachat = dateachat;
    }

    public Boolean isDiponibilite() {
        return diponibilite;
    }

    public Bibleo diponibilite(Boolean diponibilite) {
        this.diponibilite = diponibilite;
        return this;
    }

    public void setDiponibilite(Boolean diponibilite) {
        this.diponibilite = diponibilite;
    }
    
    public User getUser() {
        return user;
    }

    public Bibleo user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Bibleo bibleo = (Bibleo) o;
        if (bibleo.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), bibleo.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Bibleo{" +
            "id=" + getId() +
            ", titre='" + getTitre() + "'" +
            ", auteur='" + getAuteur() + "'" +
            ", edition='" + getEdition() + "'" +
            ", isbn='" + getIsbn() + "'" +
            ", dateachat='" + getDateachat() + "'" +
            ", diponibilite='" + isDiponibilite() + "'" +
            "}";
    }
}
