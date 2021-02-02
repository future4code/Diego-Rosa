import React, { useState, useEffect } from "react";
import axios from 'axios';
import AstroProfilesCard from '../AstroProfileCard/AstroProfilesCard'

import { AstroBio } from '../GeneralStyles/AstromatcheStyles';

const AstroProfiles = props => {

    const [ profile, setProfile ] = useState(props.profile)

    useEffect(() => {
        setProfile(props.profile)
    }, [props.profile])

    const likeAstroProfile = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person
        `, body)
        .then(() => {
            {props.getProfile()}
            setProfile()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deslikeAstroProfile = () => {
        const body = {
            id: profile.id,
            choice: false
        }
        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person
        `, body)
        .then(() => {
            {props.getProfile()}
            setProfile()
        })
        .catch(err =>{ 
            console.log(err)
        })
    }

    return (
        
        profile ? ( <AstroProfilesCard 
            photo={profile.photo}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            deslikeAstroProfile={deslikeAstroProfile}
            likeAstroProfile={likeAstroProfile}
         />) :
        (<AstroBio>Loading...</AstroBio>)
  );
}

export default AstroProfiles;
