/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import java.util.List;

import cz.unicorn.tga.tractor.model.StkCar;
import cz.unicorn.tga.tractor.model.StkDTO;

/**
 * @author DZCJS9F
 *
 */
public interface StkManagerService {
	

	List<StkDTO> getSpecifikStk(StkCar stkCar);
	List<StkDTO> getOldStk();



}
