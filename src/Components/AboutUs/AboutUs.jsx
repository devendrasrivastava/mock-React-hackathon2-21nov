import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './AboutUs.css'
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react'

export default function ActionAreaCard() {

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
    <div className="container user-aboutus">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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

    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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

    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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

    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?office"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Annual Report and Accounts 2021
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We champion potential, helping people, families and businesses to thrive. Find out more in our Annual Report and Accounts.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?mountains"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Climate-related Disclosures Report 2021
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Details our progress in 2021 on our climate ambitions including an overview of our approach to climate-related governance, strategy (including scenario analysis), risk management, metrics and targets.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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
          Environmental, Social and Governance (ESG) Supplement 2021
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Provides an overview of our purpose in action and key environmental, social and governance matters including progress in 2021.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
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
          We have four strategic priorities...
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We are a relationship bank for a digital world. Our strategy for growth delivers on our purpose and drives sustainable returns to shareholders through four strategic priorities:
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    </div>



    <div className="row">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?trees"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Clean Air
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Clean Air is essential part of our life. we have been planting 10,000 trees per year so our new generation can breathe clean air.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?snow"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Global Warming
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We have been working with some of the NGOs to curb the global warming by re cycling the office waste.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?charity"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Charity
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We give 5% of our profit to various charity groups as our commintment to the community.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    <div className="col-12 col-md-6 col-lg-4 col-xl-3">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/900x600/?money"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Currency
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Helping out UK Government in mintin new coins and printing new currency notes.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    
    </div>

    </div>


    </div>
  );
}