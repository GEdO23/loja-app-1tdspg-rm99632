"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Login() {
    const router = useRouter();

    // Este useState, representa o objeto usuário, enquanto está sendo preenchdio no form e
    // em qualquer momento dentro do componente
    const[usuario, setUsuario] = useState({
        "email": "",
        "senha": ""
    })

    const[msg, setmsg] = useState("");

    const handleChange = (e)=> {
        // Destructuring dos campos que estão sendo digitados!
        const{name, value} = e.target;

        // Preenchendo os campos com o useState, utilizando também o
        // operador SPREAD.
        setUsuario({...usuario, [name]:value});
    }


    // A função handleSubmit, deve realizar a chamada para a API de validação de dados
    // utilizando o método POST, passando o objeto usuário e recebendo um booleando com
    // o resultado.
    const handleSubmit = async (e)=> {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/api/base/base-users/0", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                const status = await response.json();
                if(status.status) {
                    setmsg("Usuário Validado com Sucesso!");
                    router.push("/");

                } else {
                    setmsg("Email ou Senha incorretos...");

                    setUsuario({
                        "email": "",
                        "senha" : ""
                    });
                }

                setTimeout(()=> {
                    setmsg("");
                }, 5000)
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <h1>Informações de Usuários:</h1>
            <h2>{msg}</h2>

            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>LOGIN</legend>
                        <div>
                            <label htmlFor="idEmail">Email:</label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." 
                            value={usuario.email} onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="idSenha">Senha:</label>
                            <input type="senha" name="senha" id="idSenha" placeholder="Digite seu Senha." 
                            value={usuario.senha} onChange={handleChange}
                            />
                        </div>
                        <div>
                            <button>LOGIN</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}