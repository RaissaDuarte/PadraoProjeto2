import { VisitableProduct } from './visitable-product';
import { TaxVisitorProtocol } from './tax-visitor-protocol';

export class Eletronico extends VisitableProduct {
  constructor(protected preco: number) {
    super('Eletronico', preco);
  }

  getPrecoComTaxa(visitor: TaxVisitorProtocol): number {
    return visitor.calculaTaxaEletronico(this);
  }
}
