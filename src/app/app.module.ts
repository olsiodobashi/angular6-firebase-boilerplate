import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditArticleResolver } from './edit-article/edit-article.resolver';
import { NewArticleComponent } from './new-article/new-article.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { QuillModule } from 'ngx-quill';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { ArticleFormComponent } from './article-form/article-form.component';

@NgModule({
    declarations: [
        AppComponent,
        EditArticleComponent,
        NewArticleComponent,
        HomeComponent,
        ArticleFormComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(rootRouterConfig, { useHash: false }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatSliderModule,
        MatDialogModule,
        QuillModule
    ],
    providers: [
        FirebaseService,
        EditArticleResolver
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
