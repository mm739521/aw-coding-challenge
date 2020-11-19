import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    name = 'Angular';

    columnDefs = [
        { field: 'ID', sortable:true },
        { field: 'Title', sortable: true },
        { field: 'Year', sortable: true },
        { field: 'Rating', sortable: true },
        { field: 'Franchise', sortable: true },
    ];

    rowData: any;

    constructor(private http: HttpClient) {
        this.search = _.debounce(this.search, 1000)
    }

    search(searchText) {
        this.rowData = this.http.get('/api/Movie/GetMoviesByTitle?title=' + searchText)
    }

    ngOnInit() {
        this.rowData = this.http.get('/api/Movie/GetMoviesByTitle?title=');
    }
}
