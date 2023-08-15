import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Git } from '../interfaces/git';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitcmdsService {

  constructor(private http: HttpClient) { }

  getGitCmds(): Observable<Git[]> {
    return this.http.get<Git[]>(
      'http://localhost:3000/git'
    );
  }
}
