import {User} from './user';
import {Patient} from './patient';

export interface Doctor extends User {
    patients: Array<Patient>
}
