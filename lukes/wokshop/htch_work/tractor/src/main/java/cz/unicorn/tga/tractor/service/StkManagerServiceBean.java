/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cz.unicorn.tga.tractor.dao.CarDAO;
import cz.unicorn.tga.tractor.dao.StkDAO;
import cz.unicorn.tga.tractor.model.StkCar;
import cz.unicorn.tga.tractor.model.StkDTO;
import cz.unicorn.tga.tractor.util.DTOMapper;

/**
 * @author DZCJS9F
 *
 *Servis beana, pro práci s STK
 */
@Service
@Transactional
public class StkManagerServiceBean implements StkManagerService {
	private final CarDAO carDAO;
	private final StkDAO stkDAO;
	private final DTOMapper dtoMapper;

	@Autowired
	public StkManagerServiceBean(StkDAO stkDAO, DTOMapper dtoMapper, CarDAO carDAO) {
		this.stkDAO = stkDAO;
		this.dtoMapper = dtoMapper;
		this.carDAO = carDAO;

	}

	/**
	  * Vytváří list s STK aut starších roku a pul, u více dat k jednomu vozidlu,
	  * uloží nejnovější, zbytek zahodí
	  * 
	  * @return pole STK, které nejnouvější u vozidla, ale starší 1,5 roku
	  * 
	  * @since 1.0
	  */
	
	@Override
	public List<StkDTO> getOldStk() {
		List<StkDTO> oldStk = new ArrayList<StkDTO>();
		List<StkDTO> newStk = new ArrayList<StkDTO>();
		oldStk = dtoMapper.convertStk(stkDAO.findAll(new Sort(Sort.Direction.DESC, "car")));
		Calendar nowDate = Calendar.getInstance();

		for (int i = 0; i < oldStk.size(); i++) {

			if (newStk.isEmpty()) {
				newStk.add(oldStk.get(0));

			} else if ((oldStk.get(i).getVin()) == (newStk.get(newStk.size() - 1).getVin())) {
				if (oldStk.get(i).getCheckDate().compareTo(newStk.get(newStk.size() - 1).getCheckDate()) > 0) {

					newStk.set(newStk.size() - 1, oldStk.get(i));

				}
			} else {

				newStk.add(oldStk.get(i));

			}

		}

		Iterator<StkDTO> iter = newStk.iterator();
		nowDate.add(Calendar.MONTH, -18);
		while (iter.hasNext()) {
			if (iter.next().getCheckDate().compareTo(nowDate.getTime()) > 0) {
				iter.remove();
			}
		}

		return newStk;
	}

	/**
	  * Vytváří list s STK specifického auta
	  *
	  * @param obet StkCar, Specifické auto
	  * @param maxCas maximální čas, který drak může strávit konzumací zvířete
	  * @return pole STK, které se vypíší na frontend
	  * 
	  * @since 1.0
	  */
	
	@Override
	public List<StkDTO> getSpecifikStk(StkCar stkCar) {
		List<StkDTO> carStk = new ArrayList<StkDTO>();
		carStk = dtoMapper.convertStk(stkDAO.findAll());

		Iterator<StkDTO> iter = carStk.iterator();
		while (iter.hasNext()) {

			if (!iter.next().getVin().equals(stkCar.getVin())) {
				iter.remove();
			}

		}

		return carStk;
	}

}
