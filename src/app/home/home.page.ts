import { Component } from '@angular/core';

interface PratoDoDia {
  pratos: { name: string; image: string; price: number; description: string }[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen = false;
  total_price = 0;
  discounted_price = 0;
  categories: { name: string; icon: string; route: string }[] = [
    {
      name: 'Lanches',
      icon: '../../assets/home/lanches.jpg',
      route: '/lanches',
    },
    {
      name: 'Entrada',
      icon: '../../assets/home/entrada.jpg',
      route: '/entradas',
    },
    {
      name: 'Sobremesas',
      icon: '../../assets/home/sobremesas.jpg',
      route: '/sobremesas',
    },
    {
      name: 'Bebidas',
      icon: '../../assets/home/bebidas.jpg',
      route: '/bebidas',
    },
    {
      name: 'Refeições',
      icon: '../../assets/home/refeicoes.jpg',
      route: '/refeicoes',
    },
  ];

  prato_do_dia: {
    name: string;
    image: string;
    price: number;
    description: string;
  }[] = [
    {
      name: 'Bruschettas Mistas',
      description:
        'Pão italiano crocante coberto com tomates frescos, mussarela de búfala, pesto e cogumelos salteados.',
      price: 24.9,
      image: '../../assets/entradas/bruschetta.jpg',
    },
    {
      name: 'Feijoada',
      image: '../../assets/refeicoes/feiojada.jpg',
      price: 8.99,
      description:
        'Feito com feijão preto cozido com carne de porco salgada, linguiça, carne seca e outros ingredientes.',
    },
    {
      name: 'Cheesecake de Frutas Vermelhas',
      description:
        'Torta cremosa de cream cheese com base crocante de biscoitos, coberta com calda de frutas vermelhas frescas.',
      price: 24.9,
      image: '../../assets/sobremesas/cheesecake.jpg',
    },
  ];

  constructor() {}
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  ngOnInit() {
    let total = 0;
    for (let item of this.prato_do_dia) {
      total += item.price;
    }
    this.total_price = total;
    this.discounted_price = total * 0.85;
  }
}
