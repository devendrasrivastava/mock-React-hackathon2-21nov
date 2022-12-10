import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'
import './Services.css'


const tiers = [
  {
    title: 'Mobile App',
    price: '1',
    description: [
      'This rate is available on loans between £7,500 and £14,950. Other loan amounts are available at, alternative rates. Our rates depend on your circumstances and loan amount and may differ from the ,Representative APR.'
    ],
    buttonText: 'Read More',
    buttonVariant: 'contained',
  },
  {
    title: 'Loan',
    subheader: 'Most popular Personal Loan',
    price: '15',
    description: [
      'Apply for a personal loan with our 5 star rated service',
    ],
    buttonText: 'Read More',
    buttonVariant: 'contained',
  },
  {
    title: 'Mortgage',
    price: '30',
    description: [
      'NatWest mortgages are available to over 18s.',
      'Your home or property may be repossessed if you do not keep up ',
      'repayments on your mortgage.',
     
    ],
    buttonText: 'Read More',
    buttonVariant: 'contained',
  },
];


function PricingContent() {

  const navigate = useNavigate();  //variable to protect the page

  useEffect(() => {                                         //coding start to protect the page
    fetch("http://localhost:9000/auth/isAuthenticated", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("jwt_token")}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // if(data.status===401){
            //     navigate("/login")
            // }

            if (!data.isAuthenticated) {
                navigate("/login")
            }
        })
}, [])


  return (
    <>
{/* info card starts */}

<div class="container my-4 user-card-row">
        <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading fw-normal lh-1">World Leader in Digital Banking. <span class="text-muted">Best in the World!</span></h2>
                <p class="lead">Our fast and secure Internet Banking is rated among the best in the world.</p>
            </div>
            <div class="col-md-5 order-md-1">

                <img src="https://source.unsplash.com/500x500/?laptop" alt="" class="img-fluid img-thumbnail"/>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">Serving you since 1968. <span class="text-muted">Best services with branches all over the world.</span></h2>
                <p class="lead">Our service has been among the best in the world thoughout our lifetime. we have some of the most talented staff with makes us stand out in the crowd.</p>
            </div>
            <div class="col-md-5">
            
                <img src="https://source.unsplash.com/500x500/?money" alt="" class="img-fluid img-thumbnail"/>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row featurette d-flex justify-content-center align-items-center">
            <div class="col-md-7 order-md-1">
                <h2 class="featurette-heading fw-normal lh-1">Explore our products and services. <span class="text-muted">Check out our sevices section for more.</span></h2>
                <p class="lead">Available to existing NatWest current account, credit card, mortgage or savings customers who are UK residents.</p>
            </div>
            <div class="col-md-5">
                <img src="https://source.unsplash.com/500x500/?desktop" alt="" class="img-fluid img-thumbnail"/>
            </div>
        </div>
    </div>


{/* info card ends  */}


    <div className="container user-services">
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
     
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Services
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        How our services are running and updates on planned maintenance
        </Typography>
      </Container>
      
      <div className="container">
      
      </div>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
    </div>
    </>
  );
}

export default function Services() {
  
  return <PricingContent />;
}
