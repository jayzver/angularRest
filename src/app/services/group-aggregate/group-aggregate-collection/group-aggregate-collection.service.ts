import {Injectable} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {GroupAggregateRestService} from '../group-aggregate-rest/group-aggregate-rest.service';

@Injectable({
  providedIn: 'root'
})
export class GroupAggregateCollectionService
{
  private groups: GroupAggregate[];
  currGroupCopy = new GroupAggregate();

  constructor(private gats: GroupAggregateRestService) {}

  get getGroups(): GroupAggregate[]
  {
    if (this.groups === null)
    {
      return this.getByParentId(0);
    }
    return this.groups;
  }

  getByParentId(parentId: number): GroupAggregate[]
  {
    this.gats.getByParentId(parentId).subscribe((data: GroupAggregate[]) =>
    {
      this.groups = data;
      console.log(data);
    }, error => console.log(error));
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

  save(group: GroupAggregate, file: File): void
  {
    this.gats.save(group, file).subscribe(data =>
    {
      console.log(data);
    });
  }

  update(group: GroupAggregate, file: File): void
  {
    this.gats.update(group, file);
  }
  delete(id: number): void
  {
    let group;
    group = this.gats.delete(id);
    if (group != null)
    {
      this.groups = this.groups.filter(one => one.id != id);
    }
  }

  resetCurrGroup(): void
  {
    this.currGroupCopy.nameTarget = 'Главная';
    this.currGroupCopy.imgUrl = this.currGroupCopy.description = '';
    this.currGroupCopy.id = this.currGroupCopy.parentId = 0;
    this.currGroupCopy.typeOfChildren = 1;
  }
}
