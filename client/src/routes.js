import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage';
import AdoptPage from './pages/AdoptPage';
import { AboutPage } from './pages/AboutPage';
import {HomePage} from './pages/HomePage';
import { Contacts } from './pages/Contacts';
import { RulesPage } from './pages/Rules';
import HelpMoneyPage from './pages/HelpMoneyPage';
import { HelpPage } from './pages/HelpPage';
import { PetsAdoptPage } from './pages/PetsAdoptPage';
import { VolunteerFormPage } from './pages/VolunteerFormPage';
import { AdvertisementPage } from './pages/AdvertisementPage';
import { AnimalCareFormPage } from './pages/AnimalCareFormPage';
import { GetAdoptionApplication } from './pages/GetAdoptionApplication';
import { GetVolunteerForm } from './pages/GetVolunteerForm';
import { GetAnimalCareForm } from './pages/GetAnimalCareForm';
import DetailPetPage from './pages/DetailPetPage';
import { GetAdvertisementForm } from './pages/GetAdvertisementForm';
import EditAdoptApplication from './pages/EditAdoptApplication';
import EditAnimalCareForm from './pages/EditAnimalCareForm';
import MyAnimalCare from './pages/MyAnimalCare';

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return(
            <Switch>
                <Route path="/home" exact>
                    <HomePage />
                </Route>
                <Route path="/about" exact>
                    <AboutPage />
                </Route>
                <Route path="/edit-adopt-application/:id" component={EditAdoptApplication} />
                <Route path="/edit-animal-care-form/:id" component={EditAnimalCareForm} />
                <Route path="/generate" exact>
                    <PetsAdoptPage />
                </Route>
                <Route path="/adoptApplication" exact>
                    <GetAdoptionApplication />
                </Route>
                <Route path="/advertisementForm" exact>
                    <GetAdvertisementForm />
                </Route>
                <Route path="/volunteerForm" exact>
                    <GetVolunteerForm />
                </Route>
                <Route path="/animalcareForm" exact>
                    <GetAnimalCareForm />
                </Route>
                <Route path="/my-animal-care" exact>
                    <MyAnimalCare />
                </Route>
                <Route path="/contacts" exact>
                    <Contacts />
                </Route>
                <Route path="/detpet/:id" render={(props) => ( <DetailPetPage {...props} /> )} />
                
                <Route path="/adopt" exact>
                    <AdoptPage />
                </Route>
                <Route path="/create" exact>
                    <VolunteerFormPage />
                </Route>
                <Route path="/create/care" exact>
                    <AnimalCareFormPage />
                </Route>
                <Route path="/create/advertisement" exact>
                    <AdvertisementPage />
                </Route>
                <Route path="/help/money" exact>
                    <HelpMoneyPage />
                </Route>  
                <Route path="/rules" exact>
                    <RulesPage />
                </Route>
                <Route path="/help" exact>
                    <HelpPage />
                </Route>
                <Redirect to="/home"/>
            </Switch>
            
        )
    }

    return(
        
        <Switch>
            <Route path="/home" exact>
                <HomePage />
            </Route>
            <Route path="/about" exact>
                <AboutPage />
            </Route>
            <Route path="/help/money" exact>
                <HelpMoneyPage />
            </Route>  
            <Route path="/rules" exact>
                <RulesPage />
            </Route>
            <Route path="/contacts" exact>
                    <Contacts />
            </Route>
            <Route path="/help" exact>
                <HelpPage />
            </Route>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/home"/>
        </Switch>
        
    )
}