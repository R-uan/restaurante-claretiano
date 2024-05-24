import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {
  isModalOpen = false;
  bebidas: {
    name: string;
    price: number;
    description: string;
    image: string;
  }[] = [
    {
      name: 'Guaraná',
      description:
        'O refrigerante de guaraná é uma bebida carbonatada popular no Brasil, conhecida por seu sabor único e refrescante. Feito a partir do extrato de guaraná, uma planta nativa da Amazônia, este refrigerante possui um gosto levemente adocicado e frutado. Além de ser apreciado por seu sabor distinto, o guaraná também é valorizado por suas propriedades energéticas naturais, devido à presença de cafeína.',
      image: '../../assets/bebidas/gurana.png',
      price: 3.5,
    },
    {
      name: 'Heineken',
      description:
        'Heineken é uma marca icônica de cerveja tipo lager, conhecida mundialmente por seu sabor equilibrado e refrescante. Fundada em 1864 por Gerard Adriaan Heineken em Amsterdã, Países Baixos, a cerveja Heineken é produzida seguindo uma receita tradicional e um rigoroso processo de fabricação que garante sua qualidade e consistência. Reconhecida por sua garrafa verde e o logotipo da estrela vermelha, Heineken se destaca como uma das cervejas premium mais apreciadas globalmente.',
      image: '../../assets/bebidas/heineken.png',
      price: 5,
    },
    {
      name: 'Vinho',
      description:
        'O vinho é uma bebida alcoólica feita a partir da fermentação do suco de uvas. Com uma história que remonta a milhares de anos, o vinho é apreciado mundialmente por sua complexidade de sabores, aromas e texturas. Existem diversos tipos de vinhos, incluindo tintos, brancos, rosés e espumantes, cada um com características únicas dependendo das variedades de uvas utilizadas, do terroir (local onde as uvas são cultivadas) e dos métodos de vinificação.',
      image: '../../assets/bebidas/vinho.jpg',
      price: 15,
    },
    {
      name: 'Champagne',
      description:
        'Champagne é um tipo de vinho espumante produzido na região de Champagne, no nordeste da França. Conhecido por sua elegância e complexidade, é frequentemente associado a celebrações e ocasiões especiais. A produção de champagne segue métodos rigorosos e tradicionais que conferem à bebida suas características únicas de sabor, aroma e efervescência.',
      image: '../../assets/bebidas/champagne.jpg',
      price: 12,
    },
    {
      name: 'Whiskey',
      description:
        'O whiskey é uma bebida alcoólica destilada, feita a partir de grãos fermentados, como cevada, milho, centeio e trigo. Com uma rica história e variedade de estilos, o whiskey é produzido em várias partes do mundo, cada uma com suas próprias tradições e técnicas. As principais variedades incluem Scotch whisky (da Escócia), Irish whiskey (da Irlanda), bourbon (dos Estados Unidos), e outras variantes regionais. O whiskey é envelhecido em barris de carvalho, que lhe conferem sua cor e sabor complexos.',
      image: '../../assets/bebidas/whiskey.png',
      price: 160,
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
