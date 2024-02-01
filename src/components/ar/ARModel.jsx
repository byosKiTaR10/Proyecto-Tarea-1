import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { XR, useXR } from '@react-three/xr';
import { useLoader } from '@react-three/fiber';

const ARModel = () => {
  const xr = useXR();
  const gltf = useLoader(GLTFLoader, '/model.gltf'); // Reemplaza '/ruta/al/modelo.gltf' con la ruta correcta de tu modelo

  if (xr.isPresenting) xr.setControllerVisibility(false);

  return (
    <group>
      {gltf.scene && (
        <primitive
          object={gltf.scene}
          position={[0, 0, -5]} // Ajusta la posición según sea necesario
          scale={[1, 1, 1]} // Ajusta la escala según sea necesario
        />
      )}
    </group>
  );
};

export default ARModel;
