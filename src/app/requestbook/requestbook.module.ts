import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestbookPage } from './requestbook.page';
import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { MatInputModule } from '@angular/material/input';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { FileuploadComponent } from '../components/fileupload/fileupload.component';
import { FileSizePipe } from '../pipes/file-size.pipe';
import { DropZoneDirective } from '../directives/dropZone/drop-zone.directive';

const routes: Routes = [
  {
    path: '',
    component: RequestbookPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MenuTitleComponentModule,
    ReactiveFormsModule,
    MatFileUploadModule
  ],
  declarations: [RequestbookPage, DropZoneDirective, FileuploadComponent, FileSizePipe],
  providers: [FileChooser],
  entryComponents: [FileuploadComponent]
})
export class RequestbookPageModule {}
