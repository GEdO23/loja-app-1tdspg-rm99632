import { NextResponse } from "next/server";

export async function GET() {
  const queijos = [
    { "id": 1, "nome": "Esburacado", "tipo": "Gorgonzola", "preco": 350 },
    { "id": 2, "nome": "Mussarela", "tipo": "Parmesano", "preco": 400 },
    { "id": 3, "nome": "Cheddar", "tipo": "Cheddar", "preco": 380 },
    { "id": 4, "nome": "Brie", "tipo": "Brie", "preco": 390 },
    { "id": 5, "nome": "Camembert", "tipo": "Camembert", "preco": 470 },
    { "id": 6, "nome": "Ricotta", "tipo": "Ricotta", "preco": 360 },
    { "id": 7, "nome": "Cashew", "tipo": "Cashew", "preco": 390 },
    { "id": 8, "nome": "Feta", "tipo": "Feta", "preco": 370 },
    { "id": 9, "nome": "Goat Cheese", "tipo": "Goat Cheese", "preco": 390 },
  ];

  return NextResponse.json(queijos);
}
