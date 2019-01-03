import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-new-article',
    templateUrl: './new-article.component.html',
    styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {
    public formType: 'create'|'edit';

    constructor() {}

    public ngOnInit(): void {}
}
