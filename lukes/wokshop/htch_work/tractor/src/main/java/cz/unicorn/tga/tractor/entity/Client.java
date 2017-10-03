/**
 * 
 */
package cz.unicorn.tga.tractor.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import cz.unicorn.tga.tractor.model.enumeration.CarState;
import cz.unicorn.tga.tractor.model.enumeration.CarsType;
import lombok.Data;

/**
 * @author DZCJS9F
 *
 */
@Entity
@Data
@Table(name="Car_Client")
public class Client {

	@Id
	@SequenceGenerator(name = "CAR_CLIENT_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CAR_CLIENT_ID_GENERATOR")
	private Long id;

	private String name;
	
	private String surname;

	private String ico;

	@Column(name = "registration_date")
	private Date registrationDate;


	private String email;
	
	@Column(name = "ceil_phone")
	private String ceilPhone;


}
