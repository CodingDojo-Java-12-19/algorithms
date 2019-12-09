// O(1) Look up!
String.prototype.hashCode = function() {
    var hash= 0;
    if (this.length == 0) return hash;
    
    for (i = 0; i < this.length; i++) {
        char= this.charCodeAt(i);
        hash = ((hash<<5)-hash) + char;
        hash &= hash; //Convert-->32b int
    }
    return hash; 
}
// {}

class KeyValuePair {
    constructor(k, v) {
        this.key = k;
        this.value = v;
    }
}

class HashTable {

    constructor() {
        this.table = []; // List<KeyValuePair>[]
        this.capacity = 100;
    }

    // get
    get(key) {
        // returns: value at that key

        var keyIndex = key.hashCode() % this.capacity;
        // check to see if theres a collision table at this.table[keyIndex]

        // if so see if provded key in in there!

        return this.table[keyIndex];

    }
    set(key, value) {
        // sets: value at key
        var keyIndex = key.hashCode() % this.capacity;

        // see if theres an existing collision table at keyIndex
        var collisions = this.table[keyIndex]
        if(collisions !== undefined) {
            // see if k already in collision table
            for(var kvp of collisions) {
                if(kvp.key == key) {
                    // update if so,
                    kvp.value = value;
                    return;
                }
            }
            // add if not
            collisions.push(new KeyValuePair(key, value));

        } else {
            this.table[keyIndex] = [new KeyValuePair(key, value)];
        }

        // if so, 
        // if not, add new kvp to NEW collision table

        console.log(this.table);
    }
    // set
}

var footballTeam = new HashTable();
footballTeam.set("name", "seahawks");
footballTeam.set("location", "seattle");
footballTeam.set("name", "rams");