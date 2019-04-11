import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from 'src/app/shared/interfaces/item-details.interface';

@Component({
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
    constructor() {}

    @Input() item: IItem;
    @Output() modalClose = new EventEmitter();

    closeModal(): void {
        this.modalClose.emit();
    }
}
