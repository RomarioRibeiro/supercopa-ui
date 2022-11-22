import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { PrimengModule } from './primeng.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import {AccordionModule} from 'primeng/accordion';
import { MessageService } from 'primeng/api';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CopaCadastroComponent } from './copa/copa-cadastro/copa-cadastro.component';



import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CopaService } from './copa/copa.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    AccordionModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    PrimengModule,
    HttpClientModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    ToastModule
  ],
  providers: [CopaService,
    MessageService,
    AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
