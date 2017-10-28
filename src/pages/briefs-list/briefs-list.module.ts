import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BriefsListPage } from './briefs-list';

@NgModule({
  declarations: [
    BriefsListPage,
  ],
  imports: [
    IonicPageModule.forChild(BriefsListPage),
  ],
})
export class BriefsListPageModule {}
