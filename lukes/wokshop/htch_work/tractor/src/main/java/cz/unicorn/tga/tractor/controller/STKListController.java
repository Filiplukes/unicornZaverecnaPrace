/**
 * 
 */
package cz.unicorn.tga.tractor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cz.unicorn.tga.tractor.model.StkDTO;
import cz.unicorn.tga.tractor.service.StkManagerService;
import cz.unicorn.tga.tractor.web.CommonConstants;

/**
 * @author DZCJS9F
 *
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = STKListController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class STKListController {

	public static final String BASE_URL = CommonConstants.SLASH + "STK";

	@Autowired
	private StkManagerService stkService;

	@RequestMapping(method = RequestMethod.GET)
	public StkDTO[] getAllStk() {
		final List<StkDTO> stk = stkService.getOldStk();
		
		return stk.toArray(new StkDTO[stk.size()]);
	}
		
	
}
