import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService
{

  constructor(private httpClient: HttpClient)
  {
  }
  // tslint:disable-next-line:typedef
  public getGroups()
  {
    return this.httpClient.get('localhost:9966/api/groupaggregate/v1');
  }
}
