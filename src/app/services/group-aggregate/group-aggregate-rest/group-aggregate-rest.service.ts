import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GroupAggregate} from '../../../classes/GroupAggregate/group-aggregate';
import {TransferGroupAggregate} from '../../../classes/GroupAggregate/transfer-group-aggregate';

@Injectable({
  providedIn: 'root'
})
export class GroupAggregateRestService
{
  private REST_SERVER = 'http://localhost:9966/api/v1/group_aggregate/';
  private GET_GROUP = 'get_group/';
  groups: GroupAggregate[];
  constructor(private httpClient: HttpClient)
  {
  }
  public get(id: number): Observable<TransferGroupAggregate>
  {
    console.log(id);
    if (id != 0)
    {
      return this.httpClient.get<TransferGroupAggregate>(`${this.REST_SERVER}${this.GET_GROUP}${id}`);
    }
    return this.httpClient.get<TransferGroupAggregate>(`${this.REST_SERVER}${this.GET_GROUP}`);
  }
  public save(group: GroupAggregate, parentId: number, file: File): Observable<any>
  {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('groupAggregate', JSON.stringify(group));
    return this.httpClient.post<any>(`${this.REST_SERVER}${parentId}`, formData);
  }

  update(group: GroupAggregate, file: File): Observable<GroupAggregate>
  {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('groupAggregate', JSON.stringify(group));
    return this.httpClient.put<GroupAggregate>(`${this.REST_SERVER}`, formData);
  }

  delete(id: number): Observable<GroupAggregate>
  {
    return this.httpClient.delete<GroupAggregate>(`${this.REST_SERVER}${id}`);
  }
}
