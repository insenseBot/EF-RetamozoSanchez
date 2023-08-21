package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final VehiculoRepository repositoryV;
	private final ClienteRepository repositoryC;
	private final ReporteRepository repositoryR;

	@Autowired
	public DatabaseLoader(
		VehiculoRepository repositoryV,
		ClienteRepository repositoryC,
		ReporteRepository repositoryR) {
		this.repositoryV = repositoryV;
		this.repositoryC = repositoryC;
		this.repositoryR = repositoryR;
	}

	@Override
	public void run(String... strings) throws Exception {
		
		Vehiculo vAudi = new Vehiculo("Audi", "A3 Sédan");
		Vehiculo vToyota = new Vehiculo("Toyota", "Corolla Hybrid");
		Vehiculo vBmw = new Vehiculo("BMW", "Serie 4 Cuopé");
		this.repositoryV.save((vAudi));
		this.repositoryV.save((vToyota));
		this.repositoryV.save((vBmw));

		Cliente cCarlos = new Cliente("Carlos", "Torres", "Calle las manzanas 157", "Lima");
		Cliente cJuan = new Cliente("Juan", "Lopez", "Jiron Atahualpa 47", "Lima");
		Cliente cMartin = new Cliente("Martin", "Castillo", "Avenida los Heroes 567", "Lima");
		this.repositoryC.save((cCarlos));
		this.repositoryC.save((cJuan));
		this.repositoryC.save((cMartin));

		Reporte intRep1 = new Reporte(cCarlos, vAudi);
		this.repositoryR.save(intRep1);
		Reporte intRep2 = new Reporte(cJuan, vToyota);
		this.repositoryR.save(intRep2);
		Reporte intRep3 = new Reporte(cMartin, vBmw);
		this.repositoryR.save(intRep3);
	}
}