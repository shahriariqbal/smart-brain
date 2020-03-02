import React from 'react';
import { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: '3be7451c5e3b46fdaeb108838b91a782'
});

const particlesOptions = {
particles: {

  number: {
    value: 200,
    density: {
      enable: true,
      value_area: 800
    }
  }




                  // line_linked: {
                  //   shadow: {
                  //     enable: true,
                  //     color: "#3CA9D1",
                  //     blur: 5
                  //   }
                  // }



                }

}

class  App extends Component  {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }


  onInputChange = (event) =>{
  console.log(event.target.value);
  }


  onButtonSubmit = () =>{
    console.log('click');

app.models.predict("3be7451c5e3b46fdaeb108838b91a782", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
     console.log(response);
    },
    function(err) {
      // there was an error
    }
  );


  }

  render(){
  return (
    <div className="App">


    <Particles className='particles'
                params={particlesOptions} 
                />




    <Navigation/>
    <Logo/>
    <Rank/>
    <ImageLinkForm  
    onInputChange= {this.onInputChange} 
    onButtonSubmit={this.onButtonSubmit}
    />
     <FaceRecognition/>
    

      
    </div>
  );
}
}

export default App;
