"use strict";

var _clientes = _interopRequireDefault(require("./clientes.js"));
var _calculadoraimpuestos = _interopRequireDefault(require("./calculadoraimpuestos.js"));
var _registroclientes = _interopRequireDefault(require("./registroclientes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Función para mostrar resultados en HTML
function mostrarResultados() {
  // Obtener datos del formulario
  var nombreCliente = document.getElementById('nombre').value;
  var montoAnualCliente = parseFloat(document.getElementById('montoAnual').value);
  var deduccionesCliente = parseFloat(document.getElementById('deducciones').value);

  // Crear instancia de Cliente con los datos del formulario
  var cliente = new _clientes["default"](nombreCliente, montoAnualCliente, deduccionesCliente);

  // Agregar cliente al registro
  var registro = new _registroclientes["default"]();
  registro.agregarCliente(cliente);

  // Calcular impuesto total utilizando la calculadora
  var impuestoTotal = _calculadoraimpuestos["default"].calcularImpuestoTotal(cliente);

  // Mostrar resultados en HTML
  document.getElementById('resultados').innerHTML = "\n    <p>Nombre del cliente: ".concat(cliente.nombre, "</p>\n    <p>Impuesto total a pagar: ").concat(impuestoTotal, "</p>\n  ");
}

// Evento para mostrar resultados al hacer clic en el botón
document.getElementById('calcular').addEventListener('click', mostrarResultados);