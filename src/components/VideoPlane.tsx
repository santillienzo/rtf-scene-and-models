import { MeshProps } from "@react-three/fiber"
import { useEffect, useState } from "react"
import * as THREE from 'three'
type Props = {
    videoUrl: string,
} & MeshProps

const VideoPlane = ({videoUrl, ...props}: Props) => {
    const  [video] = useState(
        ()=>Object.assign(document.createElement('video'), {src: videoUrl, crossOrigin: 'Anonymus', loop: true, muted: true})
    )


    useEffect(()=>{
        video.play()
    }, [video])
  return (
    <mesh castShadow receiveShadow position={[0,5,.51]} scale={[16,9,1]} {...props}>
        <planeGeometry/>
        <meshBasicMaterial>
            <videoTexture attach='map' args={[video]} encoding={THREE.sRGBEncoding}/>
        </meshBasicMaterial>
        {/* <meshStandardMaterial color='red' envMapIntensity={.5} roughness={.2} metalness={.8}/> */}
    </mesh>
  )
}

export default VideoPlane