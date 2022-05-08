import React from "react";
import ReactDOM from 'react-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, ISourceOptions } from "tsparticles-engine";
import { DEFAULT_OPTIONS_PARTICLE } from "../../constant/particle";
import styles from './styles.module.scss';


const ParticleContainer = () => {
  const particleInit = async (main: Engine) => {
    await loadFull(main);
  };

  const getOptions = (): ISourceOptions => {
    return {
      ...DEFAULT_OPTIONS_PARTICLE
    }
  }
  return (
    ReactDOM.createPortal(
    <Particles
      className={styles.container}
      init={particleInit}
      id="tsparticles"
      options={{
       ...getOptions()
      }}
    />, document.getElementById('particle')!)
  );
};

export default React.memo(ParticleContainer);