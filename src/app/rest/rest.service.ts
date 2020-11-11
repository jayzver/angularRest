import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService
{
  private REST_SERVER = 'localhost:9966';
  private REST_SERVER_GROUP_AGGREGATE_GET_ALL = 'http://localhost:9966/api/groupaggregate/v1/';
  constructor(private httpClient: HttpClient)
  {
  }
  // tslint:disable-next-line:typedef
  public getGroups()
  {
    return this.httpClient.get(this.REST_SERVER_GROUP_AGGREGATE_GET_ALL);
  }
}
