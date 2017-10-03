/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cz.unicorn.tga.tractor.entity.Client;
import cz.unicorn.tga.tractor.dao.ClientDAO;
import cz.unicorn.tga.tractor.model.ClientNewForm;
import cz.unicorn.tga.tractor.util.CoreDateUtil;
import cz.unicorn.tga.tractor.util.DTOMapper;

/**
 * @author DZCJS9F
 *
 */
@Service
@Transactional
public class ClientManagerServiceBean implements ClientManagerService {

	private final ClientDAO clientDAO;
	private final DTOMapper dtoMapper;

	@Autowired
	public ClientManagerServiceBean(ClientDAO clientDAO, DTOMapper dtoMapper) {
		this.clientDAO = clientDAO;
		this.dtoMapper = dtoMapper;
	}
	/** {@inheritDoc} */
	@Override
	public void createNewClient(final ClientNewForm clientNewForm) {

		final Client client = createGeneralClient();

		// set parametrs from dto
		setFieldFromDto(clientNewForm, client);

		save(client);
	}

	/** nastavuje do tridy client z dat dostaných z frontendu pro uložení do databáze
	 * 
	 * @param clientNewForm
	 * @param client
	 */
	private void setFieldFromDto(final ClientNewForm clientNewForm, final Client client) {
		client.setName(clientNewForm.getName());
		client.setSurname(clientNewForm.getSurname());
		client.setIco(clientNewForm.getIco());
		client.setEmail(clientNewForm.getEmail());
		client.setCeilPhone(clientNewForm.getCeilPhone());
		
	}

	/**
	 * @param client
	 */
	private void save(final Client client) {
		clientDAO.save(client);
	}

	/** Vytváří clienta se základními daty, které nezadává uživatel
	 * 
	 * 
	 * @return vrací pootřebný základ pro tvorbu klienta
	 */
	private Client createGeneralClient() {
		final Client client = new Client();
		client.setRegistrationDate(CoreDateUtil.getNow());

		return client;
	}

}
