/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import java.util.List;

import cz.unicorn.tga.tractor.model.CarDTO;
import cz.unicorn.tga.tractor.model.CarFilter;
import cz.unicorn.tga.tractor.model.CarNewForm;

/**
 * @author DZCJS9F
 *	
 *Interface pro práci s CarManagerServicebean
 */
public interface CarManagerService {
	/**
	  * Vytváří nové auto a volá funcki save 
	  * 
	  *
	  
	  * @since 1.1
	  */
	void createNewCar(CarNewForm carNewForm);

	/**
	  * Vytváří list všech aut 
	  * 
	  *
	  * @return všechna auta z databáze
	  * @since 1.1
	  */
	List<CarDTO> getAllCars();
	/**
	  * Vytváří list  aut dle vloženého parametru
	  * 
	  *	@param CarFilter data pro vyfiltrování aut
	  * @return všechna auta vyfiltrovaná z databáze
	  * @since 1.1
	  */

	List<CarDTO> findCarsByFilter(CarFilter filter);
	
	/**
	  * Vytváří list aut volného k pronajmutí dle vloženého parametru
	  * 
	  *	@param CarFilter data pro vyfiltrování aut
	  * @return všechna auta k pronajmu vyfiltrovaná z databáze
	  * @since 1.1
	  */
	
	List<CarDTO> findCarsForRent(CarFilter filter);


}
