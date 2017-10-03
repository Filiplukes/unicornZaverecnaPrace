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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import cz.unicorn.tga.tractor.model.enumeration.CarState;
import cz.unicorn.tga.tractor.model.enumeration.CarsType;
import lombok.Data;

/**
 * @author DZCJS9F
 *
 */
@Entity
@Data
public class Lending {

	@Id
	@SequenceGenerator(name = "LEDING_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "LEDING_ID_GENERATOR")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "car")	
	private Car car;
	

	@Column(name = "date_from")
	private Date dateFrom;
	
	@Column(name = "date_to")
	private Date dateTo;

	private BigDecimal price;
	
	
	@ManyToOne
	@JoinColumn(name = "car_client")	
	private Client Client;


	private double lattitude;
	
	private double longitude;

	


}
