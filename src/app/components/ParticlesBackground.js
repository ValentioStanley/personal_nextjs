"use client"; 
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links"; 


export default function ParticlesBackground() {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setIsInit(true);
    });
  }, []); 

  // Define the particle options
  // You can customize these options to your liking
  const particlesOptions = {
    preset: "links", // This uses the preset we loaded
    background: {
      color: {
        value: "#000000", // Set the background color (black, like your screenshot)
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Set the particle/link color
      },
      links: {
        color: "#ffffff", // Set the link color
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1, // You can adjust the speed
        
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // Number of particles
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Creates a link between mouse and particles
        },
        onClick: {
          enable: true,
          mode: "push", // Pushes particles away on click
        },
      },
      modes: {
        grab: {
          distance: 200, // How far the mouse link extends
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4, // How many particles to push
        },
      },
    },
  };

  // Only render the Particles component if the engine is initialized
  if (isInit) {
    return (
      <Particles
        id="tsparticles"
        options={particlesOptions}
        className="particles-background"
      />
    );
  }

  return null;
}