const React = require('react');
const client = require('../client');
const { Link, useParams, } = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerReporte = () => {

    let { id } = useParams();
    const [vehiculo, setVehiculo] = useState({});
    const [clientes, setClientes] = useState([]);


    useEffect(() => {
        url_reporte = '/api/reportes/' + id

        client({
            method: 'GET',
            path: url_reporte
        }).done(response => setVehiculo(response.entity));

        client({
            method: 'GET',
            path: url_reporte + '/reportar'
        }).done(response => setClientes(response.entity))
        
    }, []);


    return (
        <>
            <h2>Cliente</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Direccion</th>
                        <th>Ciudad</th>
                    </tr>
                </thead>
                <tbody>

                    {clientes.map(cliente => {

                        return (
                            <tr key={cliente.ID_CLI}>
                                <td>{cliente.NOMBRE_CLI}</td>
                                <td>{cliente.APELLIDO_CLI}</td>
                                <td>{cliente.DIRECCION_CLI}</td>
                                <td>{cliente.CIUDAD_CLI}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            <hr />

            <h1>Vehiculo</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Marca:</th>
                        <td>{vehiculo.marca_veh}</td>
                    </tr>
                    <tr>
                        <th>Modelo:</th>
                        <td>{vehiculo.modelo_veh}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerReporte;