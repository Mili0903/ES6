import Cliente from './clientes.js';
import CalculadoraImpuestos from './calculadoraimpuestos.js';
import RegistroClientes from './registroclientes.js';

// Función para mostrar resultados en HTML
function mostrarResultados() {
  // Obtener datos del formulario
  const nombreCliente = document.getElementById('nombre').value;
  const montoAnualCliente = parseFloat(document.getElementById('montoAnual').value);
  const deduccionesCliente = parseFloat(document.getElementById('deducciones').value);

  // Crear instancia de Cliente con los datos del formulario
  const cliente = new Cliente(nombreCliente, montoAnualCliente, deduccionesCliente);

  // Agregar cliente al registro
  const registro = new RegistroClientes();
  registro.agregarCliente(cliente);

  // Calcular impuesto total utilizando la calculadora
  const impuestoTotal = CalculadoraImpuestos.calcularImpuestoTotal(cliente);

  // Mostrar resultados en HTML
  document.getElementById('resultados').innerHTML = `
    <p>Nombre del cliente: ${cliente.nombre}</p>
    <p>Impuesto total a pagar: ${impuestoTotal}</p>
  `;
}

// Evento para mostrar resultados al hacer clic en el botón
document.getElementById('calcular').addEventListener('click', mostrarResultados);
