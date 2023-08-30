import fs from 'fs/promises'
import path from 'path'

function ProductDetailPage(props:any) {

    const {loadedProduct} = props;

    if(!loadedProduct) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    )
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data','dummy-backend.json'); 
    const json =  await fs.readFile(filePath);
    const jsonData = json.toString('utf-8')
    const data = JSON.parse(jsonData);

    return data;
}


export async function getStaticProps(context:any) {
    
    const {params} = context;
    const productId = params.pid;

    const data = await getData();

    const product = data.products.find((product:any) => product.id === productId);

    if(!product){
        return {notFound:true}
    }

    return {
        props:{
            loadedProduct : product
        }
    }
}

export async function getStaticPaths() {

    const data = await getData();

    const ids = data.products.map(((product:any) => product.id))

    const pathWithparams = ids.map((id:any) => ({params:{pid:id}}))

 return{
    paths:pathWithparams,
    fallback:true
 }   
}

export default ProductDetailPage