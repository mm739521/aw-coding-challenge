using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CodingChallenge.DataAccess;
using CodingChallenge.DataAccess.Interfaces;
using CodingChallenge.DataAccess.Models;

namespace CodingChallenge.UI.Controllers
{
	[RoutePrefix( "api/Movie" )]
	public class MovieController : ApiController
	{

		// GET api/Movie/GetMoviesByTitle?title=test
		[Route( "GetMoviesByTitle" )]
		[HttpGet]
		public IEnumerable<Movie> GetMoviesByTitle( string title )
		{
			var service = new LibraryService();

			var movies = service.GetMoviesByTitle( title );

			return movies;
		}

		// GET api/Movie/GetMoviesByRating?isAbove=true&movieRating=7
		[Route( "GetMoviesByRating" )]
		[HttpGet]
		public IEnumerable<Movie> GetMoviesByRating( bool isAbove, int movieRating )
		{
			var service = new LibraryService();

			var movies = service.GetMoviesByRating( isAbove, movieRating );

			return movies;
		}

		// GET api/Movie/GetMoviesBetweenDates?startYear=1990&mendYear=2000
		[Route( "GetMoviesBetweenDates" )]
		[HttpGet]
		public IEnumerable<Movie> GetMoviesBetweenDates( int startYear, int endYear )
		{
			var service = new LibraryService();

			var movies = service.GetMoviesBetweenDates( startYear, endYear );

			return movies;
		}

		// GET api/Movie/GetMoviesByFranchise?franchise=star
		[Route( "GetMoviesByFranchise" )]
		[HttpGet]
		public IEnumerable<Movie> GetMoviesByFranchise( string franchise )
		{
			var service = new LibraryService();

			var movies = service.GetMoviesByFranchise( franchise );

			return movies;
		}
	}
}