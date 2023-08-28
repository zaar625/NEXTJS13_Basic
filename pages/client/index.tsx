import Link from "next/link"

function ClientPage() {
    const clients = [
        {id:'max', name:'Maximilian'},
        {id:'menual', name:'Menual'},
    ]

    return (
    <div>
            <h1>Client page</h1>
            <ul>
                {clients.map(client => <li key={client.id}>
                    <Link href={`/client/${client.id}`}>{client.name}</Link>
                </li>)}
            </ul>
        </div>)
}

export default ClientPage