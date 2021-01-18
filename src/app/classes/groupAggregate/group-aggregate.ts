import {BaseEntity} from '../base-entity';

export class GroupAggregate extends BaseEntity
{
  parentId: number;
  typeOfChildren: number;
  clone(group: GroupAggregate): void
  {
    this.id = group.id;
    this.nameTarget = group.nameTarget;
    this.parentId = group.parentId;
    this.typeOfChildren = group.typeOfChildren;
    this.imgUrl = group.imgUrl;
    this.description = group.description;
  }
}
