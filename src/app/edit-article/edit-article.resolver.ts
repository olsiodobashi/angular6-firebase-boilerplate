import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class EditArticleResolver implements Resolve<any> {
    public articleId: string;

    constructor(
        public firebaseService: FirebaseService
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        return new Promise((resolve, reject) => {
            this.articleId = route.paramMap.get('id');

            this.firebaseService.getArticle(this.articleId).subscribe(data => {
                resolve(data);
            });
        });
    }
}
