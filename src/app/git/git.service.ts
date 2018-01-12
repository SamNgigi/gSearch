import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class GitService {

  private username: string = "SamNgigi";
  private clientId: string = "4d70422b5fdbbdac483b"
  private apiUrl: string = "https://api.github.com/users/";
  private clientSecret: string = environment.Git_Secret;
//Git profiles
  gitProfile(){
    return this.http.get(this.apiUrl + this.username+"?client_id="+this.clientId+"&client_service"+this.clientSecret).map(result => result)
  }

  //Git Repos
  gitRepos(){
    return this.http.get(this.apiUrl + this.username+"/repos"+"?client_id="+this.clientId+"&client_service"+this.clientSecret).map(result => result)
  }

  constructor(private http: HttpClient) {
    console.log("GitService Ready");
  }



}
