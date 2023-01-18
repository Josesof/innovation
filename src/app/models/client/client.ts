export class Client {
  id: number;
  nombreCliente?: string;
  usuarioAsifnado?: string;
  contacto?: string;
  estado?: boolean;
  permisoVisualiza?: string[] ;

  constructor() {
    this.id = 0;
    this.nombreCliente = '';
    this.usuarioAsifnado = '';
    this.contacto = '';
    this.estado = true;
    this.permisoVisualiza = [''];
  }
}
