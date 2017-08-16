import Realm from 'realm';
import UserSchema from './user';

const realm = new Realm({ schema: [UserSchema] });

export default realm;
