import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Apple, Google } from "../components/customIcons";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  const [visible, setVisible ] = useState(false)
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  const handleChange=(e) =>{
    const { name, value } = e.target;
    setInputs((prevState) =>({
      ...prevState,
      [name]:value
    }))
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    console.log({
      email: inputs.email,
      password: inputs.password
    });
  }

  const EndAdornment = () =>{
    const handleClick = () => {
      setVisible(!visible);
    };
    return(
      <InputAdornment position='end'>
        <IconButton onClick={handleClick}>
          { visible ? <FaEye/> : <FaEyeSlash/> }
        </IconButton>
      </InputAdornment>
    )
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Container maxWidth="sm">
        <Card className=" flex flex-col  bg-white p-18 rounded shadow-lg gap-14">
          <Card variant="text" component="div" className="flex flex-col gap-2">
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Log in
            </Typography>
            <Typography
              variant="subtitle2"
              color="primary"
              className="mt-3 mb-6"
            >
              Enter your email and password
            </Typography>
          </Card>

          <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-5  ">
            <FormControl>
              <TextField
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                label="Enter Email"
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
                type = { visible ? "text" : "password"}
                name="password"
                value={inputs.password}
                onChange={handleChange}
                label="Password"
                variant="outlined"
                fullWidth
                slotProps={{
                  input: {
                    endAdornment: (
                      <EndAdornment visible={visible} setVisible={setVisible} />
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

            <Box className="flex flex-col my-5 gap-5">
              <Typography
                variant="body2"
                className="text-gray-500 flex items-center"
              >
                Or continue with
                
              </Typography>

              <Box className="flex  gap-4 mt-2">
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    backgroundColor: "#f3f4f6",
                    color: "#333",
                    padding: "20px 50px",
                    "&:hover": { backgroundColor: "#e5e7eb" },
                  }}
                  className=""
                >
                  <Google />
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  disableElevation
                  sx={{
                    backgroundColor: "#f3f4f6",
                    color: "#333",
                    padding: "20px 50px",
                    "&:hover": { backgroundColor: "#e5e7eb" },
                  }}
                >
                  <Apple />
                </Button>
              </Box>
            </Box>
            <Button
            type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#5D5FEF",
                margin: "auto",
                textTransform:"capitalize"
              }}
              className="w-[305px] h-[62px] lowercase"
            >
              Log in
            </Button>
          </Box>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
