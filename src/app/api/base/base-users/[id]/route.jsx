import {promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {

    
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", 'utf8');

    // Extraindo a lista de usuários do arquivo JSON:
    const lista = await JSON.parse(file);
    const listaUsuarios = await lista.usuarios;

    const id = params.id;
    
    if(id > 0 && id <= listaUsuarios.length) {
        return NextResponse.json(listaUsuarios.find((user)=> user.id == id));
    } else {
        return id == 0 ? 
        NextResponse.json(listaUsuarios) : 
        NextResponse.redirect("http://localhost:3000/error")
    }
}


export async function POST(request, response) {
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", 'utf8');

    // Extraindo a lista de usuários do arquivo JSON:
    const lista = await JSON.parse(file);
    const listaUsuarios = await lista.usuarios;

    // Recebendo dados assincronos com await;
    const userRequest = await request.json();

    try {
        for (let i = 0; i < listaUsuarios.length; i++) {
            const userInfo = listaUsuarios[i];

            // Validando o usúario de fato:
            if (userInfo.email == userRequest.email && userInfo.senha == userRequest.senha) {
                console.log("Usuário logado!");
                return NextResponse.json({"status": true, "user": userInfo})
            }
        }
    } catch (error) {
        console.log(error);
    }

    // console.log("MENSAGEM:");
    // console.log(userRequest);

    return NextResponse.json({"status": false})
}