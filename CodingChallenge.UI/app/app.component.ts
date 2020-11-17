import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
    name = 'Angular';

    columnDefs = [
        { field: 'ID', sortable:true },
        { field: 'Title', sortable: true, filter:true },
        { field: 'Year', sortable: true },
        { field: 'Rating', sortable: true },
        { Franchise: 'Franchise', sortable: true },
    ];

    //TODO: I don't like this, call endpoint to populate.
   /* rowData = [
        {
            ID: "1",
            Title: "Raiders of the Lost Ark",
            Year: "1981",
            Rating: "8.6",
            Franchise: "Indiana Jones"
        },
        {
            ID: "2",
            Title: "Indiana Jones and the Temple of Doom",
            Year: "1984",
            Rating: "7.6",
            Franchise: "Indiana Jones"
        },
        {
            ID: "3",
            Title: "Indiana Jones and the Last Crusade",
            Year: "1989",
            Rating: "8.3",
            Franchise: "Indiana Jones"
        },
        {
            ID: "4",
            Title: "The Terminator",
            Year: "1984",
            Rating: "8.1",
            Franchise: "Terminator"
        },
        {
            ID: "5",
            Title: "Terminator 2: Judgement Day",
            Year: "1991",
            Rating: "8.5",
            Franchise: "Terminator"
        },
        {
            ID: "6",
            Title: "Jaws",
            Year: "1975",
            Rating: "8.1",
            Franchise: "Jaws"
        },
        {
            ID: "7",
            Title: "Jaws 2",
            Year: "1978",
            Rating: "5.7",
            Franchise: "Jaws"
        },
        {
            ID: "8",
            Title: "Jaws: The Revenge",
            Year: "1987",
            Rating: "2.8",
            Franchise: "Jaws"
        },
        {
            ID: "9",
            Title: "Ghostbusters",
            Year: "1984",
            Rating: "7.8",
            Franchise: "Ghostbusters"
        },
        {
            ID: "10",
            Title: "Ghostbusters II",
            Year: "1989",
            Rating: "6.5",
            Franchise: "Ghostbusters"
        },
        {
            ID: "11",
            Title: "Labyrinth",
            Year: "1986",
            Rating: "7.4",
            Franchise: null
        },
        {
            ID: "12",
            Title: "Top Gun",
            Year: "1986",
            Rating: "6.8",
            Franchise: null
        },
        {
            ID: "13",
            Title: "Beetlejuice",
            Year: "1988",
            Rating: "7.4",
            Franchise: null
        },
        {
            ID: "14",
            Title: "The Karate Kid",
            Year: "1984",
            Rating: "7.2",
            Franchise: "The Karate Kid"
        },
        {
            ID: "15",
            Title: "The Karate Kid, Part II",
            Year: "1986",
            Rating: "5.8",
            Franchise: "The Karate Kid"
        },
        {
            ID: "16",
            Title: "Bill & Ted's Excellent Adventure",
            Year: "1989",
            Rating: "6.9",
            Franchise: "Bill & Ted"
        },
        {
            ID: "17",
            Title: "The Princess Bride",
            Year: "1987",
            Rating: "8.2",
            Franchise: null
        },
        {
            ID: "18",
            Title: "Ferris Beuller's Day Off",
            Year: "1986",
            Rating: "7.9",
            Franchise: null
        },
        {
            ID: "19",
            Title: "The NeverEnding Story",
            Year: "1984",
            Rating: "7.4",
            Franchise: "The NeverEnding Story"
        },
        {
            ID: "20",
            Title: "The NeverEnding Story",
            Year: "1984",
            Rating: "7.4",
            Franchise: "The NeverEnding Story"
        },
        {
            ID: "21",
            Title: "Star Wars Episode IV: A New Hope",
            Year: "1977",
            Rating: "8.7",
            Franchise: "Star Wars"
        },
        {
            ID: "22",
            Title: "Star Wars Episode V: The Empire Strikes Back",
            Year: "1980",
            Rating: "8.8",
            Franchise: "Star Wars"
        },
        {
            ID: "23",
            Title: "Star Wars Episode VI: Return of the Jedi",
            Year: "1983",
            Rating: "8.4",
            Franchise: "Star Wars"
        },
        {
            ID: "24",
            Title: "Back to the Future",
            Year: "1985",
            Rating: "8.5",
            Franchise: "Back to the Future"
        },
        {
            ID: "25",
            Title: "Back to the Future Part II",
            Year: "1989",
            Rating: "7.8",
            Franchise: "Back to the Future"
        },
        {
            ID: "26",
            Title: "A Nightmare on Elm Street",
            Year: "1984",
            Rating: "7.5",
            Franchise: "A Nightmare on Elm Street"
        },
        {
            ID: "27",
            Title: "A Nightmare on Elm Street 2: Freddy's Revenge",
            Year: "1985",
            Rating: "5.3",
            Franchise: "A Nightmare on Elm Street"
        },
        {
            ID: "28",
            Title: "An American Werewolf in London",
            Year: "1981",
            Rating: "7.6",
            Franchise: null
        },
        {
            ID: "29",
            Title: "Jurassic Park",
            Year: "1993",
            Rating: "8.0",
            Franchise: "Jurassic Park"
        }]*/

    rowData: any;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.rowData = this.http.get('/api/Movie/GetMoviesByTitle?title=');
    }
}
