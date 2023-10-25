
export default async function ListaQueijos() {

    let queijos;
    try {
        const response = await fetch("http://localhost:3000/api/laticinios");
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
                            <p>{queijo.id} - {queijo.nome}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
