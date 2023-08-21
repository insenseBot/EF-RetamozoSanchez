package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "vehiculos", path = "vehiculos")
public interface VehiculoRepository extends CrudRepository<Vehiculo, Long>{
}
