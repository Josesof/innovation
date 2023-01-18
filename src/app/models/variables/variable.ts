export class Variable {
    id: number;
    idSistem:String;
    nombreVariable?: string;
    estado?: boolean;
    tiempoMuestreo?: number;
    idUnidadMedida?: number;
    
  
    constructor() {
      this.id = 0;
      this.idSistem = '';
      this.nombreVariable = '';
      this.estado = true;
      this.tiempoMuestreo = 0;
      this.idUnidadMedida = 0;
    }
}
