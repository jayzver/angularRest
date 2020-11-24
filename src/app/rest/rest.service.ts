import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService
{
  private REST_SERVER = 'localhost:9966';
  private GET_ROOT_GROUPS = 'http://localhost:9966/api/group_aggregate/v1/get_root_groups/';
  private GET_GROUPS_BY_ID = 'http://localhost:9966/api/group_aggregate/v1/get_groups_by_parent_id/';
  private GET_AGGREGATES_BY_ID: string;
  constructor(private httpClient: HttpClient)
  {
  }
  // tslint:disable-next-line:typedef
  public getGroupById(id: number)
  {
    return this.httpClient.get(this.GET_GROUPS_BY_ID + id);
  }
  public getAggregatesByParentId(parentId: number): Observable<object[]>
  {
    return this.httpClient.get<object[]>(this.GET_AGGREGATES_BY_ID + parentId);
  }
}
