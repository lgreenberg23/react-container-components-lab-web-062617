// Code MovieReviews Here
import React from 'react'


// class MovieReviews extends React.(props){

	// const MovieReview = ({ }) => {

	// }
 
	const MovieReviews = (props) => {
	  return (
	  <div className="review-list">
	    	<h2>Movie Reviews</h2>
	    	<ul>
	    {props.reviews.map((review, index) => <li className='review' key={index}> {review.headline}</li> )}
	    </ul>
	  </div>
	  )
	// };




}

	MovieReviews.defaultProps = {
  		reviews: []
	}

export default MovieReviews

// * Your `MovieReviews` component should be stateless and functional.
// * You are free to lay out each review as you like using the data 
// that the API returns, but make sure that the component outputs a 
// top-level element with the class `review-list` and that each review 
// is wrapped by an element with class `review`.



	      // <img src={img_url} />
	      // <h3>{title}</h3>
 
