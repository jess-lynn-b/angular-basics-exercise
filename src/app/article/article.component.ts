import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  title: string = "Whatever you want";
  content: string = "Some content goes here.";
  isTechrelated: boolean = true;

  changeIsTechRelated(){
    if(this.isTechrelated === true){
      return this.isTechrelated = false;
    } else return this.isTechrelated = true;
  }
}

