import React, { useContext, useEffect, useState, useCallback } from 'react';
import { AuthContext } from '../context/Auth.Context';
import { useHttp} from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { AdoptApplicationList } from '../components/AdoptApplicationList';

export const GetAdoptionApplication = () => {
    const [adoptApplications, setAdoptApplications] = useState([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchAdoptApplications = useCallback(async () => {
        try {
            const fetched = await request('/api/pet', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setAdoptApplications(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchAdoptApplications()
    }, [fetchAdoptApplications])

    if(loading){
        return <Loader/>
    }

    return (
        <>
            {!loading && <AdoptApplicationList adoptApplications={adoptApplications}/>}
        </>
    )
}