import { Product } from './../product.model';
// import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  router: any;



  product: Product = {

 nome: 'Escreva o nome do autor',
 sobre: 'bibliografia do autor',
 img:"link da imagem",
 titulo:"obras do autor",

  }
  // atributoLegal = "qualquer"

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }


createProduct(): void {
  
  this.productService.create(this.product).subscribe(() => {
  this.productService.showMessage('livro criado!')
  this.router.navigate(['/products'])
  })

  this.productService.showMessage('operação concluida!')
}


  cancel(): void {
    this.router.navigate(['/products'])
  }


}
