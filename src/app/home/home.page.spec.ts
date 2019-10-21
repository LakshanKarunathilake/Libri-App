import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { CollapsibleListComponent } from '../components/collapsible-list/collapsible-list.component';
import { CommonModule } from '@angular/common';
import { MenuTitleComponentModule } from './../components/menu-title/menu-title.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FcmService } from '../fcm.service';
import { SwalService } from '../services/swal/swal.service';
import { PlatformService } from '../services/platform/platform.service';
import { UserService } from '../services/user/user.service';
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  const routes: Routes = [
    {
      path: '',
      component: HomePage
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MenuTitleComponentModule,
        MatExpansionModule,
        MatCardModule
      ],
      declarations: [HomePage, CollapsibleListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [FcmService, SwalService, PlatformService, UserService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
