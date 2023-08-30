import { useEffect, useState } from "react";
import useSWR from 'swr'

function LastSalesPage(props) {
    const {brand} = props;
    
    console.log(props)
    const [salse, setSales] = useState(brand);
    // const [isLoading, setIsLoading] = useState(false);
    // const fetcher = (...args) => fetch(...args).then(res => res.json())
    
    // const {data , error} = useSWR('https://dummyjson.com/products/1',fetcher)
    // console.log(data)

    // useEffect(()=> {
    //     setIsLoading(true);
    //     fetch('https://dummyjson.com/products/1').then(response => response.json()).then(data => {
    //     setSales(data);
    //     setIsLoading(false);
    //     })
    // },[])


    if(!salse) {
        return <p>Loading... ...</p>
    }

    // if(error) {
    //     return <p>Failed to load</p>
    // }
  

    return (
        <p>
            {salse.brand}
        </p>
    )
}

export async function getStaticProps(context) {
    const data = await fetch('https://dummyjson.com/products/1')
    const dataJson = await data.json();
console.log(dataJson)
        return {
            props:{
                brand:dataJson
            },
            revalidate:10
        }

}
export default LastSalesPage