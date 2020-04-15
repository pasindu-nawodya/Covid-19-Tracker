import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=> {

    if(!confirmed){
        return (<center>
                    
                    <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <h5> <b><br />Wait ! Data Is Loading ... </b></h5>
                     </center>)
    }

    return (
        <div className="d-flex justify-content-around">
        <div  className="card-deck">

            <div className="ml-5 mr-5 mb-5">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className="infected">
                    <CardContent className="text-center">
                        <Typography color="textSecondary" gutterBottom ><b>INFECTED</b></Typography>
                        <Typography variant="body2">(Number Of Active Cases)<p><br /></p></Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0} end={confirmed.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>                       
                    </CardContent>
                </Grid>
            </Grid>   
            </div>
            
            <div className="ml-5 mr-5 mb-5">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className="recover">
                    <CardContent className="text-center">
                        <Typography color="textSecondary" gutterBottom><b>RECOVERED</b></Typography>
                        <Typography variant="body2">(Number Of Recoveries)<p><br /></p></Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0} end={recovered.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>                       
                    </CardContent>
                </Grid>
            </Grid>   
            </div>
            
            <div className="ml-5 mr-5">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className="death">
                    <CardContent className="text-center">
                        <Typography color="textSecondary" gutterBottom ><b>DEATHS</b></Typography>
                        <Typography variant="body2">(Number Of Confirm Death)<p><br /></p></Typography>
                        <Typography variant="h5">
                            <CountUp 
                            start={0} end={deaths.value} duration={2.5} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography> 
                    </CardContent>
                </Grid>
            </Grid>   
            </div>

        </div>
        </div>
    )
}

export default Cards;