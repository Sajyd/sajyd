"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function TSParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 1
        },
        style: {
          position: "absolute",
          width: "50vw",
          height: "50vw",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%"
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 300
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.3,
              sync: false
            }
          },
          size: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.2
              }
            }
          }
        },
        detectRetina: true,
        background: {
          color: "#001"
        }
      }}
    />
  );
} 