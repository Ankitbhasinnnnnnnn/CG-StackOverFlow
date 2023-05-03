import { Component, OnInit} from '@angular/core';
import LANGUAGE from 'src/tags';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit{

  searchTerm: string= "";
   languageDetails:any = LANGUAGE.languages;
    filteredTags: any = this.languageDetails;
   filterTags() {
    console.log(this.filteredTags);
    this.filteredTags = this.languageDetails.filter((tag: any) => tag.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  ngOnInit() {
    this.filterTags();
  }
  
  ngOnChanges() {
    this.filterTags();
    console.log(this.filteredTags);
    
  }
  
}
