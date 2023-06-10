import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productId: number = 0;
  product: any;
  constructor(private productService: ProductService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void { this.productId=this.route.snapshot.params['id'];
  this.productService.getProductById(this.productId).subscribe((product)=>{this.product=product;},
  (error)=>{console.log("message",error);});
   
  }
  gotoProductList(){
    this.router.navigate(['/retrieve']);
  }

 
  saveUpdatedProduct(): void {
    this.productService.saveProduct(this.product).subscribe(
      (response) => {
        console.log('Product updated successfully');
      },
      (error) => {
        console.log('Error updating product:', error);
      }
    );
  }
}

