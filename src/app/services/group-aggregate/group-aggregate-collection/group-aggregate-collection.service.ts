import {Injectable} from '@angular/core';
import {GroupAggregate} from '../../../classes/group-aggregate';
import {GroupAggregateRestService} from '../group-aggregate-rest/group-aggregate-rest.service';

@Injectable({
  providedIn: 'root'
})
export class GroupAggregateCollectionService
{
  private groups: GroupAggregate[];
  // parentGroup = new GroupAggregate();
  parentId = 0;
  parentTitle = 'Главная';

  constructor(private restService: GroupAggregateRestService) {}

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
    // console.log(this.parentGroup);
    if (parentId === undefined)
    {
      // this.resetParentGroup();
      parentId = 0;
    }
    this.restService.getByParentId(parentId).subscribe((data: GroupAggregate[]) =>
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

  save(group: GroupAggregate, file: File, callback): void
  {
    this.restService.save(group, file).subscribe(data =>
    {
      console.log(data);
    }, error => console.log(error),
      () => callback()
    );
  }

  update(group: GroupAggregate, file: File, callback): void
  {
    this.restService.update(group, file).subscribe((grp: GroupAggregate) => {
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

  // resetParentGroup(): void
  // {
  //   this.parentGroup.nameTarget = 'Главная';
  //   this.parentGroup.imgUrl = this.parentGroup.description = '';
  //   this.parentGroup.id = this.parentGroup.parentId = 0;
  //   this.parentGroup.typeOfChildren = 1;
  // }
}
