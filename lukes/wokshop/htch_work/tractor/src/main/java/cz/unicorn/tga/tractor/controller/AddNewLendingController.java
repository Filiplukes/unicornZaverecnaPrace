package cz.unicorn.tga.tractor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cz.unicorn.tga.tractor.model.LendingNewForm;
import cz.unicorn.tga.tractor.service.LendingManagerService;
import cz.unicorn.tga.tractor.web.CommonConstants;
import cz.unicorn.tga.tractor.web.ControllerUtils;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = AddNewLendingController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class AddNewLendingController {

	public static final String BASE_URL = CommonConstants.SLASH + "lending/new";
	public final static String FORM_ATTRIBUTE_NAME = "lendingNewForm";

	@Autowired
	private LendingManagerService lendingManagerService;

	@Autowired
	private MessageSource messageSource;

	/*
	 * Provede ulozeni lendind URI: Method: POST
	 */
	@RequestMapping(method = RequestMethod.POST)
	public void addNewLending(@RequestBody final LendingNewForm LendingNewForm) {
		
		// TODO Validate model
		lendingManagerService.createNewLending(LendingNewForm);

		return;

	}

	/*
	 * **********************************************************************
	 * PRIVATE METHODS
	 * **********************************************************************
	 */

	@InitBinder("LendingNewForm")
	protected void initBinder(final WebDataBinder binder) {

		// BigDecimal custom binder
		ControllerUtils.setNumberCustomEditorToBinder(binder, CommonConstants.CZECH_LOCALE);

		// trim all string
		ControllerUtils.setStringTrimmerEditorToBinder(binder);
	}

}
