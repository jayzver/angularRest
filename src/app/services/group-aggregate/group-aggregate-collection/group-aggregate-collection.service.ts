import {Injectable} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {GroupAggregateRestService} from '../group-aggregate-rest/group-aggregate-rest.service';

@Injectable({
  providedIn: 'root'
})
export class GroupAggregateCollectionService
{
  private groups: GroupAggregate[];

  constructor(private gats: GroupAggregateRestService) {}

  get getGroups(): GroupAggregate[]
  {
    if (this.groups == null)
    {
      return this.getGroupsByParentId(0);
    }
    return this.groups;
  }
  getGroupsByParentId(parentId: number): GroupAggregate[]
  {
    this.gats.getGroupsByParentId(parentId).subscribe((data: GroupAggregate[]) =>
    {
      this.groups = data;
    }, error => console.log(error));
    return this.groups;
  }
  saveGroupAggregate(group: GroupAggregate, file: File): void
  {
    this.gats.saveGroupAggregate(group, file).subscribe(data => {
      console.log(data);
    });
  }
  findGroupById(id: number): GroupAggregate
  {
    return this.groups.find(one => one.id === id);
  }
}
