/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cz.unicorn.tga.tractor.dao.CarDAO;
import cz.unicorn.tga.tractor.dao.ClientDAO;
import cz.unicorn.tga.tractor.dao.LendingDAO;
import cz.unicorn.tga.tractor.entity.Lending;
import cz.unicorn.tga.tractor.model.LendingNewForm;
import cz.unicorn.tga.tractor.util.DTOMapper;

/**
 * @author DZCJS9F
 *
 *
 *Servisa obstarávající vytvoření půjčky vozidla
 */
@Service
@Transactional
public class LendingManagerServiceBean implements LendingManagerService {

	private final CarDAO carDAO;
	private final ClientDAO clientDAO;
	private final LendingDAO lendingDAO;
	private final DTOMapper dtoMapper;

	@Autowired
	public LendingManagerServiceBean(LendingDAO lendingDAO, DTOMapper dtoMapper, CarDAO carDAO, ClientDAO clientDAO) {
		this.lendingDAO = lendingDAO;
		this.dtoMapper = dtoMapper;
		this.carDAO = carDAO;
		this.clientDAO = clientDAO;
	}
	
	/** {@inheritDoc} */
	@Override
	public void createNewLending(final LendingNewForm lendingNewForm) {

		final Lending lending = createGeneralLending();

		// set parametrs from dto
		setFieldFromDto(lendingNewForm, lending);

		save(lending);
	}

	/**
	 * 
	 * nastavuje data pro DTO
	 * 
	 * @param lendingNewForm
	 * @param lending
	 */
	private void setFieldFromDto(final LendingNewForm lendingNewForm, final Lending lending) {
		lending.setCar(carDAO.findOne(lendingNewForm.getCar()));
		lending.setDateFrom(lendingNewForm.getDateFrom());
		lending.setDateTo(lendingNewForm.getDateTo());
		lending.setLattitude(lendingNewForm.getLattitude());
		lending.setLongitude(lendingNewForm.getLongitude());
		lending.setPrice(lendingNewForm.getPrice());
		lending.setClient(clientDAO.findOne(lendingNewForm.getCarClient()));
	
	}

	/** ukládá půjčku vozidla
	 * 
	 * @param lending
	 */
	private void save(final Lending lending) {
		lendingDAO.save(lending);
	}

	/**připravuje základ pro půjčku 
	 * 
	 */
	private Lending createGeneralLending() {
		final Lending lending = new Lending();
		return lending;
	}



}
