import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import DancingCharacter from './DancingCharacter';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-white">
      {/* ... (previous code remains the same) ... */}
      <div className="container mx-auto px-4 py-32 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          {/* ... (previous code remains the same) ... */}
        </div>
        <div className="md:w-1/2 h-[500px]">
          <Canvas camera={{ position: [0, 1, 3], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <DancingCharacter />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </header>
  );
};

export default Header;