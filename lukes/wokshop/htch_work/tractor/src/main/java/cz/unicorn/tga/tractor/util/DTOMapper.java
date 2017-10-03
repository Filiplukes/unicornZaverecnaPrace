/**
 * 
 */
package cz.unicorn.tga.tractor.util;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import cz.unicorn.tga.tractor.entity.Car;
import cz.unicorn.tga.tractor.entity.Stk;
import cz.unicorn.tga.tractor.model.CarDTO;
import cz.unicorn.tga.tractor.model.StkDTO;

@Mapper
public interface DTOMapper {

	CarDTO convert(final Car car);

	List<CarDTO> convert(final List<Car> cars);
	

	@Mapping(target="vin", source="car.vin")
	StkDTO convertStk(final Stk stk);
	
	
	
	List<StkDTO> convertStk(final List<Stk> stk);
}
