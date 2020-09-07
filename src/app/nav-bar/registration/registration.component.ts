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
  form:any; //variable form with any type
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
  
  ngOnInit(): void{}
  submit()                                //on submit
  {
    let data:any = this.form.value;     // form value is stored in variable data
    this.router.navigate(['./details'],{
      queryParams:{data:JSON.stringify(data)}     // this means we are navigating to other page with passing the parameters
    })                    //JSON stringify method converts JavaScript object or value to a JSON string.
  }



  //Firstname = fname;
  // details = new object()
  // details.Name = fname;
  // details.Email = email;
  //
  //submitted : boolean = false;
  //
  // var  onSubmit() => {
  //      this.submitted = true;
  //    }
  // }

}
