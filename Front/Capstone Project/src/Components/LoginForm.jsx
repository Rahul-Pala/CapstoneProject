
import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useUserContext } from '../Context/UserContext';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useData } from '../Hooks/useData';




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const{user, setUser} = useUserContext()
  const data = useData(`http://localhost:8080/api/users`);
  const [LUserName, setLUserName] = useState('')
  const [LPassWord, setLPassWord] = useState('')
  const [users, setUsers] = useState('')
  const [validateMsg, setValidateMsg] = useState(null)
  let navigate = useNavigate();
  //get the users
  useEffect(() => {
      setUsers(data ? data:[])
      }, [data]
      )
    //username & password in if condition, seperate if telling user which to change
    //more states for error message, results, username didn't match, password matches but user doesn't
    //etc - redirect if both are successful
    //where to think about, where to store information (context) available to all refresh will remove
    //stored data - localStorage https://blog.logrocket.com/using-localstorage-react-hooks/
    //validate the logins
    const handleSubmit=(e)=>
     
    {
      e.preventDefault()
      let matchedUserName=false
        for (let u of users)
        {
          console.log(u, "Username")
          if (LUserName===u?.UserName)
          {
            console.log(u, "password verification")
            matchedUserName=true
            if (LPassWord===u?.Password)
            {
              console.log(u?.UserName, u?.Password, u?._id)
              setUser(u)
              console.log(u)
              navigate('/');
            }
            else
            {
                alert('Incorrect password, please try again.');
            }
          }
        }
        if (!matchedUserName)
        {
          alert('Incorrect username, please register first.');
        }
    }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   setUser({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="User"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e=>setLUserName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e=>setLPassWord(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
