import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {
  isModalOpen = false;
  entradas: {
    name: string;
    price: number;
    description: string;
    image: string;
  }[] = [
    {
      name: 'Carpaccio de Salmão com Maracujá',
      description:
        'Finas fatias de salmão fresco marinadas em molho cítrico de maracujá com toque de hortelã.',
      price: 29.9,
      image: '../../assets/entradas/carpaccio.jpg',
    },
    {
      name: 'Bruschettas Mistas',
      description:
        'Pão italiano crocante coberto com tomates frescos, mussarela de búfala, pesto e cogumelos salteados.',
      price: 24.9,
      image: '../../assets/entradas/bruschetta.jpg',
    },
    {
      name: 'Sopa Cremosa de Abóbora com Gengibre',
      description:
        'Sopa cremosa e reconfortante de abóbora temperada com gengibre fresco e finalizada com croutons.',
      price: 18.9,
      image: '../../assets/entradas/cremedeabobora.jpg',
    },
    {
      name: 'Salada Caprese',
      description:
        'Salada clássica italiana com mussarela de búfala, tomate fresco, manjericão e azeite extra virgem.',
      price: 22.9,
      image: '../../assets/entradas/saladacaprese.jpeg',
    },
    {
      name: 'Ceviche de Atum com Manga e Abacate',
      description:
        'Ceviche fresco e saboroso de atum marinado no suco cítrico com manga, abacate e pimenta dedo-de-moça.',
      price: 32.9,
      image: '../../assets/entradas/ceviche.webp',
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
