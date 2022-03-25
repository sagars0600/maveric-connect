import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  postArray:any;

  constructor(private http: HttpClient) {
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
        likeCounts: '1',
        commentCounts: '5',
        postedBy: {
          firstName: 'Sagar',
          middleName: 'singh',
          lastName: 'SOlanki',
        }
      }

    ];
    // let url="http://localhost:8000/posts";
    // this.http.get(url).subscribe((response:any)=>{
    //   console.log(response)
    //   this.postArray=response;
    // })
  }
  ngOnInit(): void {}
}
