import fs from 'fs/promises'
import path from 'path'

function ProductDetailPage(props:any) {

    const {loadedProduct} = props;
    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    )
}

export async function getStaticProps(context:any) {
    console.log(context);
    const {params } = context;

    const productId = params.pid;

    const filePath = path.join(process.cwd(), 'data','dummy-backend.json'); 
    const json =  await fs.readFile(filePath);
    const jsonData = json.toString('utf-8')
    const data = JSON.parse(jsonData);

    const product = data.products.find((product:any) => product.id === productId);

    return {
        props:{
            loadedProduct : product
        }
    }
}
export default ProductDetailPage