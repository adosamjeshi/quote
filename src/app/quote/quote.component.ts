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
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Quote(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2019,0,18)),
    new Quote(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    new Quote(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
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