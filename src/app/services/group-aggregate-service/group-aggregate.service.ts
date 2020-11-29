import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupAggregate} from '../../classes/group-aggregate';

@Injectable({
  providedIn: 'root'
})
export class GroupAggregateService
{
  private REST_SERVER = 'http://localhost:9966/api/v1/group_aggregate/';
  private GET_GROUPS_BY_ID = 'get_groups_by_parent_id/';
  private SAVE_GROUP = 'save_group_aggregate/';
  constructor(private httpClient: HttpClient)
  {
  }
  public getGroupsByParentId(id: number): Observable<GroupAggregate[]>
  {
    return this.httpClient.get<GroupAggregate[]>(`${this.REST_SERVER}${this.GET_GROUPS_BY_ID}${id}`);
  }
  public saveGroupAggregate(group: GroupAggregate): Observable<GroupAggregate>
  {
    return this.httpClient.post<GroupAggregate>(`${this.REST_SERVER}${this.SAVE_GROUP}`, group);
  }
}
