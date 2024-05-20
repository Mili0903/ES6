// RegistroClientes.js
export default class RegistroClientes {
  constructor() {
    this.clientes = [];
  }

  // Método para agregar cliente al registro
  agregarCliente(cliente) {
    this.clientes.push(cliente);
  }

  // Método para obtener cliente del registro por índice
  obtenerCliente(index) {
    return this.clientes[index];
  }

  // Método para listar todos los clientes en el registro
  listarClientes() {
    return this.clientes;
  }
}

  