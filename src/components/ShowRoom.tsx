import { useState } from "react"
import { World, Model, useSpring, Camera, OrbitCamera } from "lingo3d-react"
import models from "../models"

const ShowRoom: React.FC = ({ setModel, setShowInfoBox, setChecked }) => {
  return (
    <World>
      <Model
        src="air_jordan_1/scene.gltf"
        y={-50}
        innerRotationY={0}
        onMouseOver={() => {
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[0])
        }}
        onMouseOut={() => {
          setShowInfoBox("none")
          setChecked(false)
        }}
      />
      <Model
        src="shoes_violet/scene.gltf"
        y={-50}
        x={-350}
        scale={0.7}
        innerRotationY={0}
        onMouseOver={() => {
          setShowInfoBox("block")
          setChecked(true)
          setModel(models[1])
        }}
        onMouseOut={() => {
          setShowInfoBox("none")
          setChecked(false)
        }}
      />
      <Model
        src="sport_shoes/scene.gltf"
        y={-50}
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
          setShowInfoBox("none")
          setChecked(false)
        }}
      />
      <Model
        src="box/scene.gltf"
        y={-175}
        z={-4}
        scale={1.5}
        // x={350}
        innerRotationY={0}
        onMouseOver={() => {}}
        onMouseOut={() => {}}
      />
      <Model
        src="box/scene.gltf"
        y={-175}
        z={-4}
        x={350}
        scale={1.5}
        // x={350}
        innerRotationY={0}
        onMouseOver={() => {}}
        onMouseOut={() => {}}
      />
      <Model
        src="box/scene.gltf"
        y={-175}
        z={-4}
        x={-350}
        scale={1.5}
        // x={350}
        innerRotationY={0}
        onMouseOver={() => {}}
        onMouseOut={() => {}}
      />
      <Model src="showroom/scene.gltf" scale={5} innerRotationY={0} onMouseOver={() => {}} />
      <OrbitCamera active z={500} y={80} targetY={-100} />
    </World>
  )
}

export default ShowRoom
