import { useEffect, useState } from "react";

const useRicky = () => {

    // COMPONENT STATES - CUSTOM HOOKS = useRicky()
    const [name, setName] = useState("");
    const [id, setId] = useState(0);
    const [image, setImage] = useState("");
    const [created, setCreated] = useState("");

    const [nameTwo, setNameTwo] = useState("");
    const [idTwo, setIdTwo] = useState(0);
    const [imageTwo, setImageTwo] = useState("");
    const [createdTwo, setCreatedTwo] = useState("");


    const [nameThree, setNameThree] = useState("");
    const [idThree, setIdThree] = useState(0);
    const [imageThree, setImageThree] = useState("");
    const [createdThree, setCreatedThree] = useState("");


    useEffect(() => {
        callAPI();
    }, []);

    const callAPI = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/character');
        const data = await api.json();
        console.log(data.results[0]);

        setName(data.results[0].name);
        setId(data.results[0].id);
        setImage(data.results[0].image);
        setCreated(data.results[0].created);

        setNameTwo(data.results[1].name);
        setIdTwo(data.results[1].id);
        setImageTwo(data.results[1].image);
        setCreatedTwo(data.results[1].created);

        setNameThree(data.results[2].name);
        setIdThree(data.results[2].id);
        setImageThree(data.results[2].image);
        setCreatedThree(data.results[2].created);

    }

    return {
        name,
        nameTwo,
        nameThree,
        id,
        idTwo,
        idThree,
        image,
        imageTwo,
        imageThree,
        created,
        createdTwo,
        createdThree
    };
};

export default useRicky;
