import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const Hero = ({foods}) => {

    const navigate = useNavigate();

    function reviews(foodId)
    {
        navigate(`/Reviews/${foodId}`);
    }

  return (
    <div className ='movie-carousel-container'>
      <Carousel>
        {
            foods?.map((e) =>{
                return(
                    <Paper key={e.imdbId}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${e.backdrops[0]})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={e.poster} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{e.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${e.trailerLink.substring(e.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(e.imdbId)} >Food Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero
