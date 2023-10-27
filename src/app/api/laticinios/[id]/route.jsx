import { NextResponse } from "next/server";


const queijos = [
  {
    id: 1,
    nome: "Esburacado",
    tipo: "Gorgonzola",
    preco: 350,
    descricao: "Queijo com buracos",
    img: "https://70096.cdn.simplo7.net/static/70096/sku/queijo-canastra-queijo-canastra-faz-o-bem-1kg-premiado--p-1670514257126.png",
  },
  {
    id: 2,
    nome: "Mussarela",
    tipo: "Parmesano",
    preco: 400,
    descricao: "Queijo de origem italiana",
    img: "https://70096.cdn.simplo7.net/static/70096/sku/queijo-canastra-queijo-canastra-faz-o-bem-1kg-premiado--p-1670514257126.png",
  },
  {
    id: 3,
    nome: "Cheddar",
    tipo: "Cheddar",
    preco: 380,
    descricao: "Queijo de origem inglesa",
    img: "https://70096.cdn.simplo7.net/static/70096/sku/queijo-canastra-queijo-canastra-faz-o-bem-1kg-premiado--p-1670514257126.png",
  },
  {
    id: 4,
    nome: "Brie",
    tipo: "Brie",
    preco: 390,
    descricao: "Queijo de origem francesa",
    img: "https://70096.cdn.simplo7.net/static/70096/sku/queijo-canastra-queijo-canastra-faz-o-bem-1kg-premiado--p-1670514257126.png",
  },
  {
    id: 5,
    nome: "Camembert",
    tipo: "Camembert",
    preco: 470,
    descricao: "Queijo de origem francesa",
    img: "https://70096.cdn.simplo7.net/static/70096/sku/queijo-canastra-queijo-canastra-faz-o-bem-1kg-premiado--p-1670514257126.png",
  },
  {
    id: 6,
    nome: "Ricotta",
    tipo: "Ricotta",
    preco: 360,
    descricao: "Queijo de origem italiana",
    img: "https://70096.cdn.simplo7.net/static/70096/sku/queijo-canastra-queijo-canastra-faz-o-bem-1kg-premiado--p-1670514257126.png",
  },
  {
    id: 7,
    nome: "Cashew",
    tipo: "Cashew",
    preco: 390,
    descricao: "Queijo de origem brasileira",
    img: "https://70096.cdn.simplo7.net/static/70096/sku/queijo-canastra-queijo-canastra-faz-o-bem-1kg-premiado--p-1670514257126.png",
  },
  {
    id: 8,
    nome: "Feta",
    tipo: "Feta",
    preco: 370,
    descricao: "Queijo de origem grega",
    img: "https://70096.cdn.simplo7.net/static/70096/sku/queijo-canastra-queijo-canastra-faz-o-bem-1kg-premiado--p-1670514257126.png",
  },
  {
    id: 9,
    nome: "Goat Cheese",
    tipo: "Goat Cheese",
    preco: 390,
    descricao: "Queijo de origem francesa",
    img: "https://70096.cdn.simplo7.net/static/70096/sku/queijo-canastra-queijo-canastra-faz-o-bem-1kg-premiado--p-1670514257126.png",
  },
];

export async function GET(request, {params}) {
  //GET BY ID
  const id = params.id;
    if(id > 0 && id <= queijos.length) {
      return NextResponse.json(queijos.find(queijo => queijo.id == id));
    }else{
      //GET ALL
      return id == 0 ? NextResponse.json(queijos) : NextResponse.redirect('http://localhost:3000/error');
    }
}