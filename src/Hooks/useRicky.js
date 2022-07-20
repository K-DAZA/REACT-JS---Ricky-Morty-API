import { useEffect, useState } from "react";

const useRicky = () => {

    // COMPONENT STATES - CUSTOM HOOKS = useRicky()
    const [dataArray, setDataArray] = useState([]);


    useEffect(() => {
        callAPI();
    }, []);

    const callAPI = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/character');
        const data = await api.json();
        setDataArray(data.results);
    }

    return {
        dataArray
    };
};

export default useRicky;
