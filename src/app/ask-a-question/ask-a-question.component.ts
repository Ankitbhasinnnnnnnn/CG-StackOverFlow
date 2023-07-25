import { Component,OnInit,ViewChild } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-ask-a-question',
  templateUrl: './ask-a-question.component.html',
  styleUrls: ['./ask-a-question.component.scss'],
})
export class AskAQuestionComponent implements OnInit {
  @ViewChild('name') inputName:any; 
  @ViewChild('tags') tags:any; 
  ckeditorContent: any;
  isDisabled1: boolean = true;
  isDisabled2: boolean = false;
  isDisabled3: boolean = true;
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

ngOnInit() {

  
}
onKeypressEvent(event:any) {
  let title = this.inputName.nativeElement.value;
  title.length>0 ? this.isDisabled1 = false : this.isDisabled1 = true;

}
onKeypressEventFortags(event:any) {
  let title = this.tags.nativeElement.value;
  title.length>0 ? this.isDisabled3 = false : this.isDisabled3 = true;

}
}
