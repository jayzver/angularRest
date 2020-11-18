import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService
{
  private REST_SERVER = 'localhost:9966';
  private GET_ROOT_GROUP = 'http://localhost:9966/api/groupaggregate/v1/getrootgroup/';
  private GET_GROUP_BY_ID = 'http://localhost:9966/api/groupaggregate/v1/';
  private GET_AGGREGATES_BY_ID: string;
  constructor(private httpClient: HttpClient)
  {
  }
  // tslint:disable-next-line:typedef
  public getRootGroup()
  {
    return this.httpClient.get(this.GET_ROOT_GROUP);
  }
  public getGroupById(id: number): Observable<any>
  {
    return this.httpClient.get(this.GET_GROUP_BY_ID + id);
  }
  public getAggregatesByParentId(parentId: number): Observable<any>
  {
    return this.httpClient.get(this.GET_AGGREGATES_BY_ID + parentId);
  }
}
