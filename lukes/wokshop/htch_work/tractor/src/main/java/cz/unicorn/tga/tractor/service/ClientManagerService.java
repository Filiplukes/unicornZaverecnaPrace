/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import cz.unicorn.tga.tractor.model.ClientNewForm;

/**
 * @author DZCJS9F
 *
 */
public interface ClientManagerService {
	/** vytváří nového klienta z příchozých dat
	 * 
	 *@param ClientNewForm, obsahuje data potřebná k vytvoření clienta
 */
	void createNewClient(ClientNewForm clientNewForm);


}
