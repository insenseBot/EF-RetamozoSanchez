const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoReportePage = () => {

    let { id } = useParams();
    const [clientes, setClientes] = useState([])
    const [vehiculos, setVehiculos] = useState([])
    const [idCliente, setIdCliente] = useState('')
    const [idVehiculo, setIdVehiculo] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/reportes',
            entity: {
                reporte: 'http://localhost:8080/api/reportes/' + id,
                cliente: 'http://localhost:8080/api/clientes/'+idCliente,
                vehiculo: 'http://localhost:8080/api/vehiculos/'+idVehiculo
            },
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/clientes'
        }).done(response=>{
            let clientes2 = [];
            response.entity._embedded.clientes.map(cliente => {
                clientes2.push({value: cliente._links.self.href.split('/').slice(-1), label: cliente.nombre_cli})
            })
            setClientes(clientes2)
        })
        client({
            method: 'GET',
            path: '/api/vehiculos'
        }).done(response=>{
            let vehiculos2 = [];
            response.entity._embedded.vehiculos.map(vehiculo => {
                vehiculos2.push({value: vehiculo._links.self.href.split('/').slice(-1), label: vehiculo.modelo_veh})
            })
            setVehiculos(vehiculos2)
        })

    },[])

    return (
        <>
            <h1>Nuevo Reporte</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='cliente'>Cliente</label>
                <select name="cliente" id="cliente" onChange={(e)=>{setIdCliente(e.target.value)}}>
                    {clientes.map(cliente => {	
                        return (
                            <option key={cliente.value} value={cliente.value}>{cliente.label}</option>
                        )
                    })}
                </select>
                
                <label>Vehiculo</label>
                <select name="vehiculo" id="vehiculo" onChange={(e)=>{setIdVehiculo(e.target.value)}}>
                    {vehiculos.map(vehiculo => {	
                        return (
                            <option key={vehiculo.value} value={vehiculo.value}>{vehiculo.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nuevo Reporte" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoReportePage;