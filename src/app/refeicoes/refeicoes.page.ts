import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refeicoes',
  templateUrl: './refeicoes.page.html',
  styleUrls: ['./refeicoes.page.scss'],
})
export class RefeicoesPage implements OnInit {
  isModalOpen = false;
  refeicoes: {
    name: string;
    price: number;
    description: string;
    image: string;
  }[] = [
    {
      name: 'Pizza',
      image: '../../assets/refeicoes/pizza.jpg',
      price: 15.99,
      description:
        'Um prato italiano clássico feito com massa coberta com molho de tomate, queijo e vários recheios.',
    },
    {
      name: 'Tacos',
      image: '../../assets/refeicoes/tacos.jpg',
      price: 10.99,
      description:
        'Uma tortilha de milho recheada com diversos ingredientes, como carne, frutos do mar, legumes e queijo.',
    },
    {
      name: 'Sushi',
      image: '../../assets/refeicoes/sushi.jpg',
      price: 18.99,
      description:
        'Um prato japonês de arroz com vinagre e outros ingredientes, como frutos do mar, vegetais e ovos.',
    },
    {
      name: 'Feijoada',
      image: '../../assets/refeicoes/feiojada.jpg',
      price: 8.99,
      description:
        'Feito com feijão preto cozido com carne de porco salgada, linguiça, carne seca e outros ingredientes.',
    },
    {
      name: 'Sopa',
      image: '../../assets/refeicoes/sopa.jpg',
      price: 7.99,
      description:
        'Um alimento líquido feito com carne, vegetais ou outros ingredientes cozidos ou fervidos.',
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
