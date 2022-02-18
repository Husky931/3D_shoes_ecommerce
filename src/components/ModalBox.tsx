import { useState } from "react"
import { Typography, Card, CardActions, CardContent, CardMedia, Button, Fade } from "@mui/material"

const ModalBox: React.FC = ({ showInfoBox, checked, model }) => {
  return (
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
  )
}

export default ModalBox