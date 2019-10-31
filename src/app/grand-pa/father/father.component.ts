import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  sonName : string = '';
  sonForm: FormGroup;



  

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
  
    this.sonForm = this.formBuilder.group({

      nom: [''],
      prenom: [''],
      mail: ['']

    });

    this.dataService.sonFormEvent.subscribe(
      data => {
         this.sonForm = data;
         console.log("data in Father Component==> ", data);
        }
     
  )
  }

  onShareWithDataService (){

    // Emit event to the Data Service 
    this.dataService.sonFormEvent.emit(this.sonForm);
  }

  
  
  

  
}
