import Image from "next/image";

export default async function QueijoView({params}) {

    let queijo;
    try {
        const response = await fetch(`http://localhost:3000/api/laticinios/${params.id}`);
        queijo = await response.json();
    } catch (error) {
        console.log(error);
    }

    return (
        <div>
            <h1 className="bg-red-500 text-white text-3xl font-bold w-full text-center py-5 mb-5">
                Queijo Nobre
            </h1>
            <h1>Nome: {queijo.nome}</h1>
            <h2>Tipo: {queijo.tipo}</h2>
            <figure>
                <Image width={100} height={100} src={queijo.img} alt={queijo.nome}/>
                <figcaption>{queijo.descricao} - <span>R$ {queijo.preco}</span></figcaption>
            </figure>

        </div>
    )
}
