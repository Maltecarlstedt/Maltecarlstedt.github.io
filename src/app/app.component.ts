import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Quote {
  quote: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) { }
  
  connyRest: Quote = {quote: 'loading.....'};
  colors = ['#8EC5FC', '#4158D0', '#0093E9', '#D9AFD9', '#FBAB7E', '#85FFBD'];
  images = ['linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)', 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)', 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)', 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)', 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)', 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)' ];
  index = 0;
  ngOnInit() : void {
    this.getQuote();
  }
 
  getQuote() : void {
    const quote  = this.http.get<Quote>('https://api.kanye.rest/');
    quote.subscribe(data =>  {
      this.connyRest = data;
    });
    this.changeBackGround();
  }

/*   triggerAni() {
    
    const element = document.getElementById('quoteAni');
    if(!!this.connyRest){
      if(element != null){
        element.classList.remove('quote-text'); // reset animation
        void element.offsetWidth; // trigger reflow
        element.classList.add('quote-text'); // start animation
      }
   }
  } */

  changeBackGround() : void{
    if(this.index == this.colors.length - 1){
      this.index = 0;
    }
    document.body.style.background = this.colors[this.index];
    document.body.style.backgroundImage = this.images[this.index];
    this.index++;
  }
}
