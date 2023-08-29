import { useEffect, useState } from "react";

function LastSalesPage() {
    const [salse, setSales] = useState();
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(()=> {
        setIsLoading(true);
        fetch('https://dummyjson.com/products/1').then(response => response.json()).then(data => {
        setSales(data);
        setIsLoading(false);
        })
    },[])


    if(isLoading) {
        return <p>Loading... ...</p>
    }

    if(!salse) {
        return <p>No data yet</p>
    }
  

    return (
        <p>
            {salse.brand}
        </p>
    )
}

export default LastSalesPage