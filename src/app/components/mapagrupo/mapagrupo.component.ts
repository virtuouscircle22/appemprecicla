import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Empresa } from "../../models/empresa";

@Component({
  selector: 'app-mapagrupo',
  templateUrl: './mapagrupo.component.html',
  styleUrls: ['./mapagrupo.component.css']
})
export class MapagrupoComponent implements AfterViewInit {

  private map: any;

  private initMap(): void {
    this.map = L.map('map')

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
   
    let markerArray = []

    let empresas: Array<Empresa> = JSON.parse(localStorage.getItem('empresasfilter'));

    for (let empresa of empresas){ 
      let marker = L.marker([empresa.longitude, empresa.latitude])
        .bindPopup(`<b>${empresa.name}, ${empresa.descripcion}</b><br>${empresa.longitude},${empresa.latitude}.`)
        .openPopup();
      markerArray.push(marker)
    }

    let group = L.featureGroup(markerArray).addTo(this.map)

    this.map.fitBounds(group.getBounds(), {
      padding: [70, 70]
    })
    
  }

  constructor() { }
  ngAfterViewInit(): void {
    this.initMap();
  }

}
