export class Empresa {
    constructor(_id = "", name = "", descripcion = "", direccion = "", localidad = "", pais = "", longitude = null, latitude = null ) {
      this._id = _id;
      this.name = name;
      this.descripcion = descripcion;
      this.direccion = direccion;
      this.localidad = localidad;
      this.pais = pais;
      this.longitude = longitude;
      this.latitude = latitude;
      //this.location[0] = 0 //longitude;
      //this.location[1] = 0 //latitude
    }
  
    _id: string;
    name: string;
    descripcion: string;
    direccion: string;
    localidad: string;
    pais: string;
    longitude: number;
    latitude: number;
    //location: Array<number>;
  }
  