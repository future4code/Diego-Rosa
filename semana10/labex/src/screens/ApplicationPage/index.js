import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle'
import { FormContainer } from '../../components/FormContainer'
import { TextField, Button, InputLabel, Select, FormControl, MenuItem } from '@material-ui/core'
import axios from 'axios'
import { useForm } from '../../hooks/useForm'
import { useTripsList } from '../../hooks/useTripsList'
import BackButton from '../../constants/BackButton/index'

const ApplicationPage = () => {
  const trips = useTripsList()
  const [form, onChangeInput] = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
  })

  const onSubmitApplication = (e) => {
    e.preventDefault()
    console.log(form)
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabarito/trips/${form.trip.id}/apply`, body)
  }

  return <div>
    <PageTitle title={'Apply for a trip'} />
    <FormContainer onSubmit={onSubmitApplication}>
      <TextField 
        label={'Candidate name'} 
        onChange={onChangeInput}
        value={form['name']}
        name={'name'}
      />
      <TextField 
        label={'age'} type={'number'} 
        onChange={onChangeInput}
        value={form['age']}
        name={'age'}
      />
      <TextField 
        label={'Application text'} helperText="Explain why you are a good candidate" 
        onChange={onChangeInput}
        value={form['applicationText']}
        name={'applicationText'}
      />
      <TextField 
        label={'Profession'} 
        onChange={onChangeInput}
        value={form['profession']}
        name={'profession'}
      />
      <FormControl>
        <InputLabel id="select-paises">Countries</InputLabel>
        <Select
          labelId="select-paises"
          onChange={onChangeInput}
          value={form['country']}
          name={'country'}
        >
          <MenuItem value={'brasil'}>Brazil</MenuItem>
          <MenuItem value={'argentina'}>Argentina</MenuItem>
          <MenuItem value={'eua'}>United States</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="select-viagens">Trips</InputLabel>
        <Select
          labelId="select-viagens"
          onChange={onChangeInput}
          value={form['trip']}
          name={'trip'}
        >
          {trips.map((trip) => {
            return <MenuItem value={trip}>{trip.name}</MenuItem>
          })}
        </Select>
      </FormControl>
      <Button variant={'contained'} color={'primary'} type={'submit'}>Sing up</Button>
      <BackButton/>
    </FormContainer>
  </div>
}

export default ApplicationPage