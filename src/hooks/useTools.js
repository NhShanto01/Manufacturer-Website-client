import { useEffect, useState } from 'react';

const useTools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('https://vast-plateau-50068.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])


    return [tools, setTools];
};

export default useTools;