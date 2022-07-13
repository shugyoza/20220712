import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../service/api.service';
import { Person } from '../model/person.model';
import { Address } from '../model/address.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = [];
  subscriptions$: any = [];
  expanded: boolean = false;

  constructor(private apiService: ApiService) { }

  displayUsers(): Subscription {
    const observer = {
      next: (people: Person[]) => {
        this.people = people;
        console.log(this.people);
      },
      error: (err: Error) => console.error(err),
      complete: () => true
    };
    const subscription$ = this.apiService.getUsers().subscribe(observer);
    this.subscriptions$.push(subscription$);
    return subscription$;
  }

  ngOnInit(): void {
    this.displayUsers();
  }

}
