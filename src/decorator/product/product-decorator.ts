import { ProductProtocol } from './product-protocol';

export class ProductDecorator implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}
  
  getNome(): string {
    return this.product.getNome();
  }

  getpreco(): number {
    return this.product.getpreco();
  }
}
