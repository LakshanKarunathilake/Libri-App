import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbookPage } from './requestbook.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuTitleComponentModule } from '../components/menu-title/menu-title.module';
import { MatInputModule } from '@angular/material/input';
import { FileuploadComponent } from '../components/fileupload/fileupload.component';
import { FileSizePipe } from '../pipes/file-size.pipe';
import { DropZoneDirective } from '../directives/dropZone/drop-zone.directive';

const routes: Routes = [
  {
    path: '',
    component: RequestbookPage
  }
];
describe('RequestbookPage', () => {
  let component: RequestbookPage;
  let fixture: ComponentFixture<RequestbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatInputModule,
        MenuTitleComponentModule,
        ReactiveFormsModule
      ],
      declarations: [RequestbookPage, DropZoneDirective, FileuploadComponent, FileSizePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
