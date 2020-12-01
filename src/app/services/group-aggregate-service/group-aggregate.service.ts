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
  constructor(private httpClient: HttpClient)
  {
  }
  public getGroupsByParentId(id: number): Observable<GroupAggregate[]>
  {
    return this.httpClient.get<GroupAggregate[]>(`${this.REST_SERVER}${this.GET_GROUPS_BY_ID}${id}`);
  }
  public saveGroupAggregate(group: GroupAggregate, file: File): Observable<GroupAggregate>
  {
    const formData = new FormData();
    // formData.append('groupAggregate', JSON.stringify(group));
    formData.append('fille', file);
    return this.httpClient.post<GroupAggregate>(`${this.REST_SERVER}${'/fille'}`, formData);
    // return this.httpClient.post<GroupAggregate>(`${this.REST_SERVER}`, group);
  }
}
