import {Injectable} from '@angular/core';
import {GroupAggregate} from '../../../classes/groupAggregate/group-aggregate';
import {GroupAggregateRestService} from '../group-aggregate-rest/group-aggregate-rest.service';
import {ProxyGroupAggregate} from '../../../classes/groupAggregate/proxy-group-aggregate';

@Injectable({
  providedIn: 'root'
})
export class GroupAggregateCollectionService
{
  private groups: GroupAggregate[];
  private parent: GroupAggregate;

  constructor(private restService: GroupAggregateRestService) {}

  get _groups(): GroupAggregate[]
  {
    if (this.groups === null)
    {
      return this.getGroups(0);
    }
    return this.groups;
  }

  get _parent(): GroupAggregate
  {
    if (this.parent !== undefined && this.parent !== null)
    {
      return this.parent;
    }
    return null;
  }

  getGroups(parentId?: number, callback?: any): GroupAggregate[]
  {
    if (parentId === undefined)
    {
      parentId = 0;
    }
    this.restService.get(parentId).subscribe((data: ProxyGroupAggregate) =>
    {
      this.groups = data.children;
      this.parent = data.parent;
      console.log(data);
    }, error => console.log(error), () =>
    {
      callback(this);
    });
    return this.groups;
  }

  findById(id: number): GroupAggregate
  {
    if (this.groups != null && this.groups.length > 0)
    {
      return this.groups.find(one => one.id == id);
    }
    return null;
  }

  save(group: GroupAggregate, file: File, parentId: number, callback): void
  {
    this.restService.save(group, parentId, file).subscribe(data =>
      {
        console.log(data);
      }, error => console.log(error),
      () =>
      {
        callback();
      }
    );
  }

  update(group: GroupAggregate, file: File, callback): void
  {
    this.restService.update(group, file).subscribe((grp: GroupAggregate) =>
      {
        console.log('update group: ' + grp);
      }, error => console.log(error),
      () => callback()
    );
  }

  delete(id: number): void
  {
    let group;
    group = this.restService.delete(id).subscribe();
    if (group !== null && group !== undefined)
    {
      this.groups = this.groups.filter(one => one.id != id);
    }
  }
}
