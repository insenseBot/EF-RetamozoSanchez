const React = require('react');
const client = require('../client');
const { Link, useParams} = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerVehiculo = (props) => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [vehiculo, setVehiculo] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/vehiculos/' + id
        }).done(response => {
            setVehiculo(response.entity);
        });
    }, []);


    return (
        <>
            <h1>Ver Vehiculos</h1>
            <table>
                <tr>
                    <th>Marca</th>
                    <td>{vehiculo.marca_veh}</td>
                </tr>
                <tr>
                    <th>Modelo</th>
                    <td>{vehiculo.modelo_veh}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerVehiculo;