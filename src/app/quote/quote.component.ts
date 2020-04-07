import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [

    new Quote(1, "Indira Gandhi", "You cannot shake hands with a clenched fist", new Date(2016.11, 15)),

  ];

   
  
  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm('Are you sure you want to delete quote')
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

    addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)

    }

    upVotes:number=0;
    upVote(){
      this.upVotes=this.upVotes+1;

    }
    downVotes:number=0;
    downVote(){
      this.downVotes=this.downVotes+1;

    }
    constructor() { }

    ngOnInit() {
    }
}