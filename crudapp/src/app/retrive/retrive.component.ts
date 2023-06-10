import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product'

@Component({
  selector: 'app-retrive',
  templateUrl: './retrive.component.html',
  styleUrls: ['./retrive.component.css']
})
export class RetriveComponent implements OnInit {

  constructor(private service:ProductService){
  }
  products:Product[]=[];
  
  ngOnInit(): void {
    this.products=this.getProducts();
  }
  getProducts():any{
    this.service.getproducts().subscribe((products)=>{
    this.products=products;
  });
  }

}
  


