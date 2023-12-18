let indexedDB

const initIndexedDB = (dbLabel, keyLabel) => {
    indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB
    if (!indexedDB){
        console.log('Your browser does not support IndexedDB.');
        return;
    }
    const request = indexedDB.open(dbLabel, 1);
    request.onerror = (event) => {
        console.error("An error occurred with IndexedDB");
    };
    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        const store = db.createObjectStore(dbLabel, {autoIncrement: true});
    };
    return request
}

export const insertIndexedDB = (dbLabel, keyLabel, data) => {
    let request = initIndexedDB(dbLabel, keyLabel)
    
    request.onsuccess = (event) => {
        const db = event.target.result
        let transaction = db.transaction(dbLabel, 'readwrite')
        let objStore = transaction.objectStore(dbLabel)
        let query = objStore.put(data)
        query.onsuccess = (event) => {}
        query.onerror = (event) => {}
        
        transaction.oncomplete = () => {
            db.close()
        }

   };
}

export const retriveIndexedDB = (dbLabel, keyVal) => {
    if (!indexedDB){
        console.log('IndexedDB is not initialized correctly.');
        return;
    }
    let request = indexedDB.open(dbLabel, 1);
    // let objStore = transaction.objectStore(dbLabel)
    // var idx = objStore.index(keyVal)
    request.onsuccess = (event) => {
        const db = event.target.result
        let transaction = db.transaction(dbLabel)
        let store = transaction.objectStore(dbLabel)
        console.log("keyVal=", keyVal)
        let retriveRequest = store.get(1)
        retriveRequest.onsuccess = event => {
            console.log(event.target.result)
            return event.target.result
        }

   };
}


