import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule ({
  imports: [
    MatSlideToggleModule, 
  ]
})
class AppModule {}

@NgModule({
  declarations: [],
  imports: [ ],
  exports: [MatSlideToggleModule, MatSortModule, MatButtonModule, MatCardModule, 
    MatToolbarModule, MatIconModule, MatMenuModule, MatTabsModule, MatFormFieldModule,
    MatInputModule],
})
export class MaterialModule {}
