import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {
  isModalOpen = false;
  lanches: {
    name: string;
    price: number;
    description: string;
    image: string;
  }[] = [
    {
      name: 'Sanduiche de Frango',
      price: 12,
      description:
        'O Sanduíche de Frango com Abacate é uma opção deliciosa e saudável, perfeita para um almoço rápido ou um lanche reforçado. Com uma combinação de ingredientes frescos e nutritivos, este sanduíche oferece uma explosão de sabores e texturas em cada mordida.',
      image: '../../assets/lanches/frango.png',
    },
    {
      name: 'Pão de Queijo',
      price: 10,
      description:
        'O pão de queijo é um delicioso e tradicional quitute brasileiro, originário do estado de Minas Gerais. Este pequeno pão redondo é famoso por sua textura crocante por fora e macia por dentro, além de um sabor irresistível de queijo. Feito com polvilho (doce ou azedo), ovos, leite, óleo e queijo ralado, o pão de queijo é uma opção perfeita para o café da manhã, lanche da tarde ou acompanhamento para qualquer refeição.',
      image: '../../assets/lanches/paodequeijo.jpeg',
    },
    {
      name: 'Pastel de Carne',
      price: 12,
      description:
        'O pastel de carne é um dos salgados mais apreciados no Brasil, frequentemente encontrado em feiras, lanchonetes e festas. Este petisco é caracterizado por sua massa fina e crocante, recheada com uma mistura saborosa de carne moída bem temperada. Frito até ficar dourado e crocante, o pastel de carne é irresistível e perfeito para qualquer ocasião.',
      image: '../../assets/lanches/pasteldecarne.jpg',
    },
    {
      name: 'Coxinha de Frango',
      price: 6,
      description:
        'A coxinha de frango é um dos salgados mais amados no Brasil, conhecido por sua forma que lembra uma coxa de galinha. Este delicioso quitute é feito com uma massa macia, geralmente à base de farinha de trigo e caldo de frango, recheada com frango desfiado e temperado. Depois de modeladas, as coxinhas são empanadas e fritas até ficarem douradas e crocantes. Perfeitas para festas, lanches ou qualquer ocasião, as coxinhas são irresistíveis!',
      image: '../../assets/lanches/coxinha.jpg',
    },
    {
      name: 'Esfirra de Carne',
      price: 10,
      description:
        'A esfirra é um prato tradicional da culinária árabe, amplamente adotado e apreciado no Brasil. Este delicioso salgado pode ser encontrado em diversas versões, sendo as mais comuns a esfirra aberta e a esfirra fechada. Feita com uma massa macia e levemente fermentada, a esfirra pode ser recheada com carne, frango, queijo, ou até mesmo com opções vegetarianas. Assada até ficar dourada, a esfirra é perfeita para ser servida como lanche, entrada ou refeição rápida.',
      image: '../../assets/lanches/esfirra.jpg',
    },
  ];

  open: {
    name: string;
    price: number;
    description: string;
    image: string;
  } = { name: '', description: '', image: '', price: 0 };
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
