import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router , ActivatedRoute} from '@angular/router';// <== add the imports!
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form:any;
  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.form = new FormGroup(
      {
      name:new FormControl("", Validators.required ),
      email:new FormControl("",Validators.required),
      mobileno:new FormControl("",Validators.required),
      age:new FormControl("",Validators.required),
      //payment:new FormControl("", Validators.required)
      }
    )
  }
  //Firstname = fname;
  // details = new object()
  // details.Name = fname;
  // details.Email = email;
  //
  //submitted : boolean = false;
  ngOnInit(): void{}
  submit()
  {
    let data:any = this.form.value;
    this.router.navigate(['./details'],{
      queryParams:{data:JSON.stringify(data)}
    })
  }
  //
  // var  onSubmit() => {
  //      this.submitted = true;
  //    }
  // }

}
