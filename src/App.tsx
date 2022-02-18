import { useState } from "react"
import "./App.css"
import { World, Model, useSpring, Camera } from "lingo3d-react"

function App() {
  const [scale, , setScale] = useState(0)

  return (
    <div>
      <World>
        <Model
          src="air_jordan_1/scene.gltf"
          // rotationY={0}
          innerRotationY={0}
          // z={zAnimation}
          onMouseOver={() => {
            // over()
            // setCameraX(0)
            // setPrice("$100")
            // setShoeName("Nike Sport")
          }}
          // onMouseOut={out}
        />
        <Camera active z={500} x={70} y={100} />
      </World>
    </div>
  )
}

export default App
