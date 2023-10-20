import { NextResponse } from "next/server";

export async function GET() {

    const pessoa = {
        nome: 'João',
        idade: 30,
        cidade: 'São Paulo',
        rg: '123456789',
        cpf: '12345678900',
        telefone: '11912345678',
        email: 'email@fiap.com',
        endereco: 'Rua X, 123'
    }

    return NextResponse.json(pessoa);
}
