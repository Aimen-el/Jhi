package com.leanovia.dashboard.domain;

import java.time.LocalDate;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Extra.class)
public abstract class Extra_ {

	public static volatile SingularAttribute<Extra, Integer> congePaye;
	public static volatile SingularAttribute<Extra, String> mission;
	public static volatile SingularAttribute<Extra, String> fonction;
	public static volatile SingularAttribute<Extra, String> telephone;
	public static volatile SingularAttribute<Extra, Long> id;
	public static volatile SingularAttribute<Extra, LocalDate> dateEntree;
	public static volatile SingularAttribute<Extra, User> user;

}

