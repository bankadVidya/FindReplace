import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-replace',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './find-replace.component.html',
  styleUrl: './find-replace.component.css'
})
export class FindReplaceComponent {
  text: string = '';  // Main text
  findText: string = ''; // Word to find
  replaceText: string = ''; // Word to replace
  showText: boolean = false;
  newText:any;

  onSumbit() {
    this.showText = !this.showText;
    this.newText=this.text
  }

  
  onApply() {
    if (this.text?.trim() && this.findText?.trim() && this.replaceText?.trim()) {
      const regex = new RegExp(this.findText.trim(), 'gi');
      
      // Check if the word exists before replacing
      if (!regex.test(this.text)) {
        alert("Not found");
        return;
      }
  
      this.newText = this.text.replaceAll(regex, this.replaceText.trim());
    } else {
      alert("Please check if you have entered Text, FindText, and ReplaceText");
    }
  }
  
}
