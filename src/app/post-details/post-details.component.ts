import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  postArray:any;
  postLoop:any;
  j=0;

  next(){
   // console.log("hello");
    this.postLoop=this.postArray.slice(this.j,this.j+1);

    this.j++;
//this.route.navigate(['/posts-details']);

  }

  back(){
    this.j=this.j-2;
    // console.log("hello");
     this.postLoop=this.postArray.slice(this.j,this.j+1);

     this.j--;
 //this.route.navigate(['/posts-details']);

   }
  constructor(private http: HttpClient,private route:Router) {



    this.postArray= [
      {
        post:'A New Book',
        likeCounts: '1',
        commentCounts: '5',
        postedBy: {
          firstName: 'Sagar',
          middleName: 'singh',
          lastName: 'SOlanki',
        }
      },
      {
        post:'A New Book',
        likeCounts: '4',
        commentCounts: '2',
        postedBy: {
          firstName: 'Roody',
          middleName: 'Kane',
          lastName: 'Bro',
        }
      },
      {
        post:'A New Book',
        likeCounts: '3',
        commentCounts: '9',
        postedBy: {
          firstName: 'John',
          middleName: 'Maddy',
          lastName: 'Cena',
        }

      }

    ];


//     for(let i=this.j;i<this.j+1;i++){
// this.postLoop[i]=this.postArray[i];
//     }
this.postLoop=this.postArray.slice(this.j,this.j+1);

    this.j++;

console.log(this.postLoop);

    // let url="http://localhost:8000/posts";
    // this.http.get(url).subscribe((response:any)=>{
    //   console.log(response)
    //   this.postArray=response;
    // })
  }
  ngOnInit(): void {}
}
