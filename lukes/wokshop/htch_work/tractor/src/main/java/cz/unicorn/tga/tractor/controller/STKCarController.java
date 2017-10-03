/**
 * 
 */
package cz.unicorn.tga.tractor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import cz.unicorn.tga.tractor.model.StkCar;
import cz.unicorn.tga.tractor.model.StkDTO;
import cz.unicorn.tga.tractor.service.StkManagerService;
import cz.unicorn.tga.tractor.web.CommonConstants;

/**
 * @author DZCJS9F
 *
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = STKCarController.BASE_URL, produces = MediaType.APPLICATION_JSON_VALUE)
public class STKCarController {

	public static final String BASE_URL = CommonConstants.SLASH + "STKcar";

	@Autowired
	private StkManagerService stkService;

	@RequestMapping(method = RequestMethod.POST)
	public StkDTO[] getAllStk(@RequestBody final StkCar stkCar) {
		final List<StkDTO> stk = stkService.getSpecifikStk(stkCar);
		
		return stk.toArray(new StkDTO[stk.size()]);
	}
		
	
}
