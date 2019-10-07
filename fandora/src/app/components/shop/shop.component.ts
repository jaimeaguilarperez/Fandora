import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

let clothes = [];

function addClothe(price: any, name: any) {
    clothes.push({
        name,
        price
    });
}

function payClothes() {
    clothes.length = 0;
}

function showClothes() {
    // tslint:disable-next-line: variable-name
    const modal_body = document.getElementById('modal-body');
    // tslint:disable-next-line: variable-name
    let new_html = '';
    // tslint:disable-next-line: variable-name
    let total_price = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < clothes.length; i++) {
        new_html += 'Has elegido <b>' + clothes[i].name + '</b>, su precio son <b>' + clothes[i].price + ' crts</b><br>';
        // tslint:disable-next-line: radix
        total_price += parseInt(clothes[i].price);
    }

    if (total_price > 0) {
        new_html += '<h4>El precio total es de ' + total_price + ' créditos fandorianos/h4>'
    } else {
        new_html += '<h4>Ningún árticulo fandoriano añadido</h4>';
    }
    modal_body.innerHTML = new_html;
}
