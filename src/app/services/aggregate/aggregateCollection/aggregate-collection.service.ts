import {Injectable} from '@angular/core';
import {Aggregate} from "../../../classes/aggregate/aggregate";
import {AggregateRestService} from "../aggregateRest/aggregate-rest.service";
import {GroupAggregateCollectionService} from "../../group-aggregate/group-aggregate-collection/group-aggregate-collection.service";

@Injectable({
  providedIn: 'root'
})
export class AggregateCollectionService
{
  private list: Aggregate[];
  private parent: Aggregate;

  constructor(private restService: AggregateRestService, private gacs: GroupAggregateCollectionService)
  {
  }

  get _list(): Aggregate[]
  {
    return this.list;
  }

  set _list(value: Aggregate[])
  {
    this.list = value;
  }

  get _parent(): Aggregate
  {
    return this.parent;
  }

  set _parent(value: Aggregate)
  {
    this.parent = value;
  }

  getById(id: number): Aggregate
  {
    this.restService.getById(id).subscribe((data) => {
      this.parent = data.parent;
    });
    return this.parent;
  }
  getChildrenById(parentId: number, callback?: any): Aggregate[]
  {
    this.restService.getChildrenByParentId(parentId).subscribe((data) => {
      this.list = data.children;
      this.parent = data.parent;
    }, error => console.log(error.getMessage()),
      () => {
      callback(this);
      });
    return this.list;
  }
  getChildren(groupId: number, callback?: any): Aggregate[]
  {
    this.restService.getChildren(groupId).subscribe((data) => {
      this.list = data.children;
    }, (error) => console.log(error.getMessage()), () => {
      callback(this.gacs); });
    return this.list;
  }
}
