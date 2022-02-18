import { useState } from "react"
import "./App.css"
import { World, Model, useSpring, Camera, OrbitCamera } from "lingo3d-react"
import { Typography, Paper, Card, CardActions, CardContent, CardMedia, Button, Fade } from "@mui/material"

function App() {
  const [showInfoBox, setShowInfoBox] = useState("none")
  const [checked, setChecked] = useState(false)
  const models = [
    {
      name: "Air Jordan 1",
      price: "34$",
      desc: "Founded in Chicago, Air Jordan was created for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls.",
      image: "air_jordan_1.jpeg",
    },
    {
      name: "Vans",
      price: "19$",
      desc: "Vans is an American manufacturer of skateboarding shoes and related apparel, started in Anaheim, California, and owned by VF Corporation. The company also sponsors surf, snowboarding, BMX, and motocross teams.",
      image: "vans.jpg",
    },
    {
      name: "Air Jordan 1",
      price: "340$",
      desc: "Founded in Chicago, Air Jordan was created for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls.",
      image: "vans.jpg",
    },
  ]
  const [model, setModel] = useState(models[0])

  return (
    <div>
      <World>
        <Model
          src="air_jordan_1/scene.gltf"
          y={-50}
          innerRotationY={0}
          onMouseOver={() => {
            setShowInfoBox("block")
            setChecked(true)
          }}
          onMouseOut={() => {
            setShowInfoBox("none")
            setChecked(false)
            setModel(models[0])
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
            setModel(models[1])
          }}
          onMouseOut={() => {
            setShowInfoBox("none")
            setChecked(false)
          }}
        />
        <Model src="showroom/scene.gltf" scale={5} innerRotationY={0} onMouseOver={() => {}} />
        <OrbitCamera active z={500} y={80} targetY={-100} />
      </World>
      <Fade in={checked}>
        <Card sx={{ maxWidth: 345, position: "absolute", top: "30%", left: "10%", display: showInfoBox }}>
          <CardMedia component="img" height="140" image={model.image} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ margin: 0 }}>
              {model.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" sx={{ margin: 0, marginBottom: "10px", color: "blue" }}>
              {model.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {model.desc}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" sx={{ fontWeight: "bold" }}>
              Buy
            </Button>
            <Button size="small" sx={{ fontWeight: "bold" }}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Fade>
    </div>
  )
}

export default App
