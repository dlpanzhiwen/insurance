import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"index":19,
    "name":"刘雨飏",
      "sex":"Male",
      "name_en":"Ryane",
      "github":"ryanemax",
      "car_no":"辽BXXXXX",
      "fee":3000},
      {"index":7,
      "name":"小明",
      "sex":"Male",
      "name_en":"Ryane",
      "github":"ryanemax",
      "car_no":"辽BXXXXX",
      "fee":5400},
      {"index":14,
      "name":"Chunk",
      "sex":"Male",
      "name_en":"Chunk",
      "github":"chunk",
      "car_no":"辽BXXXXX",
      "fee":4300}
  ]
deleteLast(){
  this.users.pop()
}
getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
saveNewUser(){
  let newInd = this.getRandomInt(1, 100);
  this.users.push({
     "index":newInd,
      "name":"New User",
      "sex":"Male",
      "name_en":"new_user",
      "github":"dlpanzhiwen",
      "car_no":"辽BXXXXX",
      "fee":this.getRandomInt(3000, 10000)
  })
}

  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(function (a, b) {
      if (a.index > b.index) {
        return 1;
      }
      if (a.index < b.index) {
        return -1;
      }
      // a 必须等于 b
      return 0;
    });
  }

  sortByDesccending(){
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(function (a, b) {
      if (a.index > b.index) {
        return -1;
      }
      if (a.index < b.index) {
        return 1;
      }
      // a 必须等于 b
      return 0;
    });
  }
  sortByRadom(){
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.users.sort(function (a, b) {
      if (a.index * Math.random() > b.index * Math.random()) {
        return 1;
      }
      else {
        return -1;
     }
    });
  }
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
