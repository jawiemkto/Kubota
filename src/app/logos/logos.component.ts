import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.scss']
})
export class LogosComponent implements OnInit {

  logos = [
    {"title": "bla", "logoName": "iconfinder_deer_3406417.svg"},
    {"title": "blagla", "logoName": "iconfinder_sloth_3406421.svg"},
    {"title": "blagladla", "logoName": "iconfinder_squirrel_3406420.svg"},
    {"title": "blagladlaff", "logoName": "iconfinder_crocodile_3406445.svg"},
    {"title": "blagladlaff", "logoName": "iconfinder_fox_3406441.svg"},
    {"title": "blagladlaff", "logoName": "iconfinder_meerkat_3406432.svg"},
  ];
cb
  selectedFile: File;
  imagePreview: string;

  constructor() { }

  ngOnInit() {
  }

  onFileUpload(event) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile);
  }
  // OnUploadFile() {
  //   //Upload file here send a binary data
  //   this.http.post(‘yourdomain.com/file-upload’, this.selectedFile)
  // .subscribe(…);
  // }

}
