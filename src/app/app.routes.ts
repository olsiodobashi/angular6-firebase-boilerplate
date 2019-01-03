import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditArticleResolver } from './edit-article/edit-article.resolver';

export const rootRouterConfig: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'new-article', component: NewArticleComponent },
    { path: 'details/:id', component: EditArticleComponent, resolve: { data: EditArticleResolver } }
];
