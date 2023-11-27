import React, { useEffect, useState } from "react";
import { Grid, Box, Typography }  from "@mui/material";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import axios from "axios";

const Summary = ()=>{
  // const percentage = 66;
  const [percentage, setPercentage] = useState('');
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const token = localStorage.getItem('token');

  // Define your custom headers
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(()=>{
    try{
        axios.get("http://localhost:5000/statistics", {headers})
        .then(response => {
          console.log(response); 
          const target_title = response.data.target_title;
          const target_salary = response.data.target_salary;
          const target_date = response.data.target_date;

          console.log(target_date, target_salary, target_title);

          setTitle(target_title);
          setSalary(target_salary);
          setDate(target_date);

          const weekly_applied = response.data.weekly_applied;
          const weekly_target = response.data.weekly_target;
          const percentage = Math.round((weekly_applied / weekly_target) * 100);
          console.log(`${percentage}%`);
          setPercentage(percentage);
        })
    } catch(error) {
        console.log(error);
    }
  },[]);

return (
  <Box>
    <Grid container>
      <Grid item container lg={12}>
        <Box sx={{bgcolor:'white', p:'1rem', border: '1px solid black', borderRadius:'10px'}}>
          <Grid container>
            <Grid item xs={12}>
            <Typography variant="h4"  sx={{fontWeight: 'bold'}}>Next Career Goal: Land a new job</Typography>
            </Grid>
            <Grid item container justifyContent="space-between" sx={{mt: '1rem'}}>
              <Grid item>
              <Typography variant="h6" fontSize="0.9rem" >Target Title</Typography>
              <Typography variant="h6" >{title}</Typography>
              

              </Grid>

              <Grid item >
              <Typography variant="h6" fontSize="0.9rem">Target Date</Typography>
              <Typography variant="h6" >{date}</Typography>
              </Grid>

              <Grid item >
              <Typography variant="h6" fontSize="0.9rem">Target Salary Range</Typography>
              <Typography variant="h6" >{salary}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item container lg={12} justifyContent="space-between">
    <Grid item container lg={5} justifyContent="center"  alignItems="center">
      {/* title */}
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" sx={{fontWeight: 'bold'}}>Job Applications</Typography>
      </Grid>
      {/* circular progress */}
      <Grid item xs={6} >
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
          })}
        />
      </Grid>
      {/* goals */}
      <Grid item xs={12}>
      <Typography variant="h5" textAlign="center">Goal</Typography>
      </Grid>
    </Grid>

    {/* second  */}
    
    <Grid item container lg={5}>
      {/* title */}
      <Grid item xs={12}>
        <h1>Job Search Pipeline</h1>
      </Grid>
      <Grid item xs={6}>
      </Grid>
      {/* goals */}
      <Grid item xs={12}>
            <h1>Goals</h1>
      </Grid>
    </Grid>
    </Grid>
    </Grid>
  </Box>

);

}
export default Summary;
