import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';

import { ArticleModel } from '../new-article/article.model';

@Component({
    selector: 'app-edit-article',
    templateUrl: './edit-article.component.html',
    styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
    public articleId: string;
    public article: ArticleModel|any;

    constructor(
        public firebaseService: FirebaseService,
        private firestore: AngularFirestore,
        private route: ActivatedRoute
    ) {}

    public ngOnInit(): void {
        this.route.data.subscribe(params => {
            this.firestore.collection('items').doc(params.data.id).get().subscribe(doc => {
                if (doc.exists) {
                    this.article = doc.data();
                    this.articleId = params.data.id;
                }
            });
        });
    }
}
