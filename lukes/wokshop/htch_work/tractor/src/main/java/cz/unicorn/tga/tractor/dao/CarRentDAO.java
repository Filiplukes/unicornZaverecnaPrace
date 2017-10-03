package cz.unicorn.tga.tractor.dao;

import java.util.List;

import cz.unicorn.tga.tractor.entity.Car;
import cz.unicorn.tga.tractor.model.CarFilter;

public interface CarRentDAO extends GenericDAO<Car,Long> {

	/** {@inheritDoc} */
	@SuppressWarnings("unchecked")
	List<Car> findForRent(final CarFilter filter);
}
