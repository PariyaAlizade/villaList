import { Component, OnInit } from '@angular/core';
import { Villa } from './villa-list.model';
import { VillaListService } from './villa-list.service';

@Component({
  selector: 'app-villa-list',
  templateUrl: './villa-list.component.html',
  styleUrls: ['./villa-list.component.scss']
})
export class VillaListComponent implements OnInit {

  constructor(private villaListService: VillaListService) { }

  isFetching = false;
  loadedVilla : Villa[] = [] ;

  ngOnInit(): void {
    const queryData: Villa = {
      organizationID:17,
      cityID:202
    };
   
   this.villaListService.getVillalList(queryData).subscribe(
     villaList => { for (const key in villaList) {
       this.loadedVilla.push(villaList[key]);
     } 
    },error => console.log(error.message),
    () =>{ this.loadedVilla.forEach(element => {
      element.picturesArr = this.villaListService.setVillaPicturesArray(element.pictures);
    });
    }
    );



    

  }

}
