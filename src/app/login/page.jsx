"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Login() {
    const navigate = useRouter();

    // Este useState, representa o objeto usuário, enquanto está sendo preenchdio no form e
    // em qualquer momento dentro do componente
    const[usuario, setUsuario] = useState({
        "email": "",
        "senha": ""
    })

    const[msg, setmsg] = useState("");

    const msgLoginSucesso = "Usuário Validado com Sucesso!";
    const msgLoginErro = "Email ou Senha incorretos...";

    const [classeLoginMsg, setClasseLoginMsg] = useState("");

    useEffect(() => {
        if (msg == msgLoginSucesso) {
            setClasseLoginMsg("login-sucesso");
        } else if (msg == msgLoginErro) {
            setClasseLoginMsg("login-erro");
        } else {
            setClasseLoginMsg("login-none");
        }

    }, [msg])

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
                const data = await response.json();
                if(data.status) {
                    //Lembrando os métodos da sessionStorage são setItem e getItem para inserir e recuperar dados.
                    //Ex: sessionStorage.setItem("token", token);
                    //Para remover dados utilizamos o método removeItem, passando o nome do item a ser removido.
                    //Ex: sessionStorage.removeItem("token");

                    //Gerar o token JWT e armazenar no sessionStorage do navegador.
                    const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
                    //Armazenando o token no sessionStorage do navegador do usuário.
                    sessionStorage.setItem("token-user", token);
                    
                    sessionStorage.setItem("obj-user", JSON.stringify(data.user));

                    setmsg(msgLoginSucesso);

                    setTimeout(()=> {
                        setmsg("");
                        navigate.push("/");
                    }, 5000);

                } else {
                    setmsg(msgLoginErro);

                    setTimeout(()=> {
                        setmsg("");
                        setUsuario({
                            "email": "",
                            "senha" : ""
                        });
                    }, 5000);
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
            <h2 className={classeLoginMsg}>{msg}</h2>

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
                        <div>
                            <p>
                                Se você ainda não possui registro. 
                                <Link href="/cad-user" className=" text-blue-700 underline">CLIQUE AQUI</Link>
                            </p>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}
