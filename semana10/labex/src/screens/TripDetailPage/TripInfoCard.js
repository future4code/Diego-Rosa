import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TripInfoItem from './TripInfoItem';

const TripInfo = (props) => {
  const {name, planet, description, date, durationInDays} = props.info
  return <Card>
  <CardContent>
    <Typography variant={'h5'} gutterBottom>
      Info trips
    </Typography>
    <TripInfoItem infoName={'Name'} info={name}/>
    <TripInfoItem infoName={'Planet'} info={planet}/>
    <TripInfoItem infoName={'Date'} info={date}/>
    <TripInfoItem infoName={'Description'} info={description}/>
    <TripInfoItem infoName={'Duration in days'} info={durationInDays}/>
  </CardContent>
</Card>
  
}

export default TripInfo