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
  deleteProduct(id:number): void {
   
    this.service.deleteProductById(id).subscribe(
        (response) => {
          console.log('Product deleted successfully');
          // Perform any additional actions after deletion if needed
        },
        (error) => {
          console.log('Failed to delete product', error);
          // Handle the error if the deletion fails
        }
      );

      }

}
  


