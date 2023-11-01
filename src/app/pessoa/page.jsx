
export default async function ConsomePessoa() {
    const response = await fetch("http://localhost:3000/dados");
    const pessoa = await response.json();

    return (
        <div>
            <h1>Dados da Pessoa:</h1>
            <div>
                <p>Nome: {pessoa.nome}</p>
                <p>Idade: {pessoa.idade}</p>
                <p>Cidade: {pessoa.cidade}</p>
                <p>RG: {pessoa.rg}</p>
                <p>CPF: {pessoa.cpf}</p>
                <p>Telefone: {pessoa.telefone}</p>
                <p>Email: {pessoa.email}</p>
                <p>Endereço: {pessoa.endereco}</p>


            </div>

        </div>
    )
}
