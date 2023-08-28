import fs from 'fs/promises'
import path from 'path'

function HomePage(props :any) {
 const {products} = props;
 
    return (
        <ul>
           {products.map((product:any) => <li key={product.id}>{product.title}</li>)}
        </ul>
    )
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'data','dummy-backend.json');
   const json =  await fs.readFile(filePath);
   const jsonData = json.toString('utf-8')

   
   const data = JSON.parse(jsonData)

    return {props: {
        products:data.products
    }}
}

export default HomePage