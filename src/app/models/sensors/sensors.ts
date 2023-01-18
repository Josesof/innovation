export class Sensors {
    id: number;
    idSistem: string;
    nombreSensor: string;
    color: string;
    variable: string;
    estado: boolean;
    sitioCapturaDato: string;


    constructor() {
        this.id = 0;
        this.idSistem = '';
        this.nombreSensor = '';
        this.color = '';
        this.variable = '';
        this.estado = true;
        this.sitioCapturaDato = '';
    }
}
