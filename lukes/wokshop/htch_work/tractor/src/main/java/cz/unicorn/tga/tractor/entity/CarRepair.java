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

import cz.unicorn.tga.tractor.model.enumeration.CarState;
import cz.unicorn.tga.tractor.model.enumeration.CarsType;
import lombok.Data;

/**
 * @author DZCJS9F
 *
 */
@Entity
@Data
public class CarRepair {

	@Id
	@SequenceGenerator(name = "CAR_REPAIRE_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CAR_REPAIRE_ID_GENERATOR")
	private Long id;

	
	private Long car;

	private BigDecimal price;

	@Column(name = "repair_resolution")
	private String  repairResolution ;

	@Column(name = "date_repair")
	private Date dateRepair;





}
