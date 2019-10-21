import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPage } from './info.page';
import { MenuTitleComponentModule } from './../../components/menu-title/menu-title.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: InfoPage,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'about', loadChildren: '../about/about.module#AboutPageModule' },
      { path: 'overview', loadChildren: '../overview/overview.module#OverviewPageModule' }
    ]
  }
];

describe('InfoPage', () => {
  let component: InfoPage;
  let fixture: ComponentFixture<InfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MenuTitleComponentModule
      ],
      declarations: [InfoPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
