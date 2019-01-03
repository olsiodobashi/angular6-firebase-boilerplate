import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from '../new-article/article.model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import * as Quill from 'quill';

@Component({
    selector: 'app-article-form',
    templateUrl: './article-form.component.html',
    styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
    @Input() public type: 'create'|'edit';
    @Input() public article?: ArticleModel|any;
    @Input() public articleId?: string;

    constructor(
        private router: Router,
        public firebaseService: FirebaseService
    ) {}

    public ngOnInit(): void {
        if (this.type === 'create') {
            this.article = {
                Body: '',
                Category: '',
                Cover: '',
                Title: ''
            };
        }
    }

    public reset(): void {
        this.article = {};
    }

    public cancel(): void {
        this.router.navigate(['/home']);
    }

    public onSubmit(): void {
        if (this.type === 'create') {
            this.firebaseService.createArticle(this.article).then(res => {
                this.reset();
                this.router.navigate(['/home']);
            });
        } else {
            this.firebaseService.updateArticle(this.articleId, this.article).then(res => {
                this.router.navigate(['/home']);
            });
        }
    }

    public unpublishArticle(): void {
        this.firebaseService.takeArticleOffline(this.articleId).then(res => {
            console.log(res);
        });
    }
}
