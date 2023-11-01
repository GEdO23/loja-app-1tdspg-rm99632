import Image from "next/image";
import Link from "next/link";

export default async function ListaQueijosView() {

    let queijos;
    try {
        const response = await fetch("http://localhost:3000/api/laticinios/0");
        queijos = await response.json();
    } catch (error) {
        console.log(error);
    }

    return (
        <div>
            <h1 className="bg-red-500 text-white text-3xl font-bold w-full text-center py-5 mb-5">Lista de Queijos</h1>
            <div>
                <ul>
                    {queijos.map((queijo)=> (
                        <li key={queijo.id}>
                            <h1>Nome : {queijo.nome}</h1>
                            <h2>Tipo : {queijo.tipo}</h2>
                            <figure>
                                <Link href={`/fazenda/${queijo.id}`}>
                                    <Image src={queijo.img} alt={queijo.nome} width={100} height={100}/>
                                </Link>

                                <figcaption>{queijo.descricao} - <span>R$ {queijo.preco}</span></figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
