import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import {
    type ISourceOptions,
  } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

interface ParticlesComponentProps {
    id?: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {

    
    const [init, setInit] = useState<boolean>(false);
    useEffect(() => {
        initParticlesEngine(async (engine: any) => {
            // This loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // Starting from v2 you can add only the features you need reducing the bundle size
            // await loadAll(engine);
            // await loadFull(engine);
            await loadSlim(engine);
            // await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container: any) => {
        console.log(container);
        return Promise.resolve(); 
    };

    const options: ISourceOptions  = useMemo(() => ({
        background: {
            color: {
                value: "#000000",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
                onHover: {
                    enable: true,
                    mode: 'grab',
                },
            },
            modes: {
                push: {
                    distance: 200,
                    duration: 15,
                },
                grab: {
                    distance: 150,
                },
            },
        },
        particles: {
            color: {
                value: "#FFFFFF",
            },
            links: {
                color: "#FFFFFF",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 150,
            },
            opacity: {
                value: 1.0,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }), []);
    if (init) {
        return <Particles id={id} particlesLoaded={particlesLoaded} options={options} />;
    }
    return <></>;
};

export default ParticlesComponent;
