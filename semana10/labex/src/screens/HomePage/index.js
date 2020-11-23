import React from 'react'
import { Button } from '@material-ui/core';
import { ButtonsContainer } from './styles';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';


const HomePage = () => {
  return <div>
    <PageTitle title={'LabeX'}/>
    <ButtonsContainer>
      <Link to={'/login'}>
        <Button variant={'outlined'} color={'secondary'}>Be a administrator</Button>
      </Link>
      <Link to={'/application'}>
        <Button variant={'contained'} color={'primary'}>Be a candidate!</Button>
      </Link>
    </ButtonsContainer>
  </div>
}

export default HomePage