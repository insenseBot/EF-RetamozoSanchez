package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Vehiculo {
    
    @Id
    @GeneratedValue
    private Long id_veh;

    private String marca_veh;
    private String modelo_veh;

    public Vehiculo() {
    }

    public Vehiculo(String marca_veh, String modelo_veh) {
        this.marca_veh = marca_veh;
        this.modelo_veh = modelo_veh;
    }

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Vehiculo vehiculo = (Vehiculo) o;
		return Objects.equals(id_veh, vehiculo.id_veh) &&
			Objects.equals(marca_veh, vehiculo.marca_veh) &&
			Objects.equals(modelo_veh, vehiculo.modelo_veh);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id_veh, marca_veh, modelo_veh);
	}

	@Override
	public String toString() {
		return "Vehiculo{" +
			"id_veh=" + id_veh +
			", marca_veh='" + marca_veh + '\'' +
			", modelo_veh='" + modelo_veh + '\'' +
			'}';
	}

    public Long getId_veh() {
        return id_veh;
    }

    public void setId_veh(Long id_veh) {
        this.id_veh = id_veh;
    }

    public String getMarca_veh() {
        return marca_veh;
    }

    public void setMarca_veh(String marca_veh) {
        this.marca_veh = marca_veh;
    }

    public String getModelo_veh() {
        return modelo_veh;
    }

    public void setModelo_veh(String modelo_veh) {
        this.modelo_veh = modelo_veh;
    }
}
