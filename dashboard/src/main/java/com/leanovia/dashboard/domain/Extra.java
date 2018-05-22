package com.leanovia.dashboard.domain;


import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Extra.
 */
@Entity
@Table(name = "extra")
public class Extra implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "date_entree", nullable = false)
    private LocalDate dateEntree;

    @Column(name = "telephone")
    private String telephone;

    @Column(name = "conge_paye")
    private Integer congePaye;

    @Column(name = "mission")
    private String mission;

    @Column(name = "fonction")
    private String fonction;

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

    public LocalDate getDateEntree() {
        return dateEntree;
    }

    public Extra dateEntree(LocalDate dateEntree) {
        this.dateEntree = dateEntree;
        return this;
    }

    public void setDateEntree(LocalDate dateEntree) {
        this.dateEntree = dateEntree;
    }

    public String getTelephone() {
        return telephone;
    }

    public Extra telephone(String telephone) {
        this.telephone = telephone;
        return this;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public Integer getCongePaye() {
        return congePaye;
    }

    public Extra congePaye(Integer congePaye) {
        this.congePaye = congePaye;
        return this;
    }

    public void setCongePaye(Integer congePaye) {
        this.congePaye = congePaye;
    }

    public String getMission() {
        return mission;
    }

    public Extra mission(String mission) {
        this.mission = mission;
        return this;
    }

    public void setMission(String mission) {
        this.mission = mission;
    }

    public String getFonction() {
        return fonction;
    }

    public Extra fonction(String fonction) {
        this.fonction = fonction;
        return this;
    }

    public void setFonction(String fonction) {
        this.fonction = fonction;
    }

    public User getUser() {
        return user;
    }

    public Extra user(User user) {
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
        Extra extra = (Extra) o;
        if (extra.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), extra.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Extra{" +
            "id=" + getId() +
            ", dateEntree='" + getDateEntree() + "'" +
            ", telephone='" + getTelephone() + "'" +
            ", congePaye=" + getCongePaye() +
            ", mission='" + getMission() + "'" +
            ", fonction='" + getFonction() + "'" +
            "}";
    }
}
