// Cliente.js
export default class Cliente {
    constructor(nombre, montoTotalAnual, deducciones) {
      this._nombre = nombre;
      this._montoTotalAnual = montoTotalAnual;
      this._deducciones = deducciones;
    }
  
    // Getter y setter
    get nombre() {
      return this._nombre;
    }
  
    set nombre(value) {
      this._nombre = value;
    }
  
    get montoTotalAnual() {
      return this._montoTotalAnual;
    }
  
    set montoTotalAnual(value) {
      this._montoTotalAnual = value;
    }
  
    get deducciones() {
      return this._deducciones;
    }
  
    set deducciones(value) {
      this._deducciones = value;
    }
  
    // Método para calcular el impuesto total
    calcularImpuestoTotal() {
      return (this.montoTotalAnual - this.deducciones) * 0.21;
    }
  }
  
  