import { VisitableProduct } from './visitable-product';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class Roupa extends VisitableProduct {
  constructor(protected preco: number) {
    super('Roupa', preco);
  }

  getPrecoComTaxa(visitor: TaxVisitorProtocol): number {
    return visitor.calculaTaxaRoupa(this);
  }
}
