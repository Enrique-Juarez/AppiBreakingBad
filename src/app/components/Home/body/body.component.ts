import { AfterViewInit,Component, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  actorID:any
 
  actorsArray:[]=[];
  
  filterPost ="";

  constructor(private http: HttpClient, private elementRef:ElementRef) {}
  url="https://www.breakingbadapi.com/api/characters";
  
  ngAfterViewInit(){
    this.elementRef.nativeElement.querySelector("my-element").addEventListener("click",this.onClick.bind(this));
  }
  onClick(event:any) {
    this.actorID = event;
    console.log(event)
  }

ngOnInit(){
  this.http.get<[]>(this.url).subscribe(data => {
    console.log(data);
    this.actorsArray=data;
  
  })
}


  


}

