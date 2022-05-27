import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Sheared/Loading/Loading';
import UserRow from './UserRow';

const AllUser = () => {


    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',

    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => <UserRow
                            refetch={refetch}
                            user={user}
                            key={user._id}
                            index={index}
                        ></UserRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;