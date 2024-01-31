import { ProductDecorator } from './product-decorator';

export class ProductUsed extends ProductDecorator {
  getNome(): string {
    return this.product.getNome() + ' (Produto Usado) ';
  }

  getpreco(): number {
    return this.product.getpreco() -300.00;
  }
}
