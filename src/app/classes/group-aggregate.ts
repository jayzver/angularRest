export class GroupAggregate
{
  id: number;
  nameTarget: string;
  imgUrl: string;
  description: string;
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
