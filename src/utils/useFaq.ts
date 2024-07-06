import { useEffect, useState } from "react";

import axios from "axios";


const useFaq = <T,>(url:string, initialState : T) => {
    const [data, setData] = useState<T>(initialState)

    useEffect(() => {
        axios.get("https://www.swiggy.com/dapi/support/issues/faq?")
        .then((response) => setData(response.data))
        
        
        
    }, [url])
  return (
    data
  )
};

export default useFaq
