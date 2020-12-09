import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginNav from '../LoginNav/LoginNav'
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import './LoginHome.css';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 200 ,
    height:200,
    background: '#C7FFFD',
    borderRadius: 25,
    alignItems : 'center',
  },
});

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 15,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const StyledButton1 = withStyles({
  root: {
    background: '#21CBF3',
    borderRadius: 15,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const StyledButton2 = withStyles({
  root: {
    width: 100,
    background: 'linear-gradient(45deg, #070F83 30%, #21CBF3 70%)',
    borderRadius: 50,
    border: 0,
    color: 'white',
    height: 100,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const Home= () =>{
  const classes = useStyles();
  return (
    <>
    <div class="bgimg">
    <LoginNav/>
    <div class="container">
    <div class="container1">
      <div class="row">
        <h4 className="text-center mt-3 mb-0">
          Let's Fight Covid-19 Together    
          <Button className="ml-3" variant="outlined" color="secondary"
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://ncdc.gov.in/index1.php?lang=1&level=1&sublinkid=703&lid=550';
            }}>
            View Guidelines
          </Button>
        </h4>
      </div>
    </div>
    <div class="container2">
      <div class="row" className="mt-0">
        <h2 className="text-center mb-4">
        <b>
        COMMON DISEASES
        </b>
        </h2>
      </div>
      <div class="row" >
        <div class="col-sm">
          <StyledButton2 className="ml-3" variant="contained" size="large" 
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.who.int/topics/diarrhoea/en/';
            }}>
            Diarrhoea
          </StyledButton2>
        </div>
        <div class="col-sm">
          <StyledButton2 className="ml-3" variant="contained" size="large" 
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.who.int/news-room/fact-sheets/detail/malaria';
            }}>
            Malaria
          </StyledButton2>
        </div>
        <div class="col-sm">
          <StyledButton2 className="ml-3" variant="contained" size="large" 
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.who.int/news-room/fact-sheets/detail/hiv-aids';
            }}>
            HIV/AIDS
          </StyledButton2>
        </div>
        <div class="col-sm">
          <StyledButton2 className="ml-3" variant="contained" size="large" 
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.who.int/teams/immunization-vaccines-and-biologicals/diseases/typhoid';
            }}>
            Typhoid
          </StyledButton2>
        </div>
        <div class="col-sm">
         <StyledButton2 className="ml-3" variant="contained" size="large" 
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.who.int/news-room/fact-sheets/detail/diabetes';
            }}>
            Diabetes
          </StyledButton2>
        </div>
      </div>
      
     
      <div class="row" >
        <h4 className="text-center mt-5 mb-3">
          Want to know more about other diseases     
          <StyledButton1 className="ml-3" 
            onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.who.int/travel-advice/disease-information';
            }}>
            Click Here
          </StyledButton1>
        </h4>
      </div>
      </div>
      <div class="container3">
      <div class="row" className="text-center ">
        <h2 className="text-center  ">
        <b>
        WHY PreDx  ?
        </b>
        </h2>
      </div>
      <div class="row" className="mt-5 mb-15">
      
      
      <div class="container5" >
      <div class="container6" >
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia >
          <img className="image" src={image4} width='60' height='60' />
            
        </CardMedia>
        <CardContent>
          <Typography className="text-center"  gutterBottom variant="h6" component="h6">
           Easy, Pocket-Friendly Appointments
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
      <div class="container6" >
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia >
          <img className="image" src={image3} width='60' height='60' />
            
        </CardMedia>
        <CardContent>
          <Typography className="text-center"  gutterBottom variant="h6" component="h6">
           AAA - Authorized Accurate Answers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
      </div>
      <div class="container6" >
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia >
          <img className="image" src={image1} width='60' height='60' />
            
        </CardMedia>
        <CardContent>
          <Typography className="text-center"  gutterBottom variant="h6" component="h6">
           24 x 7 Service
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions>
    </Card>
      </div>
      <div class="container6" >
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia >
          <img className="image" src={image2} width='60' height='60' />
            
        </CardMedia>
        <CardContent>
          <Typography className="text-center"  gutterBottom variant="h6" component="h6">
           Customized ratings
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
      </div>
      </div>
    </div>
    <div class="container4">
      <div class="row" className="mt-15 text-center">
          <h2>
          <StyledButton className="ml-3" variant="contained" size="small" 
            onClick={(e) => {
            e.preventDefault();
            console.log("Clicked");
            }}>
            About Us
          </StyledButton>
          <StyledButton className="ml-3" variant="contained" size="small"  
            onClick={(e) => {
            e.preventDefault();
            console.log("Clicked");
            }}>
            Feedback
          </StyledButton>
        
          </h2>
      </div>

      <div class="row" className="mt-2 text-center">
          <h2>
          <StyledButton className="ml-3" variant="contained" size="small" 
            onClick={(e) => {
            e.preventDefault();
            console.log("Clicked");
            }}>
            Contact Us
          </StyledButton>
          
        
          <StyledButton className="ml-3" variant="contained" size="small" 
            onClick={(e) => {
            e.preventDefault();
            console.log("Clicked");
            }}>
            Developer
          </StyledButton>
          </h2>
        
      </div>
    </div>
    </div>
    </div>
    </>
  );
}
export default Home;