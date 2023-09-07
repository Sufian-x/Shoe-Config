import './index.css';
import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3.3}>
      {/* <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.newColors.laces}/> */}
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.newColors.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.newColors.stripe}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.newColors.sole}/>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.newColors.sole}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.newColors.stripe}/>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

function App() {

  const [mesh, setMesh] = useState('#ffffff');
  const [stripes, setStripes] = useState('#ffffff');
  const [sole, setSole] = useState('#ffffff');
  const [laces, setLaces] = useState('#ffffff');

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="product-canvas">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight />
                <directionalLight color="white" position={[0, 10, 5]} />
                <Model newColors={{mesh: mesh, stripe: stripes, sole: sole, laces: laces}}/>
                <OrbitControls/>
              </Suspense>
            </Canvas>


          </div>
          <h2>Color chooser</h2>
          <div className='colors'>
            <div>
              <input type="color" id="mesh" name="mesh"
                value={mesh} onChange={e=>{setMesh(e.target.value)}}/>
              <label for="head">Mesh</label>
            </div>

            <div>
              <input type="color" id="stripe" name="stripe"
                value={stripes} onChange={e=>{setStripes(e.target.value)}}/>
              <label for="body">Stripes</label>
            </div>

            <div>
              <input type="color" id="laces" name="laces"
                value={laces} onChange={e=>{setLaces(e.target.value)}}/>
              <label for="body">Laces</label>
            </div>

            <div>
              <input type="color" id="sole" name="sole"
                value={sole} onChange={e=>{setSole(e.target.value)}}/>
              <label for="body">Sole</label>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
