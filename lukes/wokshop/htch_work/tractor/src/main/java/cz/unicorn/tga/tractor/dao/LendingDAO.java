package cz.unicorn.tga.tractor.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import cz.unicorn.tga.tractor.entity.Lending;


public interface LendingDAO extends JpaRepository<Lending,Long> {

}
