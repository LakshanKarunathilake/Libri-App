import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileuploadComponent } from './fileupload.component';
import { FileUploadService } from 'src/app/services/file-upload/file-upload.service';

describe('FileuploadComponent', () => {
  let component: FileuploadComponent;
  let fixture: ComponentFixture<FileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileuploadComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [FileUploadService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
