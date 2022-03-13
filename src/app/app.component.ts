import { Component } from '@angular/core';
import { TopMenu } from './components';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabMenus: TopMenu[  ] = [
    {
      title:'女装'
    },
    {
      title:'女鞋'
    },
    {
      title:'裙子'
    },
    {
      title: '护肤品'
    },
    {
      title:'水果'
    },
    {
      title: '烘焙'
    },
    {
      title:'健身'
    },
    {
      title: '减脂'
    },
    {
      title: '旅游'
    },
    {
      title: '养生'
    },
  ];
  destory: Boolean = false;
  bgcolor = "pink";
  handleTabSelected(item:TopMenu){
    console.log(item)
    
  }
  ngOnInit(): void{
    console.log('appInit')
  }
  ngAfterViewInit(){
    console.log('app组件试图初始化完成')
    // setTimeout(() => {
    //   this.destory=true
    // }, 2000);
  }
}
