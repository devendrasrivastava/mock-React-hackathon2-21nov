import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-12 col-md-9 col-lg-6 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?bank"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sice 1968
          </Typography>
          <Typography variant="body2" color="text.secondary">
            NatWest has been serving customers since 1968.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-9 col-lg-6 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?bank, money"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Helping community
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Helping out community is an initiative, which we have been following since the inception.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-9 col-lg-6 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?nature"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Environment
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We have been reducing our carbon footprints to help out the nature.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-9 col-lg-6 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?wild"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Preserving Wildlife
          </Typography>
          <Typography variant="body2" color="text.secondary">
            with out environment initiative we are working with UK Government to preserve the wildlife.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    </div>

    <div className="row">
            <div className="col-12 col-md-9 col-lg-6 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?students"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Education
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Helping out students for their higher studies. we have a full catalogue of student loans to suit your needs.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-9 col-lg-6 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?cards"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Credit cards
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Market leader in the credit card community. with a rich catalogue to choose from.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-9 col-lg-6 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?Home"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Home Loans
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Helping people to fulfill their dreams to buy a new Home.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-9 col-lg-6 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?royal"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Legacy
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A rich legacy of high royal service. with modern technology and old royal grace.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    </div>
    </div>
  );
}