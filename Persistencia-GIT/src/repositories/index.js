import {Contacts} from '../dao/factory.js';
import ContactRepository  from './constact.repositories';

export const contactService =new ContactRepository(new Contacts());
