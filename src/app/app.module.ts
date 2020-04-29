import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { DataComponent } from "./components/data/data.component";
import { ConnectComponent } from "./components/connect/connect.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AgePipe } from "./pipes/age.pipe";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "Products", component: ProductsComponent },
  { path: "data", component: DataComponent },
  { path: "conect", component: ConnectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    DataComponent,
    ConnectComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
