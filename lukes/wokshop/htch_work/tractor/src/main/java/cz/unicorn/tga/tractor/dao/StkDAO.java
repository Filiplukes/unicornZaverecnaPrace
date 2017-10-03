package cz.unicorn.tga.tractor.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import cz.unicorn.tga.tractor.entity.Stk;


public interface StkDAO extends JpaRepository<Stk,Long> {

}
