import { NgModule } from "@angular/core";
import { HeaderComponent } from './Home/header/header.component';
import { BodyComponent } from './Home/body/body.component';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        HeaderComponent,
        BodyComponent,
        FilterPipe,
    ],
    imports:[BrowserModule, 
        FormsModule, 
       ],

    exports:[
        HeaderComponent,
        BodyComponent,
 
    ],

})

export class HomeModule{}