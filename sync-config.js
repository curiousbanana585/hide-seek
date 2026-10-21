/* ---------------------------------------------------------------------------
   Sardines needs one free Firebase Realtime Database so phones can find each other.

   Paste its address between the quotes below, e.g.

     databaseURL: 'https://my-sardines-default-rtdb.europe-west1.firebasedatabase.app'

   Leave it empty and the app runs in demo mode: tins only work between tabs
   of the same browser, which is handy for trying it out but not for the park.
   --------------------------------------------------------------------------- */
window.SYNC_CONFIG = {
  databaseURL: 'https://hide-seek-3313a-default-rtdb.europe-west1.firebasedatabase.app/'
};
