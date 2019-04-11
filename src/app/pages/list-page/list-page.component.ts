import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/shared/interfaces/item-details.interface';
import { ListPageService } from './list-page.service';
import { interval } from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
    itemsList: IItem[];
    itemDetails: IItem;

    constructor(private listPageService: ListPageService) {}

    ngOnInit(): void {
        this.getItemsData();
    }

    getItemsData(): void {
        interval(10000)
        .pipe(
            startWith(0),
            switchMap(() => this.listPageService.getItemsList())
        )
        .subscribe(data => {
            this.itemsList = data.hits;
        });
    }

    showItemDetails(data): void {
        this.itemDetails = data;
    }

    removeItemDetails(): void {
        this.itemDetails = null;
    }
}
