package com.devsuperior.dsvendas.repositories;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){
	 List<Seller> result = repository.findAll();
	 return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}
}
