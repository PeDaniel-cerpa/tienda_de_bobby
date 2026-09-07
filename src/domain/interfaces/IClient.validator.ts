import { Client } from '@/domain/entities/client.entity';
import { IValidator } from '@/domain/interfaces/IValidator';

export interface IClientValidator extends IValidator<Client> {}
