// import { Route, Routes } from "react-router-dom"
// import Home from './pages/Home';
// import Software from './pages/Software';
// import Skills from './pages/Skills';
// import Design from './pages/Design';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import NavScene from './components/NavScene';

function App() {
  return (
    // <>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/software' element={<Software />} />
    //     <Route path='/skills' element={<Skills />} />
    //     <Route path='/design' element={<Design />} />
    //   </Routes>
    // </>
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#200000' }}>
        <Canvas orthographic camera={{ position: [0, 0, 100], zoom: 100 }}>
            <NavScene />
        </Canvas>
    </div>
  );
}

export default App;
