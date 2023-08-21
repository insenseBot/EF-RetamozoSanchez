package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Cliente {
    
    @Id
    @GeneratedValue
    private Long id_cli;

    private String nombre_cli;
    private String apellido_cli;
    private String direccion_cli;
    private String ciudad_cli;

    public Cliente() {
    }

    public Cliente(String nombre_cli, String apellido_cli, String direccion_cli, String ciudad_cli) {
        this.nombre_cli = nombre_cli;
        this.apellido_cli = apellido_cli;
        this.direccion_cli = direccion_cli;
        this.ciudad_cli = ciudad_cli;
    }
    
    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Cliente cliente = (Cliente) o;
		return Objects.equals(id_cli, cliente.id_cli) &&
			Objects.equals(nombre_cli, cliente.nombre_cli);
	}	

	@Override
	public int hashCode() {

		return Objects.hash(id_cli, nombre_cli);
	}

	@Override
	public String toString() {
		return "Vehiculo{" +
			"id_veh=" + id_cli +
			", marca_veh='" + nombre_cli + '\'' +
			'}';
	}

    public Long getId_cli() {
        return id_cli;
    }

    public void setId_cli(Long id_cli) {
        this.id_cli = id_cli;
    }

    public String getNombre_cli() {
        return nombre_cli;
    }

    public void setNombre_cli(String nombre_cli) {
        this.nombre_cli = nombre_cli;
    }

    public String getApellido_cli() {
        return apellido_cli;
    }

    public void setApellido_cli(String apellido_cli) {
        this.apellido_cli = apellido_cli;
    }

    public String getDireccion_cli() {
        return direccion_cli;
    }

    public void setDireccion_cli(String direccion_cli) {
        this.direccion_cli = direccion_cli;
    }

    public String getCiudad_cli() {
        return ciudad_cli;
    }

    public void setCiudad_cli(String ciudad_cli) {
        this.ciudad_cli = ciudad_cli;
    }
}
