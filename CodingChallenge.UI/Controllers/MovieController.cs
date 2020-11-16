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

		// GET api/<controller>/title
		[Route( "GetMoviesByTitle" )]
		[HttpGet]
		public IEnumerable<Movie> GetMoviesByTitle( string title )
		{
			var service = new LibraryService();

			var movies = service.GetMoviesByTitle( title );

			return movies;
		}

		// GET api/<controller>/7
		[Route( "GetMoviesByRating" )]
		[HttpGet]
		public IEnumerable<Movie> GetMoviesByRating( bool isAbove, int movieRating )
		{
			var service = new LibraryService();

			var movies = service.GetMoviesByRating( isAbove, movieRating );

			return movies;
		}

		// GET api/<controller>/7.9
		[Route( "GetMoviesBetweenDates" )]
		[HttpGet]
		public IEnumerable<Movie> GetMoviesBetweenDates( int startYear, int endYear )
		{
			var service = new LibraryService();

			var movies = service.GetMoviesBetweenDates( startYear, endYear );

			return movies;
		}

		// GET api/<controller>/7.9
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