import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalBootsrapComponent } from './components/modal-bootsrap/modal-bootsrap.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SpinerComponent } from './components/spiner/spiner.component';
import { CharactersComponent } from './pages/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    PaginatorComponent,
    SpinerComponent,
    CharactersComponent,
    HeaderComponent,
    ModalBootsrapComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
