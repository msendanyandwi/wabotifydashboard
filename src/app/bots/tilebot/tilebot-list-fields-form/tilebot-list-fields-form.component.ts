import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'appdashboard-tilebot-list-fields-form',
  templateUrl: './tilebot-list-fields-form.component.html',
  styleUrls: ['./tilebot-list-fields-form.component.scss']
})
export class TilebotListFieldsFormComponent implements OnInit {
  @Output() eventEditField = new EventEmitter();
  @Output() openDeleteFieldModal = new EventEmitter();
  @Input() fields: [any];

  // modal
  displayMODAL = false;
  translateMap: any;
  selectedObjectId: number;

  // add edit form
  selectedField: any;
  displayAddEditForm = false;

  
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }

  logValue() {
    // console.log(this.fields);
  }

  // EVENTS //
  /** Event modal open delete field */
  deleteFieldModal(index:number) {
    // console.log('deleteFieldModal:::', index);
    // this.displayMODAL = true;
    // this.translateMap["nameField"] =this.fields[index].name; 
    // this.selectedObjectId = index;
    this.openDeleteFieldModal.emit(index);
  }

  /** Event edit field */
  editField(index:number){
    // this.selectedField = this.fields[i];
    // this.displayAddEditForm = true;
    this.eventEditField.emit(index);
  }

}
