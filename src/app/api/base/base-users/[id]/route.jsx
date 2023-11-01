import {promises as fs} from "fs";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {

    
    const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", 'utf8');

    // Extraindo a lista de usuários do arquivo JSON
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