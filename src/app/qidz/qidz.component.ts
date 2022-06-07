import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qidz',
  templateUrl: './qidz.component.html',
  styleUrls: ['./qidz.component.css']
})
export class QidzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  div1:boolean=true;
    div2:boolean=false;
    div3:boolean=false;

    div1Function(){
        this.div1=true;
        this.div2=false;
        // this.div3=false
    }

    div2Function(){
        this.div2=true;
        this.div1=false;
        // this.div3=false
    }

    div3Function(){
        this.div3=true;
        this.div2=false;
        // this.div1=false
    }

}
