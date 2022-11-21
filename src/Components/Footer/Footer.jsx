import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        NatWest
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      
      {/* Footer */}
      <Container 
        maxWidth="md"
        component="footer"
        sx={{ 
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
        <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/" target={'_blank'}><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://twitter.com/" target={'_blank'}><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="https://dribbble.com/" target={'_blank'}><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/" target={'_blank'}><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
      </Container>
      
      {/* End footer */}
    </React.Fragment>
  );
}

export default function MuiFooter() {
  return <PricingContent />;
}
