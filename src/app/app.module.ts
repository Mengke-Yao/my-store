import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './components';
import { ImageSliderComponent } from './components'

@NgModule({
  //声明的数组说明 引入的组件 只能引入当前的组件
  declarations: [
    AppComponent,
    ScrollableTabComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
