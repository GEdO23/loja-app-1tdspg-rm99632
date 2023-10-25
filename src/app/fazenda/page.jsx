
export default async function ListaQueijos() {

    try {
        const response = await fetch("http://localhost:3000/api/laticinios");
        const queijos = await response.json();
    } catch (error) {
        console.log(error);
    }



    return (
        <div>
            <h1>Lista de Queijos</h1>
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
