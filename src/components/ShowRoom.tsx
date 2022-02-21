import { useEffect, useState } from "react"
import { World, Model, OrbitCamera, useAnimation, Camera } from "lingo3d-react"
import models from "../models"

const ShowRoom: React.FC = ({ setModel, setShowInfoBox, setChecked }) => {
  const anim = useAnimation({ from: -40, to: -50, repeat: Infinity, repeatType: "reverse", duration: 700 })

  //initial elements scale
  const [scale1, setScale1] = useState(0.8)
  const [scale, setScale] = useState(0.7)

  // initial elements Y position
  let [yy, setYY] = useState(anim)

  //  set camera effects when hover over elements
  const [camZ, setCamZ] = useState(420)
  const [camY, setCamY] = useState(-30)
  const [camX, setCamX] = useState(0)

  // make the rotation effect on hover
  let [rotationY, setRotationY] = useState(0)
  const [startRotating, setStartRotating] = useState(false)

  const zoomEffectHover1 = () => {
    setStartRotating(true)
    setScale1(1.1)
    setCamZ(200)
    setCamY(0)
    setCamX(0)
    rotateObject()
  }
  const zoomEffectHoverClear1 = () => {
    setScale1(0.8)
    setCamZ(420)
    setCamY(-30)
    setStartRotating(false)
    setRotationY(0)
  }

  const rotateObject = () => {
    if (startRotating) {
      setRotationY((rotationY += 0.05))
    }
  }

  useEffect(() => {
    rotateObject()
  }, [rotationY, startRotating])

  return (
    <World>
      <Model
        src="air_jordan_1/scene.gltf"
        y={startRotating ? 5 : anim}
        scale={scale1}
        innerRotationY={0}
        rotationY={rotationY}
        onMouseOver={() => {
          zoomEffectHover1()
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[0])
        }}
        onMouseOut={() => {
          zoomEffectHoverClear1()
        }}
      />
      <Model
        src="shoes_violet/scene.gltf"
        y={anim}
        x={-350}
        scale={scale}
        innerRotationY={0}
        onMouseOver={() => {
          // zoomEffectHover2()
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[1])
        }}
        onMouseOut={() => {
          zoomEffectHoverClear1()
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
      <Camera active z={camZ} y={camY} x={camX} />
      {/* <OrbitCamera active z={camZ} y={camY} x={camX} enableDamping /> */}
    </World>
  )
}

export default ShowRoom
