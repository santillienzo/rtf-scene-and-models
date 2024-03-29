import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export function Car(props: GroupProps) {
    // eslint-disable-next-line
    const { nodes, materials } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/sports-sedan/model.gltf") as any;

    return (
        <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body017?.geometry}
            material={materials["plastic.003"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body017_1.geometry}
            material={materials["paintRed.001"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body017_2.geometry}
            material={materials["_defaultMat.003"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body017_3.geometry}
            material={materials["window.003"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body017_4.geometry}
            material={materials["lightBack.003"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_body017_5.geometry}
            material={materials["lightFront.003"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft019.geometry}
            material={materials.carTire}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft019_1.geometry}
            material={materials["_defaultMat.025"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft020.geometry}
            material={materials.carTire}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft020_1.geometry}
            material={materials["_defaultMat.025"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft021.geometry}
            material={materials.carTire}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft021_1.geometry}
            material={materials["_defaultMat.025"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft014.geometry}
            material={materials.carTire}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_wheel_frontLeft014_1.geometry}
            material={materials["_defaultMat.025"]}
        />
    </group>
    );
}

useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/sports-sedan/model.gltf");