/**
 * 
 */
package cz.unicorn.tga.tractor.model;

import java.io.Serializable;
import java.util.Date;

import cz.unicorn.tga.tractor.entity.Car;
import lombok.Data;
import lombok.ToString;

/**
 * @author User
 *
 */
@Data
@ToString
public class StkDTO implements Serializable {

	private Long id;
	private String vin;
	private Date checkDate;
	private String description;
	private String isPass;

}
