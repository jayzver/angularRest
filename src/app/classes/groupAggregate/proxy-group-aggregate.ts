import {GroupAggregate} from './group-aggregate';

export class ProxyGroupAggregate
{
  parent: GroupAggregate;
  children: GroupAggregate[];
}
