import {Aggregate} from "../aggregate";

export class ProxyAggregate
{
  parent: Aggregate;
  children: Aggregate[];
}
