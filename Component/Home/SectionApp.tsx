import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import appsection from "../../Assets/Images/app_mockup.png"
import play from "../../Assets/Images/play.png"
import Image from 'next/image'

const SectionApp = () => {
  return (

    <Grid container bgcolor={"#EDEFF0"} borderRadius={"0  0 70px 0"} pb={10} sx={{ width:{ xs:"12", lg: "90%"} , display: { sm: "flex", xs: "none" }}} mt={13} display={"flex"} justifyContent={"space-around"}>
      <Grid container item position={"relative"} xs={4} ml={10}>
        <Grid item position={"absolute"} bottom={0.5} right={"3.4375rem"} sx={{display: { md: "flex", xs: "none" } }}  >
          <Image width={424} src={appsection} alt={",mnjhbgvf"} />
        </Grid>
      </Grid>
          </Grid>
  )
}

export default SectionApp