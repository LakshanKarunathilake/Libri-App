import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AnimatedTextComponent } from './animated-text.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [AnimatedTextComponent],
  exports: [AnimatedTextComponent]
})
export class AnimatedTextComponentModule {}
