import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CardVideo from '../../components/CardVideo/CardVideo';
import  MenuVertical  from '../../components/MenuVertical/MenuVertical'
import {TelaInteira} from'./styles'

class HomePage extends React.Component {
  render() {
    return (
      <TelaInteira>
       
              <Header/>
              < MenuVertical />
              <CardVideo/>
              <Footer/>
        
      </TelaInteira>
    );
  }
}

export default HomePage;