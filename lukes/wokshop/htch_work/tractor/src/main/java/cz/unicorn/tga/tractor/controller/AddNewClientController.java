package cz.unicorn.tga.tractor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import cz.unicorn.tga.tractor.model.ClientNewForm;
import cz.unicorn.tga.tractor.service.ClientManagerService;
import cz.unicorn.tga.tractor.web.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = AddNewClientController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class AddNewClientController {

	public static final String BASE_URL = CommonConstants.SLASH + "client/new";
	public final static String FORM_ATTRIBUTE_NAME = "clientNewForm";

	@Autowired
	private ClientManagerService clientManagerService;

	@Autowired
	private MessageSource messageSource;

	/*
	 * Provede ulozeni clienta URI: /client/new Method: POST
	 */
	@RequestMapping(method = RequestMethod.POST)
	public void addNewClient(@RequestBody final ClientNewForm clientNewForm) {

		// TODO Validate model
		clientManagerService.createNewClient(clientNewForm);

		return;

	}

	/*
	 * **********************************************************************
	 * PRIVATE METHODS
	 * **********************************************************************
	 */

	@InitBinder("clientNewForm")
	protected void initBinder(final WebDataBinder binder) {

		// BigDecimal custom binder
		ControllerUtils.setNumberCustomEditorToBinder(binder, CommonConstants.CZECH_LOCALE);

		// trim all string
		ControllerUtils.setStringTrimmerEditorToBinder(binder);
	}

}
