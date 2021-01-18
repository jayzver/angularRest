import {BaseEntity} from '../base-entity';
import {Provider} from './provider/provider';
import {AggregateImg} from './aggregateImg/aggregate-img';
import {AggregateFile} from './aggregateFile/aggregate-file';
import {AdditionalProperties} from './additionalProperties/additional-properties';

export class Aggregate extends BaseEntity
{
  groupId: number;
  quantity: number;
  serialKey: string;
  parentId: number;
  providers: Provider[];
  images: AggregateImg[];
  files: AggregateFile[];
  additionalProperties: AdditionalProperties[];
}
