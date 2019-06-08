import {User} from './user';
import {Doctor} from './doctor';

export interface Patient extends User {
    doctors: Array<Doctor>
}
