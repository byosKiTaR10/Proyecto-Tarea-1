import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const XrSphere = () => {
  const [color] = useState("#ff5733"); // Cambia el color según tus preferencias

  useFrame(({ clock }) => {
    // Animaciones o lógica de actualización, si es necesario
  });

  return (
    <Sphere args={[1, 32, 32]} position={[0, 0, -5]} castShadow receiveShadow>
      <meshStandardMaterial color={color} />
    </Sphere>
  );
};

export default XrSphere;