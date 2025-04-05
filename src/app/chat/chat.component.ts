import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, NgFor],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit   {
  comments: string[] = [];
  inputText: string = '';

  sendComment() {
    if (this.inputText.trim()) {
      this.comments.push(this.inputText);
      this.inputText = '';
    }
  }

  count= 1;
  ngOnInit() {

    this.log(`ngOnInit`);
  }
  ngOnChanges() {

    this.log(`OnChanges`);
  }
  ngDoCheck() {

    this.log(`ngDoCheck`);
  }
  ngAfterViewInit() {

    this.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {

    this.log(`ngAfterViewChecked`);
  }
  ngAfterContentInit() {

    this.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {

    this.log(`ngAfterContentChecked`);
  }

  private log(msg: string) {
    console.log(this.count + ". " + msg);
    this.count++;
  }
}

