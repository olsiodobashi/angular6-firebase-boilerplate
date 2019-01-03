import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { from } from 'rxjs/internal/observable/from';
import { ArticleModel } from '../new-article/article.model';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    constructor(public db: AngularFirestore) {}

    public getArticles(): Observable<any> {
        return this.db.collection('items').snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as any;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    public getArticle(articleId: string): Observable<any> {
        return from(this.db.collection('items').doc(articleId).ref.get());
    }

    public createArticle(article: ArticleModel): Promise<any> {
        return this.db.collection('items').add(article);
    }

    public updateArticle(articleId: string, newArticle: ArticleModel): Promise<void> {
        const articleRef = this.db.collection('items').doc(articleId);
        return articleRef.update(newArticle);
    }

    public takeArticleOffline(articleId: string): Promise<any> {
        const articleRef = this.db.collection('items').doc(articleId);
        return articleRef.update({
            'Offline': 1
        });
    }
}
