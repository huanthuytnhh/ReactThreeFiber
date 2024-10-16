import { useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three-stdlib';
import * as THREE from 'three';

export default function DancingCharacter() {
  const meshRef = useRef();
  const mixerRef = useRef();

  const fbx = useLoader(FBXLoader, '/path/to/your/mixamo/model.fbx');

  useEffect(() => {
    if (fbx) {
      fbx.scale.setScalar(0.01); // Adjust scale as needed
      fbx.position.set(0, -1, 0); // Adjust position as needed

      const animations = fbx.animations;
      if (animations && animations.length) {
        mixerRef.current = new THREE.AnimationMixer(fbx);
        const action = mixerRef.current.clipAction(animations[0]);
        action.play();
      }
    }
  }, [fbx]);

  useFrame((state, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return <primitive ref={meshRef} object={fbx} />;
}