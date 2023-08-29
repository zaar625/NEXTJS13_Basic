import { useEffect, useState } from "react";
import useSWR from 'swr'

function LastSalesPage() {
    // const [salse, setSales] = useState();
    // const [isLoading, setIsLoading] = useState(false);
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    
    const {data , error} = useSWR('https://dummyjson.com/products/1',fetcher)
    console.log(data)

    // useEffect(()=> {
    //     setIsLoading(true);
    //     fetch('https://dummyjson.com/products/1').then(response => response.json()).then(data => {
    //     setSales(data);
    //     setIsLoading(false);
    //     })
    // },[])


    if(!data) {
        return <p>Loading... ...</p>
    }

    if(error) {
        return <p>Failed to load</p>
    }
  

    return (
        <p>
            {data.brand}
        </p>
    )
}

export default LastSalesPage