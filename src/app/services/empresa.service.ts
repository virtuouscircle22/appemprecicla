import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Empresa } from "../models/empresa";

@Injectable({
  providedIn: "root",
})
export class EmpresaService {
  selectedEmpresa: Empresa;
  empresas: Array<Empresa> = new Array<Empresa>();
  //URL_API = "http://localhost:4300/api/empr"
  readonly URL_API = "https://apiemprecicla.herokuapp.com/api/empr";

  constructor(private http: HttpClient) {
    this.selectedEmpresa = new Empresa();
  }

  postEmpresa(empresa: Empresa) {
    return this.http.post(this.URL_API, empresa);
  }

  async getEmpresas() {
    const v = await this.http.get<Empresa[]>(this.URL_API).toPromise();
    return v
  }

  async getEmpresasDistinct() {
    const v = await this.http.get<Empresa[]>(this.URL_API + `/distinct`).toPromise();
    return v
  }

  async getEmpresasDistinctdos() {
    const v = await this.http.get<Empresa[]>(this.URL_API + `/distinctdos`).toPromise();
    return v
  }


  async getEmpresasFilter(pais: string) {
    return await this.http.get<Empresa[]>(this.URL_API + `/filter/${pais}`).toPromise();
  }

  async getEmpresasFilterdos(localidad: string) {
    return await this.http.get<Empresa[]>(this.URL_API + `/filterdos/${localidad}`).toPromise();
  }

  putEmpresa(empresa: Empresa) {
    return this.http.put(this.URL_API + `/${empresa._id}`, empresa);
  }

  deleteEmpresa(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
