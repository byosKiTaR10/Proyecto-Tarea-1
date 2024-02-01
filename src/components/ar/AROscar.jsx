import { Canvas } from '@react-three/fiber';
import { ARButton, XR } from '@react-three/xr';
import ARModel from './ARModel';

const AROscar = () => {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <ARModel />
        </XR>
      </Canvas>
    </>
  );
};

export default AROscar;
