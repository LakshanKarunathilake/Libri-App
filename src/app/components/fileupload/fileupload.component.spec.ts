import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileuploadComponent } from './fileupload.component';
import { FileSizePipe } from 'src/app/pipes/file-size.pipe';
import { FileUploadService } from 'src/app/services/file-upload/file-upload.service';
import { FileUploadServiceStub } from 'src/app/Stubs';
import { Observable, of } from 'rxjs';

describe('FileuploadComponent', () => {
  let component: FileuploadComponent;
  let fixture: ComponentFixture<FileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: FileUploadService, useClass: FileUploadServiceStub }],
      declarations: [FileuploadComponent, FileSizePipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create file upload component', () => {
    expect(component).toBeTruthy();
  });

  it('should set Downloadble url when provided', () => {
    const url = of('Test url');

    component.setDownloadbaleURL(url);

    expect(component.downloadURL).toBe(url);
  });
});
