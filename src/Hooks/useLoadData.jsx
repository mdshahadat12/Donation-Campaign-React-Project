import { useEffect } from 'react';
import { useState } from 'react';

const useLoadData = () => {

    const [apiData, setApiData] = useState([])

useEffect(()=>{
    fetch('apiData.json')
    .then(res => res.json())
    .then(data => setApiData(data))
},[])
    return apiData;
};

export default useLoadData;