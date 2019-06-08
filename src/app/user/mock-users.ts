import {User} from '../_interfaces/user';

export const USERS: Array<User> = [
    {
        uid: 11,
        login: 'Test User 1',
        firstName: 'Test name 1',
        lastName: 'Test last name 1',
        birthday: new Date(Date.now()),
        email: 'test@test.com'
    },{
        uid: 12,
        login: 'Test User 2',
        firstName: 'Test name 2',
        lastName: 'Test last name 2',
        birthday: new Date(Date.now()),
        email: 'test@test.com'
    },{
        uid: 13,
        login: 'Test User 3',
        firstName: 'Test name 3',
        lastName: 'Test last name 3',
        birthday: new Date(Date.now()),
        email: 'test@test.com'
    },
];
