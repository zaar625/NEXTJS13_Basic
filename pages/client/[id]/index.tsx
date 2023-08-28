import Link from "next/link"

function ClientProjectPage() {
    return (
        <div>
            <h1>The Project of a Given Client</h1>
            <ul>
                <li><Link href='/client/max'> Maximilian</Link></li>
            </ul>
        </div>
    )
}

export default ClientProjectPage