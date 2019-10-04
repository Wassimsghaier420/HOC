import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';





const MovieCard = ({Y}) =>{
    return(
        
            <Card className='col-3 card1'>
                <div className=" List"> 
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={Y.rating}
            />
                <CardImg top height="300px" src={Y.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{Y.title}</CardTitle>
                </CardBody>
                </div>
            </Card>
        
    )
}
export default MovieCard;