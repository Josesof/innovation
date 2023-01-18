export class Users {
  id: number;
  nombre: string;
  apellidos: string;
  correo: string;
  password: string;
  estado: boolean;
  permisos: string;
  rol: string;
  idCliente: number;

  constructor() {
    this.id = 0;
    this.nombre = '';
    this.apellidos = '';
    this.correo = '';
    this.password = '';
    this.estado = true;
    this.permisos = '';
    this.rol = '';
    this.idCliente = 0;
  }
}
