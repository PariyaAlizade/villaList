import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Villa , ResData } from "./villa-list.model";
import { map } from "rxjs/operators";

@Injectable({providedIn : 'root'})

export class VillaListService {
    constructor(private http: HttpClient){}

     getVillalList(villaData: Villa){
        
        return this.http.post('https://www.mrrapid.ir/api/villa/getVillaList',villaData)
        .pipe(map(response => {
            const res : ResData = {};
            for (const key in response) {
                    res[key] = response[key];
            }
            return res.datum;
        }))
    }

    setVillaPicturesArray(pictures : string){
        const pictureArr = pictures.split(",");
        return pictureArr;
    }


}

