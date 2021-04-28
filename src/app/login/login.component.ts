import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your Perfect banking partner";
  accountNumber = "Account Number Please"
  accnum="Account Number Please";
  pswd="";
   account_details: any = {
    1000: { name: "ajay", accno: 1000, password: "testone", amount: 5000 },
    1001: { name: "vijay", accno: 1001, password: "testtwo", amount: 3000 },
    1002: { name: "ram", accno: 1002, password: "testthree", amount: 7000 },
    1003: { name: "ravi", accno: 1003, password: "testfour", amount: 10000 },
}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  accnoChange(event:any){
    this.accnum = event.target.value;
    console.log(this.accnum);
  }

  pwdChange(event:any){
    this.pswd = event.target.value;
    console.log(this.pswd);
  }

  login(){
       var accno = this.accnum;
        var pwd = this.pswd; ;
        let details = this.account_details;
        if (accno in details) {
            if (pwd == details[accno]["password"]) {
              alert("Login Success");
              this.router.navigateByUrl("dashboard");
            }
            else {
              alert("Incorrect Password");
            }
        }
        else {
          alert("Invalid Account Number");
        }
     }
}
