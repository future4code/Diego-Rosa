import React from 'react';

import likeicon from '../images/likeicon.png'
import deslikeicon from '../images/deslikeicon.png'

import { PerfilImg, AstroInfoContainer, AstroMaintInfo, AstroBio, AstroIconsContainer, AstroIcons } from './GeneralStyles/AstromatcheStyles';

const AstroProfilesCard = (props) => {
    return (
        <div>
            <AstroInfoContainer>
                <PerfilImg src={props.photo}></PerfilImg>
                <AstroMaintInfo>
                    <p><strong>{props.name}</strong>, {props.age}</p>
                </AstroMaintInfo>
                <AstroBio>{props.bio}</AstroBio>
            </AstroInfoContainer>    
            <AstroIconsContainer>
                <AstroIcons src={likeicon} onClick={props.deslikeProfile} />
                <AstroIcons src={deslikeicon} onClick={props.likeProfile} />
            </AstroIconsContainer>
        </div>
    )
}
export default AstroProfilesCard