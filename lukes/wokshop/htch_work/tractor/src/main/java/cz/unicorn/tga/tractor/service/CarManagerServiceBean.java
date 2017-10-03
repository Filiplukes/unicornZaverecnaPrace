/**
 * 
 */
package cz.unicorn.tga.tractor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import cz.unicorn.tga.tractor.dao.*;
import cz.unicorn.tga.tractor.entity.Car;
import cz.unicorn.tga.tractor.model.*;
import cz.unicorn.tga.tractor.model.enumeration.*;
import cz.unicorn.tga.tractor.util.*;

/**
 * @author DZCJS9F
 * 
 * Servis bean pro práci s daty patřící entitě aut
 */
@Service
@Transactional
public class CarManagerServiceBean implements CarManagerService {

	private final CarDAO carDAO;
	private final CarFilterDAO carFilterDAO;
	private final DTOMapper dtoMapper;

	@Autowired public CarManagerServiceBean(CarDAO carDAO, CarFilterDAO carFilterDAO, DTOMapper dtoMapper) {
		this.carDAO = carDAO;
		this.carFilterDAO = carFilterDAO;
		this.dtoMapper = dtoMapper;
	}

	/** {@inheritDoc} */
	@Override
	public void createNewCar(final CarNewForm carNewForm) {

		final Car car = createGeneralCar();

		// set parametrs from dto
		setFieldFromDto(carNewForm, car);

		save(car);
	}

	/**
	 * Nastavuje data entitě car
	 * 
	 * @param carNewForm 
	 * @param car
	 */
	private void setFieldFromDto(final CarNewForm carNewForm, final Car car) {
		car.setPrice(carNewForm.getPrice());
		car.setType(CarsType.valueOf(carNewForm.getType()));
		car.setVin(carNewForm.getVin());
	}

	/**Posílá data do Dao
	 * 
	 * @param car
	 */
	private void save(final Car car) {
		carDAO.save(car);
	}

	/** Vytváří nové auta s parametry, které nezadává uživatel,
	 * a to stav a datum pořízení
	 * 
	 * @return car, základ nového auta  	
	 * 
	 */
	private Car createGeneralCar() {
		final Car car = new Car();
		car.setCarState(CarState.defaultState());
		car.setDateOfAcquisition(CoreDateUtil.getNow());
		return car;
	}

	/** {@inheritDoc} */
	@Override
	public List<CarDTO> getAllCars() {

		return dtoMapper.convert(carDAO.findAll());
	}

	/** {@inheritDoc} */
	@Override
	public List<CarDTO> findCarsByFilter(final CarFilter filter) {

		return dtoMapper.convert(carFilterDAO.findByFilter(filter));
	}
	
	/** {@inheritDoc} */
	@Override
	public List<CarDTO> findCarsForRent(final CarFilter filter) {

		return dtoMapper.convert(carFilterDAO.findForRent(filter));
	}

	

}
