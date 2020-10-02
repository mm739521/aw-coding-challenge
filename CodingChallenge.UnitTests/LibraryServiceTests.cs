using System.Collections.Generic;
using System.Linq;
using CodingChallenge.DataAccess;
using CodingChallenge.DataAccess.Interfaces;
using CodingChallenge.DataAccess.Models;
using NUnit.Framework;

namespace CodingChallenge.UnitTests
{
    [TestFixture]
    public class LibraryServiceTests
    {
        public ILibraryService LibraryService { get; private set; }

        [OneTimeSetUp]
        public void SetUp()
        {
            LibraryService = new LibraryService();
        }

        [Test]
        public void MovieCountTest()
        {
            var count = LibraryService.SearchMoviesCount("");
            Assert.AreEqual(29, count);
        }

        [Test]
        public void SearchMoviesTest()
        {
            var movies = LibraryService.SearchMovies("Jaws");
            Assert.AreEqual(3, movies.Count());
        }

        [Test]
        public void SortByTitleAscendingTest()
        {
            var sorted = LibraryService.SearchMovies("", null, null, "Title", SortDirection.Ascending);
            Assert.AreEqual(28, sorted.First().ID);
        }

        [Test]
        public void SortByYearAscendingTest()
        {
            var sorted = LibraryService.SearchMovies("", null, null, "Year", SortDirection.Ascending);
            Assert.AreEqual(6, sorted.First().ID);
        }

        [Test]
        public void SortByYearDescendingTest()
        {
            var sorted = LibraryService.SearchMovies("", null, null, "Year", SortDirection.Descending);
            Assert.AreEqual(29, sorted.First().ID);
        }
    }
}
