/**
 * 
 */
package cz.unicorn.tga.tractor.entity;

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
import javax.persistence.Table;

import cz.unicorn.tga.tractor.model.enumeration.PassSTK;
import lombok.Data;

/**
 * @author DZCJS9F
 *
 */
@Entity
@Data
@Table(name="CAR_STK")
public class Stk {

	@Id
	@SequenceGenerator(name = "CAR_STK_ID_GENERATOR", sequenceName = "HIBERNATE_SEQ")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CAR_STK_ID_GENERATOR")
	
	
	private Long id;

	@JoinColumn(name="car")
    @ManyToOne
    private Car car;
		
	@Column(name = "check_date")
	private Date checkDate;

	private String description;
	
	@Column(name = "is_pass")
	@Enumerated(EnumType.STRING)
	private PassSTK isPass;
	

}
