import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// function App() {
//   /*ts particles set up*/
//   const particlesInit = useCallback(async engine => {
//     console.log(engine);
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async container => {
//       await console.log(container);
//   }, []);

class App extends Component {
    particlesInit = async engine => {
      console.log(engine);
      await loadFull(engine);
    };
  
    particlesLoaded = async container => {
      await console.log(container);
    };
  
    render() {
        return (
            <div className="App">
                <Particles className='particles'
                    id="tsparticles"
                    init={this.particlesInit}
                    loaded={this.particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 50,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <Navigation></Navigation> 
                <Logo></Logo>
                <Rank></Rank>
                <ImageLinkForm></ImageLinkForm>
            {/*
                <FaceRecognition></FaceRecognition>*/}
            </div>
        );
    }
}
export default App;
