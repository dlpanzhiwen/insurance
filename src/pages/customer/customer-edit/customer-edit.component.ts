import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { customerService } from '../customer.service'

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class customerEditComponent implements OnInit,OnDestroy {
  customerId:string="";
  customer:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getUserSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private customerServ:customerService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    if(this.isNew){
      this.customerServ.users.push(this.customer)
    }
    this.location.back();
  }
  ngOnInit() {
    this.getUserSubscribe = this.route.params.subscribe(params=>{
      this.getcustomer(params['sid']).then(customer=>{
      console.log(customer)
      this.customerId = customer.id;
      this.customer = customer
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getUserSubscribe.unsubscribe();
  }

  getcustomer(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let customer = {name:""}
        this.isNew = true;
        resolve(customer)
      }
      let customer = this.customerServ.users.find(item=>item.id == id)
      if(customer){
        resolve(customer)
      }else{
        reject("customer not found")
      }
    })
    return p
}

}
