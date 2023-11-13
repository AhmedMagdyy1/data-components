import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() createNewServer = new EventEmitter<{serverName:string,serverContent:string}>()
  @Output() bluePrintAdd = new EventEmitter<{serverName:string,serverContent:string}>()
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContent', { static: true }) serverContentInput!: ElementRef;

  onAddServer(serverInput:any){
    console.log(serverInput.value);
    console.log(this.serverContentInput?.nativeElement.value);
    
    this.createNewServer.emit({serverName:this.newServerName,serverContent:this.newServerContent})  
  }

  onAddBlueprint(serverInput:any){
    this.bluePrintAdd.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }
}
