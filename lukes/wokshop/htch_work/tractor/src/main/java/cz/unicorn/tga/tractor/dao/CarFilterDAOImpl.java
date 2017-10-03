package cz.unicorn.tga.tractor.dao;

import java.util.Date;
import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;

import cz.unicorn.tga.tractor.entity.Car;
import cz.unicorn.tga.tractor.model.CarFilter;
import cz.unicorn.tga.tractor.model.enumeration.CarState;
import cz.unicorn.tga.tractor.model.enumeration.CarsType;
import cz.unicorn.tga.tractor.util.QueryBuilder;

@Repository
public class CarFilterDAOImpl extends GenericHibernateDAO<Car,Long> implements CarFilterDAO {

	/** {@inheritDoc} */
	@SuppressWarnings("unchecked")
	public List<Car> findByFilter(final CarFilter filter) {
		final Query query = createQueryFromCarFilter(filter);

		return query.list();
	}

	private Query createQueryFromCarFilter(final CarFilter filter) {
		final QueryBuilder builder = new QueryBuilder(getSession(), "SELECT c FROM Car c WHERE 1 = 1");

		builder.appendIfNotNull("AND c.id = :id", "id", filter.getId());
		builder.appendIfNotNull("AND c.vin = :vin", "vin", filter.getVin());
		builder.appendIfNotNull("AND c.type = :type", "type", (filter.getType() != null) ? CarsType.valueOf(filter.getType()) : null);
		builder.appendIfNotNull("AND c.state = :state", "state", (filter.getState() != null) ? CarState.valueOf(filter.getState()) : null);
		builder.appendIfNotNull("AND c.dateOfAcquisition >= :acquiredFrom", "acquiredFrom", filter.getAcquiredFrom());
		builder.appendIfNotNull("AND c.dateOfAcquisition <= :acquiredTo", "acquiredTo", filter.getAcquiredTo());
		builder.appendIfNotNull("AND c.dateOfLastTechnicalCheck >= :checkFrom", "checkFrom",
				filter.getLastTechnicalCheckFrom());
		builder.appendIfNotNull("AND c.dateOfLastTechnicalCheck <= :checkTo", "checkTo",
				filter.getLastTechnicalCheckTo());
		builder.appendIfNotNull("AND c.price >= :priceFrom", "priceFrom", filter.getPriceFrom());
		builder.appendIfNotNull("AND c.price <= :priceTo", "priceTo", filter.getPriceTo());

		return builder.build();
	}

	@Override
	public List<Car> findForRent(CarFilter filter) {



		final Query query = createQueryRentCar(filter);

		return query.list();
	}

	private Query createQueryRentCar(final CarFilter filter) {
		final QueryBuilder builder = new QueryBuilder(getSession(), "SELECT c FROM Car c  WHERE 1 = 1");

		
		builder.append("AND not exists (select l.id from Lending l where c.id = l.car AND  l.dateFrom>= :from","from", filter.getDateFrom());
		builder.append("AND l.dateTo<= :To)", "To", filter.getDateTo());
		
		
		
		builder.appendIfNotNull("AND c.type = :type", "type", CarsType.parseType(filter.getType()));
		builder.appendIfNotNull("AND c.carState = :state", "state", CarState.IN_GARAGE);

		return builder.build();
		
		
	}

}
