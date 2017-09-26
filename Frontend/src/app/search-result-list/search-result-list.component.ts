import { SearchResult, SearchService } from '../search.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css'],
  providers: [SearchService]
})
export class SearchResultListComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource: SearchResult;

  constructor(private service: SearchService) {

  }

  ngOnInit() {
    this.dataSource = this.service.Query();
  }
}
