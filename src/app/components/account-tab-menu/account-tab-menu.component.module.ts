import { AccountTabMenuComponent } from './account-tab-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [AccountTabMenuComponent],
  exports: [AccountTabMenuComponent]
})
export class AccountTabMenuComponentModule {}
