import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPage } from './info.page';
import { MenuTitleComponentModule } from './../../components/menu-title/menu-title.module';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, RouterOutlet, UrlSerializer } from '@angular/router';

import { IonicModule, IonRouterOutlet } from '@ionic/angular';

describe('InfoPage', () => {
  let component: InfoPage;
  let fixture: ComponentFixture<InfoPage>;

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
      providers: [{ provide: Location }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
