const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');
const { useState } = require('react');

const PageNuevoCliente = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/clientes',
            entity: { nombre_cli: nombre , apellido_cli: apellido, direccion_cli: direccion, ciudad_cli: ciudad},
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/';
        });
    }

    return (
        <>
            <h1>Nuevo Cliente</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <label>Apellido</label>
                <input type="text" id="apellido" name="apellido" onChange={(e)=>setApellido(e.target.value)} />
                <label>Dirección</label>
                <input type="text" id="direccion" name="direccion" onChange={(e)=>setDireccion(e.target.value)} />
                <label>Ciudad</label>
                <input type="text" id="ciudad" name="ciudad" onChange={(e)=>setCiudad(e.target.value)} />
                <input type="submit" value="Nuevo Cliente" />
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoCliente;