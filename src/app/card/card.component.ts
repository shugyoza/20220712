import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../model/person.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() person!: Person;
    expanded: boolean = false;

    toggleExpand(): void {
        this.expanded = !this.expanded;
    }

    ngOnInit() {

    }
}
