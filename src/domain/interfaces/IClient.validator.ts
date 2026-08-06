import { Client } from '@/domain/models/client.model';
import { IValidator } from '@/domain/interfaces/IValidator';

export interface IClientValidator extends IValidator<Client> {}
