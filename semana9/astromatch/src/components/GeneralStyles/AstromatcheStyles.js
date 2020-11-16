import  styled from 'styled-components'

//General styling

//App.js here
export const AstroHomeContainer = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`
export const AstroAppIcons = styled.img`
    height: 33px;
    width: 33px;
    cursor: pointer;
    margin: 20px;
      :hover {
        transform: scale(1.5);
      }
      :active {
        transform: scale(3);
        transition: 0.5s;
      }
`
export const AtroBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
export const AstromatcheLogo = styled.img`
  height: 41px; 
  width: 79px;
`
//ASTRO MATCHES HERE
export const AstromatchContainer = styled.div`
  font-size: small;
  display: flex;
  align-items: center;
` 

export const MatcheImg = styled.img`
  height: 39px;
  width: 39px;
  border-radius: 25px;
  margin: 15px;
  border: 1px solid black;
`

//ASTRO PROFILECARD HERE
export const ImgPerfil = styled.img`
    display: block;
    border: 1px solid black;
    width: 120px;
    height: 139px;
    margin-top: 22px;
    margin: 20px auto 20px auto; 
`
export const AstroMainInfo = styled.p`
    text-align: center;
`
export const AstroInfoContainer = styled.div`
    margin-top: 32px;
    height: 202px;
`
export const AstroIconsContainer = styled.div`
    height: 49px;
    margin-top: 47px;
    display: flex;
    justify-content: space-evenly;
`
export const AstroIcons = styled.img`
    height: 33px;
    width: 33px;
    cursor: pointer;
      :hover {
        transform: scale(1.5);
      }
      :active {
        transform: scale(3);
        transition: 0.5s;
      }
`

//ASTROMATCH PROFILES BIO HERE
export const AstroBio = styled.p`
    font-size: x-small;
    margin: 19px;
    text-align: center;
`