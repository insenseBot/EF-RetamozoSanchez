const React = require('react');
const client = require('../client');
const { Link, useParams} = require('react-router-dom');
const {useState, useEffect} = require('react');



const PageVerCliente = (props) => {

    // const id = props.match.params.id;
    let { id } = useParams();
    const [cliente, setCliente] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/clientes/' + id
        }).done(response => {
            setCliente(response.entity);
        });
    }, []);


    return (
        <>
            <h1>Ver Cliente</h1>
            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{cliente.nombre_cli}</td>
                </tr>
                <tr>
                    <th>Apellido</th>
                    <td>{cliente.apellido_cli}</td>
                </tr>
                <tr>
                    <th>Direccion</th>
                    <td>{cliente.direccion_cli}</td>
                </tr>
                <tr>
                    <th>Ciudad</th>
                    <td>{cliente.ciudad_cli}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageVerCliente;