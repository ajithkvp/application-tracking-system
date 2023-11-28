import React, { useEffect, useState } from "react";
import { Grid, Box, Typography }  from "@mui/material";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from "axios";
import { Container } from "react-bootstrap";

const Summary = ()=>{
  // const percentage = 66;
  const [percentage, setPercentage] = useState('');
  const [title, setTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');
  const [weekly_target, setTarget] = useState('');
  const [status_counts, setCounts] = useState({});
  

  const token = localStorage.getItem('token');

  // Define your custom headers
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const chartSetting = {
    xAxis: [
      {
        label: 'Count',
      },
    ],
    width: 600,
    height: 400,
  };
  const dataset = [
    {
      count: status_counts['1'],
      status: 'Wishlist',
    },
    {
      count: status_counts['2'],
      status: 'Referral',
    },
    {
      count: status_counts['3'],
      status: 'Applied',
    },
    {
      count: status_counts['4'],
      status: 'Rejected',
    },
  ];

  const valueFormatter = (value) => `${value}`;

  useEffect(()=>{
    try{
        axios.get("http://localhost:5000/statistics", {headers})
        .then(response => {
          console.log(response); 
          const target_title = response.data.target_title;
          const target_salary = response.data.target_salary;
          const target_date = response.data.target_date;
          const status_counts = response.data.status_counts;

          console.log(target_date, target_salary, target_title);

          setTitle(target_title);
          setSalary(target_salary);
          setDate(target_date);
          setCounts(status_counts);

          const weekly_applied = response.data.weekly_applied;
          const weekly_target = response.data.weekly_target;
          setTarget(weekly_target);
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
    <Grid container xs={12}>
      <Grid item container lg={12} sx={{m: '1rem'}}>
        {/* <Box > */}
          <Grid item container xs={12} sx={{bgcolor:'white', p:'2rem', border: '1px solid #A9A9A9', borderRadius:'10px'}}>
            <Grid item xs={12} sx={{mb:'0.5rem'}}>
            <Typography   sx={{fontWeight: 'bold', fontSize:'2rem'}}>Next Career Goal: Land a new job</Typography>
            </Grid>
            <Grid item container justifyContent="space-between" sx={{mt: '1rem'}}>
              <Grid item>
              <Typography variant="h6" fontSize="0.9rem" fontWeight="bold" sx={{color: '#A9A9A9'}}>Target Title</Typography>
              <Typography variant="h6" fontWeight="bold">{title}</Typography>
              

              </Grid>

              <Grid item >
              <Typography variant="h6" fontSize="0.9rem" fontWeight="bold" sx={{color: '#A9A9A9'}}>Target Date</Typography>
              <Typography variant="h6" fontWeight="bold">{date}</Typography>
              </Grid>

              <Grid item >
              <Typography variant="h6" fontSize="0.9rem" fontWeight="bold" sx={{color: '#A9A9A9'}}>Target Salary Range</Typography>
              <Typography variant="h6" fontWeight="bold">{salary}</Typography>
              </Grid>
            </Grid>
          </Grid>
        {/* </Box> */}
      </Grid>
      <Grid item container lg={12} justifyContent="space-between" sx={{m: '1rem'}}>
    <Grid item container lg={5} justifyContent="center"  alignItems="center" sx={{bgcolor:'white', p:'2rem', border: '1px solid #A9A9A9', borderRadius:'10px'}}>
      {/* title */}
      <Grid item xs={12} sx={{mb:'1.5rem'}} >
        <Typography  sx={{fontWeight: 'bold' , fontSize:'2rem'}}>Job Applications</Typography>
      </Grid>
      {/* circular progress */}
      <Grid item xs={12}>
        <Container style={{width: 250, height: 250}}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // Path color
              stroke: `rgba(62, 152, 199, ${percentage / 100})`,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
              // Customize transition animation
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // Rotate the path
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              // Trail color
              stroke: '#d6d6d6',
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
              // Rotate the trail
              transform: 'rotate(0.25turn)',
              transformOrigin: 'center center',
            },
            // Customize the text
            text: {
              // Text color
              fill: 'black',
              // Text size
              fontSize: '16px',
              fontWeight: 'bold',
              textAnchor:'middle',
              dy:'0.15em',
            },
            // Customize background - only used when the `background` prop is true
            background: {
              fill: '#3e98c7',
            },
          }}
        />
        </Container>
      </Grid>
      {/* goals */}
      <Grid item xs={12} sx={{ bgcolor: 'rgba(62, 152, 199)', borderRadius: '25px', alignItems: 'center', justifyContent: 'center', mr:'6rem', ml:'6rem', p:'0.5rem' }}>
        <Typography variant="h6" textAlign='center' sx={{ color: 'white' }}>{`Weekly Target: ${weekly_target}`}</Typography>
      </Grid>
    </Grid>

    {/* second  */}
    
    <Grid item container lg={5} justifyContent="center" alignItems="center" sx={{bgcolor:'white', p:'2rem', border: '1px solid #A9A9A9', borderRadius:'10px'}}>
  {/* title */}
  <Grid item xs={12} sx={{mt:'0.5rem'}}>
  <Typography sx={{fontWeight: 'bold', fontSize:'2rem'}}>Job Search Pipeline</Typography>
   
  </Grid>
  <Grid item xs={12} justifyContent="center" alignItems="center" >
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'status' }]}
      bottomAxis={null}
      series={[{ dataKey: 'count', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
      tooltip={{ trigger: 'axis' }}
      width={450}
      height={350}
      sx={{m:'0.5rem'}}
    />
  </Grid>
</Grid>
    </Grid>
    </Grid>
  </Box>

);

}
export default Summary;