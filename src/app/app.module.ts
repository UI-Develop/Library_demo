import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { MyLibModule } from 'my-lib';
//import { UserlistComponent} from '../'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MyLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
