import { VisitableProduct } from './visitable-product';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class Remedio extends VisitableProduct {
  constructor(protected preco: number) {
    super('Remedio', preco);
  }

  getPrecoComTaxa(visitor: TaxVisitorProtocol): number {
    return visitor.calculaTaxaRemedio(this);
  }
}
