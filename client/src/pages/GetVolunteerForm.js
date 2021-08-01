import React, { useContext, useEffect, useState, useCallback } from 'react';
import { AuthContext } from '../context/Auth.Context';
import { useHttp} from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { VolunteerFormList } from '../components/VolunteerFormList';

export const GetVolunteerForm = () => {
    const [volunteerForms, setVolunteerForms] = useState([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchVolunteerForms = useCallback(async () => {
        try {
            const fetched = await request('/api/volunteer', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setVolunteerForms(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchVolunteerForms()
    }, [fetchVolunteerForms])

    if(loading){
        return <Loader/>
    }

    return (
        <>
            {!loading && < VolunteerFormList volunteerForms={volunteerForms}/>}
        </>
    )
}