import HomeScene from "@/scenes/HomeScene"
import { Canvas } from "@react-three/fiber"

function App() {

  return (
    <>
      <main className="app">
        <section className="hero">
          <h1>WEB 3D Workshop</h1>
          <h3>Por Enzo Santilli - @enzosantilli</h3>
        </section>
      </main>
      <Canvas
        className="canvas"
        shadows
        camera={{position: [0,30,60], fov: 15}}
      >
        <HomeScene/>
      </Canvas>
    </>
  )
}

export default App
