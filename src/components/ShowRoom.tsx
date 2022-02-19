import { useEffect, useState } from "react"
import { World, Model, OrbitCamera, useAnimation } from "lingo3d-react"
import models from "../models"

// let useShoeAnimation = () => {
//   let [shoeZ, setShoeZ] = useState(0)
//   let [shoeRotation, setShoeRotation] = useState(0)

//   let zAnimation = useSpring({ from: 1, to: shoeZ })
//   let rotationAnimation = useSpring({ from: 0, to: shoeRotation })

//   let over = () => {
//     setShoeZ(300)
//     setShoeRotation(180)
//   }

//   let out = () => {
//     setShoeZ(0)
//     setShoeRotation(0)
//   }

//   return [rotationAnimation, zAnimation, over, out]
// }

// function App() {
//   let [rotationAnimation, zAnimation, over, out] = useShoeAnimation()
//   let [rotationAnimation2, zAnimation2, over2, out2] = useShoeAnimation()

//   const [cameraX, setCameraX] = useState(0)
//   const cameraXAnimation = useSpring({ from: 0, to: cameraX })

//   let [price, setPrice] = useState("unselected")
//   let [shoeName, setShoeName] = useState("unselected")

const ShowRoom: React.FC = ({ setModel, setShowInfoBox, setChecked }) => {
  const anim = useAnimation({ from: -40, to: -50, repeat: Infinity, repeatType: "reverse", duration: 700 })

  const [scale, setScale] = useState(0.8)

  const zoomEffectHover = () => {
    setScale(1.1)
  }
  const zoomEffectHoverClear = () => {
    setScale(0.8)
  }

  return (
    <World>
      <Model
        src="air_jordan_1/scene.gltf"
        y={anim}
        scale={scale}
        innerRotationY={0}
        onMouseOver={() => {
          zoomEffectHover()
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[0])
        }}
        onMouseOut={() => {
          zoomEffectHoverClear()
          // setShowInfoBox("none")
          // setChecked(false)
        }}
      />
      <Model
        src="shoes_violet/scene.gltf"
        y={anim}
        x={-350}
        scale={0.7}
        innerRotationY={0}
        onMouseOver={() => {
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[1])
        }}
        onMouseOut={() => {
          // setShowInfoBox("none")
          // setChecked(false)
        }}
      />
      <Model
        src="sport_shoes/scene.gltf"
        y={anim}
        x={350}
        scale={0.7}
        innerRotationY={0}
        rotationY={180}
        onMouseOver={() => {
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[2])
        }}
        onMouseOut={() => {
          // setShowInfoBox("none")
          // setChecked(false)
        }}
      />
      <Model src="box/scene.gltf" y={-175} z={-4} scale={1.5} innerRotationY={0} onMouseOver={() => {}} onMouseOut={() => {}} />
      <Model src="box/scene.gltf" y={-175} z={-4} x={350} scale={1.5} innerRotationY={0} onMouseOver={() => {}} onMouseOut={() => {}} />
      <Model src="box/scene.gltf" y={-175} z={-4} x={-350} scale={1.5} />
      <Model src="showroom/scene.gltf" scale={5} innerRotationY={0} onMouseOver={() => {}} />
      <OrbitCamera active z={500} y={80} x={0} targetY={-100} />
    </World>
  )
}

export default ShowRoom
