const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class PageHome extends React.Component {
	constructor(props) {
		super(props);
		this.state = { vehiculos: [], clientes: [], reportes: []};
	}
	componentDidMount() {
		client({ method: 'GET', path: '/api/vehiculos' }).done(response => {
			this.setState({ vehiculos: response.entity._embedded.vehiculos });
		});
		client({ method: 'GET', path: '/api/clientes' }).done(response => {
			this.setState({ clientes: response.entity._embedded.clientes });
		});
		client({ method: 'GET', path: '/api/reportes' }).done(response => {
			this.setState({ reportes: response.entity._embedded.reportes });
		});

	}
	render() {
		return (
			<>
				<h1>EF Retamozo Sánchez</h1>

				<div style={{"width": "100%", "display": "flex"}}>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Vehiculo" emoji="🚙" />
						<VehiculoList vehiculos={this.state.vehiculos} />
						<Link to="/nuevo-vehiculo">Nuevo Vehiculo</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Cliente" emoji="🧑" />
						<ClienteList clientes={this.state.clientes} />
						<Link to="/nuevo-cliente">Nuevo Cliente</Link>
					</div>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Reporte" emoji="📑" />
						<ReporteList reportes={this.state.reportes} />
						<Link to="/nuevo-reporte">Nuevo Reporte</Link>
					</div>
				</div>
			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<span>Listado completo de {props.entidad.toLowerCase()}:</span>
			<hr />
		</>
	);
}


class ReporteList extends React.Component {
	render() {
		const reportes = this.props.reportes.map(reporte =>
			<Reporte key={reporte._links.self.href} reporte={reporte} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>ID:</th>
					</tr>
					{reportes}
				</tbody>
			</table>
		)
	}
}

class ClienteList extends React.Component {
	render() {
		const clientes = this.props.clientes.map(cliente =>
			<Cliente key={cliente._links.self.href} cliente={cliente} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombres:</th>
						<th>Apellidos:</th>
						<th>Direccion:</th>
						<th>Ciudad:</th>
					</tr>
					{clientes}
				</tbody>
			</table>
		)
	}
}

class VehiculoList extends React.Component {
	render() {
		const vehiculos = this.props.vehiculos.map(vehiculo =>
			<Vehiculo key={vehiculo._links.self.href} vehiculo={vehiculo} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Marca:</th>
						<th>Modelo:</th>
					</tr>
					{vehiculos}
				</tbody>
			</table>
		)
	}
}

class Reporte extends React.Component {
	render() {
		const id = this.props.reporte._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.reporte.id_rep}</td>
				<td>
					<Link to={`/ver-reporte/${id}`}>Ver</Link>
				</td>
			</tr>
		)
	}
}

class Cliente extends React.Component {
	render() {
		const id = this.props.cliente._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.cliente.nombre_cli}</td>
				<td>{this.props.cliente.apellido_cli}</td>
				<td>{this.props.cliente.direccion_cli}</td>
				<td>{this.props.cliente.ciudad_cli}</td>
				<td>
					<Link to={`/ver-cliente/${id}`}>Ver</Link>
				</td>
			</tr>
		)
	}
}

class Vehiculo extends React.Component {
	render() {
		const id = this.props.vehiculo._links.self.href.split("/").slice(-1);
		return (
			<tr>
				<td>{this.props.vehiculo.marca_veh}</td>
				<td>{this.props.vehiculo.modelo_veh}</td>
				<td>
					<Link to={`/ver-vehiculo/${id}`}>Ver Vehiculo</Link>
				</td>
			</tr>
		)
	}
}

module.exports = PageHome;