import {BaseEntity} from '../../base-entity';

export class Provider extends BaseEntity
{
  internAddress: string;
  physicalAddress: string;
  email: string;
  phone: string;
}
