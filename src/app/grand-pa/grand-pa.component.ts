import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grand-pa',
  templateUrl: './grand-pa.component.html',
  styleUrls: ['./grand-pa.component.css']
})
export class GrandPaComponent implements OnInit {

  myName: string = 'Ali';
  sonForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.sonForm = this.formBuilder.group({

      nom: [''],
      prenom: [''],
      mail: ['']

    });

    this.dataService.sonFormEvent.subscribe(
      data => {
         this.sonForm = data;
         console.log("data in GrandPa Component==> ", data);
        }
     
  )
  }


}
