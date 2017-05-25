import Realm from 'realm';
import UserSchema from './user';

let realm = new Realm({ schema: [UserSchema] });

export default realm;
