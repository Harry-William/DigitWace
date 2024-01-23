import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerComponent } from './components/worker/worker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { WorkerEditComponent } from './components/worker-edit/worker-edit.component';

const appRoutes: Routes = [
  {path: '', component: WorkerComponent},
  {path: 'edit/:id', component: WorkerEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WorkerComponent,
    NavbarComponent,
    WorkerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
