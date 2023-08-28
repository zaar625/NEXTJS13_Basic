import Link from "next/link"

export default function Homepage(){
    return (
        <div>
            <h1>The Home Page</h1>
            <ul>
                <li >
                    <a href="/portfolio">Portpolio</a>
                </li>
                <li>
                    <Link href="/client">Client</Link>
                </li>
            </ul>
        </div>
    )
}