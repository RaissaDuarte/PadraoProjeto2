import { TaxVisitorProtocol } from './tax-visitor-protocol';

export abstract class VisitableProduct {
  constructor(protected nome: string, protected preco: number) {}

  getNome(): string {
    return this.nome;
  }

  getPreco(): number {
    return this.preco;
  }

  abstract getPrecoComTaxa(visitor: TaxVisitorProtocol): number;
}
