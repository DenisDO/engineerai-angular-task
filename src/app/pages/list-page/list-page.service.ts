import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/shared/interfaces/response.interface';

@Injectable()
export class ListPageService {
    constructor(private http: HttpClient) {}

    getItemsList(): Observable<IResponse> {
        return this.http.get<IResponse>('https://hn.algolia.com/api/v1/search_by_date?tags=story');
    }
}
