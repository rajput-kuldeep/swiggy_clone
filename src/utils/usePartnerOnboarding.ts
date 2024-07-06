import { useEffect, useState } from "react";

import axios from "axios";


const usePartnerOnboarding = <T,>(url:string, initialState : T) => {
    const [data, setData] = useState<T>(initialState)

    useEffect(() => {
        axios.get("https://www.swiggy.com/dapi/support/issues/partner-onboarding?")
        .then((response) => setData(response.data))
        
        
        
    }, [url])
  return (
    data
  )
};

export default usePartnerOnboarding
