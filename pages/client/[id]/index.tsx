import Link from "next/link"
import { useRouter } from "next/router"

function ClientProjectPage() {
    const router = useRouter();

    function loadProjectHandler() {
        //load data...
        
        router.push('/client/max/projecta');

        // router.replace('/client/max/projecta');

        // router.push({
        //     pathname:'client/[id]',
        //     query:{id:'max', clientproject:'projecta'}
        // })

    }

    return (
        <div>
            <h1>The Project of a Given Client</h1>
            <ul>
                <li><Link href='/client/max'> Maximilian</Link></li>
            </ul>
            <button onClick={loadProjectHandler}>Load Proeject A</button>
        </div>
    )
}

export default ClientProjectPage