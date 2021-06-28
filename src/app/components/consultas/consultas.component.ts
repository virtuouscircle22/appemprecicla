import { Component, OnInit } from '@angular/core';

import { EmpresaService } from "../../services/empresa.service";
import { Empresa } from "../../models/empresa";
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
  providers: [EmpresaService],
})
export class ConsultasComponent implements OnInit {

 filterpostDes = '';
 filterpostLoc = '';

  paiss: Array<Empresa> = [];
  empresas = null;
  select: string = "";

  localidads: Array<Empresa> = [];
  empresass = null ;
  selectt: string = "";

  constructor(public empresaService: EmpresaService, private router: Router) { }

  async ngOnInit() {
    await this.getPaises();
    await this.getLocalidades();
    this.getEmpresas();
    // await this.getEmpresass();
  }

  async getPaises() {
    await this.empresaService.getEmpresasDistinct().then(paiss => {
      this.empresas = paiss;
      this.select = this.empresas[0].pais
      for (let empresa of this.empresas) {
          this.select = empresa.pais 
          empresa.pais
          this.paiss.push(empresa.pais);
      }
    });
  }

  async getLocalidades() {
    await this.empresaService.getEmpresasDistinctdos().then(localidads => {
      this.empresass = localidads;
      this.selectt = this.empresass[0].localidad
      for (let empre of this.empresass) {
          this.selectt = empre.pais 
          empre.pais
          this.localidads.push(empre.localidad);
      }
    });
  }

  async getEmpresas() {
    await this.empresaService.getEmpresasFilter(this.select).then((res) => {
          this.empresaService.empresas = res;
    });
    
  }
  // async getEmpresass() {
  //   await this.empresaService.getEmpresasFilter(this.selectt).then((res) => {
  //         this.empresaService.empresas = res;
  //   });
    
  // }

  irMapa(empresa: Empresa){
    // Para almacenar un objeto hay que pasarlo a json
    // En otro caso solo admite string
    localStorage.setItem("empresa", JSON.stringify(empresa))
    this.router.navigate(['/mapa']);
  }

  irMapaGrupo(){
    // Para almacenar un objeto o array (que es objeto) hay que pasarlo a json
    localStorage.setItem("empresasfilter", JSON.stringify(this.empresaService.empresas))
    this.router.navigate(['/mapagrupo']);
  }

  onSubmit() {
    this.getEmpresas();
    // this.getEmpresass();
  }

}
