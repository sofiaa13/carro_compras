import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productmodel';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingcartService } from 'src/app/services/Shoppingcart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  api: any;
  @Input () producto:Producto;
  constructor(private carritoservicio:ShoppingcartService ,private _productervice: ProductService) {
    console.log("soy don jose");

    this._productervice.getById(1).subscribe((respuesta: any) => {
      this.producto = respuesta.data;
    });
    //this.producto={ id:99,name:"malumaproducto",desc:"maluma es el mejor cantante",price:100,rrp:0,quantity:1,img:"https://imgcuore3.elperiodico.com/25/87/ba/maluma-600.jpg",date_added:new Date()};
   }

  ngOnInit(): void {console.log("soy don pepito");
  }
  agregarproducto(malumaproduct:Producto){
    this.carritoservicio.addProductToCart(malumaproduct);
    }

}
