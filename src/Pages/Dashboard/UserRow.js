import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UserRow = ({ refetch, index }) => {
    const { _id, email, role } = user;
    const [user] = useAuthState(auth)

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user?.email}`, {
            method: 'PUT',
            headers:
                { 'content-type': 'application/json' },

            body: JSON.stringify(user)
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully make an admin ${email}`)
                }
            })
    }


    // const handleDelete = id => {
    //     const proceed = window.confirm("Are You Sure Want To Delate!!")
    //     if (proceed) {
    //         const url = `http://localhost:5000/delete/user/${id}`
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 refetch()
    //                 toast.success('Items Delate Successful')
    //                 console.log(data);
    //             })

    //     }
    // }


    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user.email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make admin</button> : 'Already An Admin'}</td>
            <td>
                {/* <button onClick={() => handleDelete(_id)} className="btn btn-xs">remove user</button> */}
            </td>
        </tr>
    );
};

export default UserRow;