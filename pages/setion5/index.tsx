import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link';


function HomePage(props :any) {
 const {products} = props;
 
    return (
        <ul>
           {products.map((product:any) => <li key={product.id}>
            <Link href={`/${product.id}`}>
            {product.title}
           </Link>
           </li>)}
        </ul>
    )
}

export async function getStaticProps(context:any) {

const filePath = path.join(process.cwd(), 'data','dummy-backend.json'); 
   const json =  await fs.readFile(filePath);
   const jsonData = json.toString('utf-8')
   const data = JSON.parse(jsonData);

   if(!data) {
    return {
        redirect:{
            destination:'/no-data'
        }
    }
   }

   if(data.products.length === 0) {
    return {notFound:true}
   }

    return {
        props: {products:data.products},      
        revalidate:10,
        // notFound:true
        // redirect:
    }
}

export default HomePage