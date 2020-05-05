import { Component, OnInit } from '@angular/core';
import { GithubService } from '../common/service/github.service';
import { AppException } from '../common/exceptions/app.exception';
import { NotFoundException } from '../common/exceptions/notfound.exception';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  followers:any;
  constructor(private  githubService:GithubService) { }

  ngOnInit(): void {
    this.getFollowers();
  }



  getFollowers(name?:string) {

    this.githubService.getFollowers(name)
    .subscribe(response => {
      this.followers = response;
    },
    (error:  AppException) => {
      if (error instanceof NotFoundException) {
        alert('Unexpected  Not Found Exception occured');
      }
      throw null;
    });
  }

  findFollowers(userID: HTMLInputElement) {
    this.getFollowers(userID.value);
  }

  }





