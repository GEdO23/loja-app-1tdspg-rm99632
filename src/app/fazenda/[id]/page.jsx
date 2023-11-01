import Image from "next/image";

export default async function QueijoView({params}) {
    let queijo;
    try{
        const response = await fetch(`http://localhost:3000/api/laticinios/${params.id}`);
        queijo = await response.json();
    }catch(error){
        console.log();
    }

  return (
    <div>
        <h1>Queijo Nobre</h1>
        <div>
            <ul>
                {
                    <li key={queijo.id}>
                        <p>id: {queijo.id} - {queijo.nome}</p>
                        <h1>Nome : {queijo.nome}</h1>
                        <h2>Tipo : {queijo.tipo}</h2>
                        <figure>
                            <Image src={queijo.img} alt={queijo.nome} width={100} height={100}/>
                            <figcaption>{queijo.descricao} - <span>R$ {queijo.preco}</span></figcaption>
                        </figure>
                    </li>
                }
            </ul>
        </div>
    </div>
  )
}