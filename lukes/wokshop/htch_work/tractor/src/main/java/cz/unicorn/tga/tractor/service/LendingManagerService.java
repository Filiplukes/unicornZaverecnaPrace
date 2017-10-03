/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.model.LendingNewForm;

/**
 * @author DZCJS9F
 *
 */
public interface LendingManagerService {
	/** vytváří nové pronajmutí z dat z frontendu
	 * 
	 *  @param lendingNewFor, data potřebná k vytvéřený půjčky
	 *  */
	void createNewLending(LendingNewForm lendingNewForm);


}
