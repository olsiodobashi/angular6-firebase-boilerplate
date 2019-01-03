import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router, Params } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    ageValue = 0;
    searchValue = '';
    items: Array<any>;

    constructor(public firebaseService: FirebaseService, private router: Router) {}

    public ngOnInit(): void {
        this.getData();
    }

    public getData(): void {
        this.firebaseService.getArticles().subscribe(result => {
            this.items = result;
        });
    }

    public viewDetails(item): void {
        this.router.navigate(['/details/' + item.id]);
    }
}
