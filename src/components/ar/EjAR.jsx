//Ejemplo de un cubo en RA
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrSphere from './XrSphere'; // Importa el nuevo componente para la esfera

function EjAR() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <XrSphere /> {/* Cambiado de XrCube a XrSphere */}
        </XR>
      </Canvas>
    </>
  );
}

export default EjAR;
