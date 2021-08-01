import React, { useContext, useEffect, useState, useCallback } from 'react';
import { AuthContext } from '../context/Auth.Context';
import { useHttp} from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { AnimalCareFormList } from '../components/AnimalCareFormList';

export const GetAnimalCareForm = () => {
    const [animalCareForms, setAnimalCareForms] = useState([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchAnimalCareForms = useCallback(async () => {
        try {
            const fetched = await request('/api/animalcare', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setAnimalCareForms(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchAnimalCareForms()
    }, [fetchAnimalCareForms])

    if(loading){
        return <Loader/>
    }

    return (
        <>
            {!loading && < AnimalCareFormList animalCareForms={animalCareForms}/>}
        </>
    )
}