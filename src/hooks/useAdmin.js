import { useState, useEffect } from 'react'
const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://vast-plateau-50068.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin);
                    setLoad(false)
                })
        }
    }, [user])
    return [admin, load]
};

export default useAdmin;