import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from "./../product.model";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
 
  product!: Product;


  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.productService.readById(id).subscribe(product => {
    //   this.product = product
    // });

  }


  updateProduct(): void {}

  cancel(): void {
    this.router.navigate(["/products"]);
  }


}




