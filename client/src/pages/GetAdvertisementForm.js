import React, { useContext, useEffect, useState, useCallback } from 'react';
import { AuthContext } from '../context/Auth.Context';
import { useHttp} from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { AdvertisementList } from '../components/AdvertisementList';

export const GetAdvertisementForm = () => {
    const [advertisementForms, setAdvertisementForms] = useState([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchAdvertisementForms = useCallback(async () => {
        try {
            const fetched = await request('/api/advertisement', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setAdvertisementForms(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchAdvertisementForms()
    }, [fetchAdvertisementForms])

    if(loading){
        return <Loader/>
    }

    return (
        <>
            {!loading && <AdvertisementList advertisementForms={advertisementForms}/>}
        </>
    )
}