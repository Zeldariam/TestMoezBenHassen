import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meubles-list',
  templateUrl: './meubles-list.component.html',
  styleUrls: ['./meubles-list.component.css']
})
export class MeublesListComponent implements OnInit {

  meubles= [
    {libelle:'table', img: '../assets/table.jpg', prixTTc: 47, neuf:true},
    {libelle:'armoire', img: '../assets/armoire.jpg', prixTTc: 258.5, neuf:false},
    {libelle:'fauteil', img: '../assets/fauteuil.jpg', prixTTc: 118.8, neuf:true}
  ];

  dateJour= new Date(2019,10,13);
  constructor() { }

  ngOnInit() {
  }

}
