import React from 'react';
import { Link } from 'react-router-dom';
import {Button }from '@material-ui/core'
import styled from 'styled-components'

const DivCOntainer = styled.div`
display: grid;
  gap: 16px;
`

const BackButton = () => (
  <div>
    <Link  to='/'>
    <DivCOntainer>
      <Button variant={'contained'} color={'secondary'} type={'submit'}>Back to home</Button>
      </DivCOntainer>
      </Link>
  </div>
);

export default BackButton;