import { ElementRef, Component, Input, OnInit, Output , EventEmitter, SimpleChanges, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild} from '@angular/core';

export interface TopMenu {
  title: string,
  link?: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})
/**
 * 接口是可选的, 也就是说只要有类似, ngOnInit 这样的方法存在
 * 生命周期的钩子函数还是正常执行
 * 但建议实现接口 好处是一个是不会由于误删某个钩子函数
 * 另一个是对组件涉及到哪些生命周期一目了然
 */



//implements 是为了规范与约定, 应该实现OnInit这样一个接口
export class ScrollableTabComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'pinduoduo';
  selectedIndex = -1;
  @Input() backgroundColor: string = "black"
  @Input() menus: TopMenu[]=[] //@Input父组件传过来的值
  @Output() handleClick= new EventEmitter()  // @Output 传到父组件的值 信号发射器
  // @ViewChild('helloDiv') helloDivRef: ElementRef  
  /**
   * @ViewChild 是一个选择器, 用来查找要引用的DOM元素或者组件 把"helloDiv"引入过来, 包装为helloDivRef, helloDivDef的native指向#helloDiv
   * ElementRef 是DOM元素的一个包装类 
   * 因为DOM元素不是Angular中的类, 所以需要一个包装类以便在Angular中使用和标识其类型
   */
  
  
  //
//构造函数永远首先被调用

  constructor() { 
    console.log('constructor')
  }


  // 在组件的 @Input 属性发生变化时候调用 
  // @param changes 索引对象 key是属性名字 value是simpleChanges 
  //输入属性变化时被调用 只有输入属性变化时候吗 是只有@input吗
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges---@input属性改变')
    /**
     * backgroundColor: SimpleChange
          CurrentValue: "pink"
          firstChange: true
          PreviousValue: undefined
          [Prototype]]: Object
          menus: SimpleChange
          CurrentValue: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
          firstChange: true
          previousValue: undefined
     */
  }


/**
 * 组件初始化完成 可以安全使用组件的属性和方法 
 */
  ngOnInit(): void {
    console.log('ngOnInit---初始化')
    // console.log(this.helloDivRef)
    // this.menus=[]
  }

  /**
   * angular中认为不应该在同一个组件中定义ngOnChanges和ngDoCheck这两个钩子
   * 他们两个想要达到的目的是很类似的
   * angular框架帮助做脏值检测
   * 理解成  为什么属性变化会体现到视图中, 因为angular组件会对所有组件的状态进行维护,进行一个检测
   * 一旦有值发生变化,会去检测
   * ngOnChanges 是监听自己组件本身的属性变化 自己主动关心的
   * ngDoCheck是angular框架在做一个大的组件检查的时候, 到达组件的时候会发生docheck事件 框架帮你做的
   */
   ngDoCheck(): void {
    console.log('ngDoCheck---脏值检测')
    // debugger
  }
  /**
   * 组件内容初始化 当内容投影ng-content完成时调用 类比created
   */
  ngAfterContentInit(): void{
    console.log('ngAfterContentInit---组件内容初始化')
    
  }

 
  
  /**
   * 插槽里边内容的脏值检测
   */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked---插槽脏值检测')
  }

  /**
   * 组件的视图初始化
   * 一个组件和它的子组件  类比 this.$nextTick
   */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit---组件的试图(包含子组件)初始化完成')
  }

  ngAfterViewChecked(): void{
    console.log('ngAfterViewChecked---组件视图脏值检测')
  }

  /**
   * 一般都是用来清理缓存  清除掉setTimeIntereval
   */
  ngOnDestroy(): void{
    console.log('ngOnDestroy---组件销毁')
  }
  clickEvent(i:number){
    this.selectedIndex = i
    this.handleClick.emit(this.menus[i]) //执行信号发射事件
  }
}
