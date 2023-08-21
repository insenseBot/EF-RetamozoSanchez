const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageNuevoVehiculo = () => {

    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/vehiculos',
            entity: { marca_veh: marca, modelo_veh: modelo },
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <h1>Nuevo Vehiculo</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor='marca'>Marca</label>
                <input type="text" id="Marca" name="marca" onChange={(e)=>setMarca(e.target.value)} />
                <br />
                <label htmlFor='modelo'>Modelo</label>
                <input type="text" id="modelo" name="modelo" onChange={(e)=>setModelo(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="Nuevo Vehiculo" />
            </form>ns
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoVehiculo;