import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecurityCodePage } from './security-code';

@NgModule({
  declarations: [
    SecurityCodePage,
  ],
  imports: [
    IonicPageModule.forChild(SecurityCodePage),
  ],
})
export class SecurityCodePageModule {}
