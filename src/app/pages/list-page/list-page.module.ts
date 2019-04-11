import { NgModule } from '@angular/core';
import { ListPageComponent } from './list-page.component';
import { CommonModule } from '@angular/common';
import { ListPageService } from './list-page.service';
import { ItemDetailsComponent } from './item-details/item-details.component';

@NgModule({
    declarations: [
        ListPageComponent,
        ItemDetailsComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ListPageService
    ]
})
export class ListPageModule {}
