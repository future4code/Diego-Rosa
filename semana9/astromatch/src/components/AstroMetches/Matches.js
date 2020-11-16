import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { AstromatchContainer, MatcheImg } from './GeneralStyles/AstromatcheStyles';

function AstroMatches () {
  
  const [ likes, setLikes ] = useState([])

  useEffect(() => {
    axios
    .get (`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-petra/matches`)
    .then(response => {
      setLikes(response.data.matches)
    })
    .catch(err => {
      alert(err)
    })
  }, [])
  
  return (
    <div>
      {likes.map(like => {
        return  <AstromatchContainer> 
            <MatcheImg src={like.photo} />
            <p>{like.name}</p>  
          </AstromatchContainer> 
     })}
    </div>
  );
}

export default AstroMatches;
