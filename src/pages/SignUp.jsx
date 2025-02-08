import { Box, Button, Card, Container, FormControl, Icon, IconButton, TextField, Typography } from "@mui/material"
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react"


const SignUp = () => {
  const [visible, setVisible ] = useState(false)

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  })

  const handeChange =(e) =>{
    const {name, value} = e.target
    setInputs((prevState) =>({
      ...prevState,
      [name] : value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log({
      name:inputs.name,
      email: inputs.email,
      password: inputs.password,
      confirm_password: inputs.confirm_password
    });
  }

  const EndAdorment = () =>{
    const handleClick = () =>{
      setVisible(!visible)
    }
    return (
      <IconButton onClick={handleClick}>
        <Icon>
          { visible ? <FaEye/> : <FaEyeSlash/> }
        </Icon>
      </IconButton>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Container maxWidth="sm">
        <Card className=" flex flex-col  bg-white p-18 rounded shadow-lg gap-14">
          <Box variant="text"  component="div" className="flex flex-col gap-2">
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Sign up
            </Typography>
            <Typography
              variant="subtitle2"
              color="primary"
              className="mt-3 mb-6"
            >
              Already have an Account
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-5  ">
          <FormControl>
              <TextField
                type="text"
                name="name"
                value={inputs.name}
                onChange={handeChange}
                label="Full Name"
                variant="outlined"
                fullWidth
                sx={{
                  "& fieldset": { borderRadius: 3 },
                  "&:hover .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#8AC0FF",
                    },
                  },
                  "&:focus .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#8AC0FF",
                      borderRadius: 3
                    },
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                type="email"
                name="email"
                value={inputs.email}
                onChange={handeChange}
                label=" Email"
                variant="outlined"
                fullWidth
                sx={{
                  "& fieldset": { borderRadius: 3 },
                  "&:hover .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#8AC0FF",
                    },
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
               type={visible ? "text": "password" }
                name="password"
                value={inputs.password}
                onChange={handeChange}
                label="Password"
                variant="outlined"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <EndAdorment visible={visible} setVisible={setVisible} />
                    )
                  },
                }}
                sx={{
                  "& fieldset": { borderRadius: 3 },
                  "&:hover .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#8AC0FF",
                    },
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
               type="password"
                name="confirm_password"
                value={inputs.confirm_password}
                onChange={handeChange}
                label="Confirm Password"
                variant="outlined"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <EndAdorment visible={visible} setVisible={setVisible} />
                    )
                  },
                }}
                sx={{
                  "& fieldset": { borderRadius: 3 },
                  "&:hover .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#8AC0FF",
                    },
                  },
                }}
              />
            </FormControl>
            <Button
            type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#5D5FEF",
                margin: "auto",
                textTransform:"capitalize"
              }}
              className="w-[305px] h-[62px] lowercase font-bold"
            >
              Sign up
            </Button>
          </Box>
        </Card>
      </Container>
    </div>
  )
}

export default SignUp