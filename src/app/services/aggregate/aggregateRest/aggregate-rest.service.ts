import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProxyAggregate} from '../../../classes/aggregate/proxyAggregate/proxy-aggregate';
import {Aggregate} from '../../../classes/aggregate/aggregate';

@Injectable({
  providedIn: 'root'
})
export class AggregateRestService {

  private REST_SERVER = 'http://localhost:9966/api/v1/aggregate/';
  private CHILDREN_BY_PARENT_ID = 'children/by/';
  private CHILDREN = 'children';
  groups: Aggregate[];
  constructor(private httpClient: HttpClient)
  {
  }
  getById(id: number): Observable<ProxyAggregate>
  {
      return this.httpClient.get<ProxyAggregate>(`${this.REST_SERVER}${id}`);
  }
  getChildrenByParentId(parentId: number): Observable<ProxyAggregate>
  {
      return this.httpClient.get<ProxyAggregate>(`${this.REST_SERVER}${this.CHILDREN_BY_PARENT_ID}${parentId}`);
  }
  getChildren(groupId: number): Observable<ProxyAggregate>
  {
      return this.httpClient.get<ProxyAggregate>(`${this.REST_SERVER}${this.CHILDREN}${groupId}`);
  }
  save(aggregate: Aggregate, parentId: number, file: File): Observable<any>
  {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('aggregate', JSON.stringify(aggregate));
    return this.httpClient.post<any>(`${this.REST_SERVER}${parentId}`, formData);
  }

  update(aggregate: Aggregate, file: File): Observable<Aggregate>
  {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('aggregate', JSON.stringify(aggregate));
    return this.httpClient.put<Aggregate>(`${this.REST_SERVER}`, formData);
  }

  delete(id: number): Observable<Aggregate>
  {
    return this.httpClient.delete<Aggregate>(`${this.REST_SERVER}${id}`);
  }
}
