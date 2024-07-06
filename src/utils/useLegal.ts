import { useEffect, useState } from "react";

import axios from "axios";


const useLegal = <T,>(url:string, initialState : T) => {
    const [data, setData] = useState<T>(initialState)

    useEffect(() => {
        axios.get("https://www.swiggy.com/dapi/support/issues/legal?")
        .then((response) => setData(response.data))
        
        
        
    }, [url])
  return (
    data
  )
};

export default useLegal
