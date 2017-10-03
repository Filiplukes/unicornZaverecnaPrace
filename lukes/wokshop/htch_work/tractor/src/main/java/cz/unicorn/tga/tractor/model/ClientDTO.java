/**
 * 
 */
package cz.unicorn.tga.tractor.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import lombok.*;

/**
 * @author User
 *
 */
@Data
@ToString
public class ClientDTO implements Serializable {

	private Long id;
	private String Name;
	private String Surname;
	private String ico;
	private Date registrationDate;
	private String email;
	private String ceilPhone;

}
