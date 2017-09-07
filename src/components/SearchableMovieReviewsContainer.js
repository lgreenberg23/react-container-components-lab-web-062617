// Code SearchableMovieReviewsContainer Here

import React from 'react' 
import MovieReviews from './MovieReviews'



class SearchableMovieReviewsContainer extends React.Component{
  constructor() {
    super();
 
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  	componentDidMount = () => {
		const NYT_API_KEY = 'ebbc7c98eec14c56b308a718e9eda52d';//'f98593a095b44546bf4073744b540da0';
		const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`;
		
		fetch(URL).then(res => res.json())
		.then(json => this.setState({reviews: json.results}))
		// .then(json => console.log(json))
	}

  render() {
    return <div className='searchable-movie-reviews'>
		<MovieReviews reviews={this.state.reviews} />
		</div>
  }

}

export default SearchableMovieReviewsContainer