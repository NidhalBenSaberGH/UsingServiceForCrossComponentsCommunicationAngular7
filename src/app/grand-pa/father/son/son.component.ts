import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {


  sonForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    this.sonForm = this.formBuilder.group({

    nom: [''],
      prenom: [''],
      mail: ['']

    });
  
  }

  onUpWithDataService (){

    // Emit event to the Data Service 
    this.dataService.sonFormEvent.emit(this.sonForm);
  }

  



}
