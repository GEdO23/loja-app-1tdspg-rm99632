
export default function Login() {
  return (
    <div>
        <h1>Informações de Usuários:</h1>

        <div>
            <form action="" method="get">
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">Email:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu Email." />
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha:</label>
                        <input type="senha" name="senha" id="idSenha" placeholder="Digite seu Senha." />
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
