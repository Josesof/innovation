
export class CaptureData {
  id: number;
  idSistem: string;
  nombre: string;
  longitud: number;
  latitud: number;
  estado: boolean;
  sitioCapturaDato: string;
  variable: string;

  constructor() {
    this.id = 0,
    this.idSistem = '';
    this.nombre = '';
    this.longitud = 0;
    this.latitud = 0;
    this.estado = true;
    this.sitioCapturaDato = '';
    this.variable = '';
  }
}
