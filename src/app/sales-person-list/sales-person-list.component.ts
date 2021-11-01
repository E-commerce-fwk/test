import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPerson[] =[
    new SalesPerson("med","kumar","anup.kfcj@gmail.com",50000),
    new SalesPerson("saif","houiji","anup.kfcj@gmail.com",78555),
    new SalesPerson("hama","hfty","anup.kfcj@gmail.com",98524),
    new SalesPerson("ghaith","ayari","ghaith.kfcj@gmail.com",88878)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
