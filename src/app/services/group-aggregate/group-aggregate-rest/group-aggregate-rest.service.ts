import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupAggregate} from '../../../classes/group-aggregate';

@Injectable({
  providedIn: 'root'
})
export class GroupAggregateRestService
{
  private REST_SERVER = 'http://localhost:9966/api/v1/group_aggregate/';
  private GET_GROUPS_BY_ID = 'get_groups_by_parent_id/';
  groups: GroupAggregate[];
  constructor(private httpClient: HttpClient)
  {
  }
  public getGroupsByParentId(id: number): Observable<GroupAggregate[]>
  {
    return this.httpClient.get<GroupAggregate[]>(`${this.REST_SERVER}${this.GET_GROUPS_BY_ID}${id}`);
  }
  public saveGroupAggregate(group: GroupAggregate, file: File): Observable<any>
  {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('groupAggregate', JSON.stringify(group));
    return this.httpClient.post<any>(`${this.REST_SERVER}`, formData);
    // return this.httpClient.post<GroupAggregate>(`${this.REST_SERVER}`, group);
  }

  updateGroupAggregate(group: GroupAggregate, file: File): Observable<GroupAggregate>
  {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('groupAggregate', JSON.stringify(group));
    return this.httpClient.put<GroupAggregate>(`${this.REST_SERVER}`, formData);
  }
}
