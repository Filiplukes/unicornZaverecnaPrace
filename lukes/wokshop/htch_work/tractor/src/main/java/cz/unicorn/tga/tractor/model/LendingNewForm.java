/**
 * 
 */
package cz.unicorn.tga.tractor.model;

import java.math.BigDecimal;
import java.util.Date;

import lombok.Data;

/**
 * @author DZCJS9F
 *
 */

@Data
public class LendingNewForm {
	private Long id;
	private Long car;
	private Date dateFrom;
	private Date dateTo;
	private BigDecimal price;
	private Long carClient;
	private Double lattitude;
	private Double longitude;
	 
	

}
