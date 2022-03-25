import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any;
  postedBy:any={};
  comments:any;
  constructor(private http : HttpClient) {
    let url= "http://localhost:3010/posts/1";
    this.http.get(url).subscribe((response:any)=>{
      console.log(response)
      this.post=response
      this.postedBy=response.postedBy;
    })

    let url1="http://localhost:8000/posts/1/comments"
    this.http.get(url1).subscribe((response:any)=>{
      console.log(response)
      this.comments=response

    })
  }

  ngOnInit(): void {
  }

}
