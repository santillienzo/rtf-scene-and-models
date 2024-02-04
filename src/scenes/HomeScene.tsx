import VideoPlane from '@/components/VideoPlane'
import { Car } from '@/models/Car'
import { Environment, GizmoHelper, GizmoViewport, OrbitControls, RoundedBox, Stars } from '@react-three/drei'


const Decorations = () => {
  return (
    <>
      <RoundedBox receiveShadow castShadow smoothness={10} radius={0.015} position={[-7,1,1.5]} scale={[4.2,2,2]}>
        <meshStandardMaterial color="#f4ae00" envMapIntensity={.5} roughness={0} metalness={0}/>
      </RoundedBox>

      <mesh position={[5,1,5]} castShadow>
        <icosahedronGeometry/>
        <meshStandardMaterial color="#8e00f4" envMapIntensity={.8} roughness={.2} metalness={1}/>
      </mesh>

      <mesh receiveShadow castShadow rotation-x={-Math.PI / 2} position={[8,1.1,2]} scale={[2,2,2]}>
        <boxGeometry args={[1,1,1,3,3,3]}/>
        <meshStandardMaterial color="#2d2d2d" envMapIntensity={.5} roughness={0} metalness={0} wireframe/>
      </mesh>
    </>
  )
}

const HomeScene = () => {
  return (
    <>
        <OrbitControls/>
        <pointLight position={[10, 15, 15]} color="#570c0c" castShadow intensity={5} shadow-camera-near={0.1}
          shadow-camera-far={200}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024} 
        />
        <directionalLight position={[10, 15, -5]} color="#570c0c" castShadow intensity={5} shadow-camera-near={0.1}
          shadow-camera-far={200}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024} 
        />
        <Environment preset="city"/>
        {/* <ambientLight/> */}

        <GizmoHelper
          alignment='bottom-right'
          margin={[100,100]}
        >
          <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor='black'/>
        </GizmoHelper>

        <group
          position={[0,-3,0]}
        >
          <VideoPlane videoUrl='/video.mp4'/>
          <VideoPlane videoUrl='/video.mp4' position={[0, 5, -.51]} rotation-y={Math.PI}/>
          {/* Video Wall */}
          <mesh castShadow receiveShadow position={[0,5,0]}>
            <boxGeometry args={[17, 10, 1]}/>
            <meshStandardMaterial color='black' envMapIntensity={.5} roughness={.2} metalness={.8}/>
          </mesh>
          {/* Base */}
          <mesh position={[0,-5,0]}>
            <cylinderGeometry args={[10,10,10,64]}/>
            <meshStandardMaterial color="black" envMapIntensity={.5} roughness={0} metalness={0}/> 
          </mesh>

          <Decorations/>
        </group>
        <Car position={[4, -2.8,-3]} rotation-y={Math.PI / .31} scale={1.5}/>
        <Stars radius={50} depth={50} count={5000} factor={20} saturation={0} fade speed={1}/>
    </>
  )
}

export default HomeScene