import { Component, Output, EventEmitter } from '@angular/core';
import { Git } from 'src/app/interfaces/git';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchQuery: string = '';
  @Output() searchQueryChange = new EventEmitter<string>();

  onSearchChange(){
    this.searchQueryChange.emit(this.searchQuery);
  }
}
