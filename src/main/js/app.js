const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');
const PageNuevoCliente = require('./pages/nuevo-cliente');
const PageNuevoVehiculo = require('./pages/nuevo-vehiculo');
const NuevoReportePage = require('./pages/nuevo-reporte');
const PageVerCliente = require('./pages/ver-cliente');
const PageVerVehiculo = require('./pages/ver-vehiculo');
const PageVerReporte = require('./pages/ver-reporte');

const router = createBrowserRouter([
	{path: '/', element: <PageHome />},
	{path: '/nuevo-cliente', element: <PageNuevoCliente/>},
	{path: '/nuevo-vehiculo', element: <PageNuevoVehiculo/>},
	{path: '/nuevo-reporte', element: <NuevoReportePage/>},
	{path: '/ver-cliente/:id', element: <PageVerCliente/>},
	{path: '/ver-vehiculo/:id', element: <PageVerVehiculo/>},
	{path: '/ver-reporte/:id', element: <PageVerReporte/>}

])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)