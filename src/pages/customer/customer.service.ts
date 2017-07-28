import { Injectable } from "@angular/core";

@Injectable()
export class customerService{
    isLogined:boolean = false;
    users: Array < any > = [{
      'id': 1,
     'name':'chenlu',
     'sex':'M',
     'startDate':'170801',
     'endDate':'180801',
     'carNo': '辽BXXXXX',
     'fee': 3000
    },
    {
     'id': 2,
     'name':'f58xxy',
     'sex':'F',
     'startDate':'170801',
     'endDate':'180801',
     'carNo': '辽BXXXXX',
     'fee': 3000
    },
    {
     'id': 3,
     'name':'文化利',
     'sex':'M',
     'startDate':'170801',
     'endDate':'180801',
     'carNo': '辽BXXXXX',
     'fee': 3000
    }
  ];

    constructor(){

    }

    getUsers(){
        return this.users;
    }

}

