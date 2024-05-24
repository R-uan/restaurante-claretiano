import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
})
export class SobremesasPage implements OnInit {
  isModalOpen = false;
  sobremesas: {
    name: string;
    price: number;
    description: string;
    image: string;
  }[] = [
    {
      name: 'Mousse de Chocolate Belga',
      description:
        'Mousse cremosa e deliciosa feita com chocolate belga de alta qualidade, servida com calda de frutas vermelhas.',
      price: 19.9,
      image: '../../assets/sobremesas/moussechocolate.jpg',
    },
    {
      name: 'Tiramisu Tradicional',
      description:
        'Doce italiano clássico feito com biscoitos de champagne embebidos em café expresso, creme de mascarpone e cacau em pó.',
      price: 22.9,
      image: '../../assets/sobremesas/tiramisu.jpg',
    },
    {
      name: 'Cheesecake de Frutas Vermelhas',
      description:
        'Torta cremosa de cream cheese com base crocante de biscoitos, coberta com calda de frutas vermelhas frescas.',
      price: 24.9,
      image: '../../assets/sobremesas/cheesecake.jpg',
    },
    {
      name: 'Panna Cotta com Calda de Caramelo',
      description:
        'Sobremesa italiana leve e refrescante feita com creme de leite, gelatina e calda de caramelo caseiro.',
      price: 18.9,
      image: '../../assets/sobremesas/panna.JPG',
    },
    {
      name: 'Salada de Frutas com Iogurte Natural',
      description:
        'Salada refrescante e saudável feita com frutas da estação e iogurte natural.',
      price: 15.9,
      image: '../../assets/sobremesas/saladadefrutas.jpg',
    },
  ];

  open: {
    name: string;
    price: number;
    description: string;
    image: string;
  } = {
    name: '',
    description: '',
    image: '',
    price: 0,
  };

  constructor() {}
  setOpen(
    isOpen: boolean,
    data?: {
      name: string;
      price: number;
      description: string;
      image: string;
    }
  ) {
    if (data) this.open = data;
    this.isModalOpen = isOpen;
  }

  ngOnInit() {}
}
