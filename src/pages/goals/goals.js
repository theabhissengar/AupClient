import React, { useState, useEffect } from "react";
import HomeLayout from "../../layout/HomeLayout/HomeLayout";
import Splash from "../../components/splash/splash";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TimerIcon from "@mui/icons-material/Timer";
import Typography from '@mui/material/Typography';
import EditIcon from "@mui/icons-material/Edit";
import { styled } from '@mui/system';

const TimerContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
});

const TimerDisplay = styled('div')({
  fontSize: '3rem',
});

const Goals = () => {
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [timer, setTimer] = useState(false);
  const [timerValue, setTimerValue] = useState();
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission (adding a new todo)
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  // Function to handle deleting a todo
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Timer code
 

  // Play bell chime tone when time runs out
  const playBellChime = () => {
    const audio = new Audio('./assets/sounds/wind-chimes.mp3'); // Replace with your audio URL
    audio.play();
  };

  useEffect(() => {
    let interval;

    // Start timer when isActive is true
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            playBellChime();
            clearInterval(interval);
            setIsActive(false);
            return 0;
          } else {
            return prevSeconds - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Clean up interval on unmount or when isActive changes
    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    if (!isActive) {
      setInputValue(""); 
    }
    setSeconds(timerValue);
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleTimerInputChange = (event) => {
    setTimerValue(parseInt(event.target.value, 10));
  };
  const handleTimer=()=>{
    setTimer(!timer)
  }
  return (
    <HomeLayout>
      {loading ? (
        <Splash />
      ) : timer ? (
        <section style={{ marginTop: "80px", padding: "0 24px 0px 24px" }}>
          <TimerContainer>
            <Typography variant="h4">Timer</Typography>
            <TextField
              label="Enter timer duration (in seconds)"
              variant="outlined"
              type="number"
              value={timerValue}
              onChange={handleTimerInputChange}
              fullWidth
            />
            <TimerDisplay>{formatTime(seconds)}</TimerDisplay>
            <Button variant="contained" onClick={toggleTimer}>
              {isActive ? 'Pause' : 'Start'}
            </Button>
            <Button variant="contained" onClick={resetTimer}>
              Reset
            </Button>
          </TimerContainer>
        </section>
      ) : (
        <section style={{ marginTop: "80px", padding: "0 24px 0px 24px" }}>
         <Typography variant="h4" align="center" gutterBottom>
        To-Do
      </Typography>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Enter a todo"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
              fullWidth
            />
            <Button style={{marginTop:"12px"}} variant="contained" color="primary" type="submit" fullWidth>
              Add
            </Button>
          </form>
          <List>
            {todos.map((todo, index) => (
              <ListItem key={index}>
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </section>
      )}
     { timer?<Button 
  style={{ position: "absolute", bottom: "12%", left: "10%" }}
  variant="contained"
  color="primary"
  sx={{
    borderRadius: "50%",
    width: "64px",
    height: "64px",
  }}
  onClick={handleTimer}
>
  <EditIcon />
</Button>:<Button
        style={{ position: "absolute", bottom: "12%", right: "10%" }}
        variant="contained"
        color="primary"
        sx={{
          borderRadius: "50%",
          width: "64px",
          height: "64px",
        }}
        onClick={handleTimer}
      >
        <TimerIcon />
      </Button>
}
    </HomeLayout>
  );
};

export default Goals;


