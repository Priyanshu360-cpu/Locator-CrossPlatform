
import Realm from 'realm';

export function getRealmApp() {
   const appId = ''; 
   const appConfig = {
     id: appId,
     timeout: 10000,
   };
  return new Realm.App(appConfig);
}