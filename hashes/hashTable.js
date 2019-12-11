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
        this.capacity = 10;
    }

    prettyString() {
        // "{'name': 'seahawks', 'location': 'seattle'}"
        var output = "{";
        // loop table, find all kvps

        // TODO: only add quotes to strings!
        // TODO: make sure we account for empty slots at end of this.table
        let tempTable = [];
        for(const c of this.table) {
            if(c) { // only push if not undefined
                tempTable.push(c);
            }
        }
        
        for(let i=0; i<tempTable.length; i++) {
            const ctable = this.table[i];
            if(ctable) {
                for(let k=0; k<ctable.length; k++) {
                    const kvp = ctable[k];
                    // append the .key and .value to output
                    output += `${kvp.key}: ${kvp.value}`;
                    // TODO:(only add commas/spaces if we're not at end of both!)
                    if(i<this.table.length-1 || k<ctable.length-1) {
                        output += ", ";
                    }
                }
            } // if not undefined
        }
        // append => `${keyName}:'value`,
        // then...
        output += "}";
        return output;
    }

    // get
    get(key) {
        // returns: value at that key

        var keyIndex = key.hashCode() % this.capacity;
        // check to see if theres a collision table at this.table[keyIndex]

        // case #1: no key exists in table!
        // is there anything in this.table[keyIndex]??
        if(this.table[keyIndex] === undefined) {
            throw new Error("Key not here! ;P");
        }
        var collisions = this.table[keyIndex]; // [kvp,kvp]

        // case #2: one thing (kvp) at that spot
        if(collisions.length === 1) {
            return collisions[0].value;
        }

        // case #3: more than one thing exists at that spot
        // search collisions array for 'key'
        for(var i=0; i<collisions.length; i++) {
            if(collisions[i].key === key) {
                return collisions[i].value;
            }
        }

        // case #4: key not in table, but has a collision spot
        throw new Error("Key not here! ;P");

    }

    set(key, value) {
        // sets: value at key
        // 23523525
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

    }
    // set
}

var footballTeam = new HashTable();
footballTeam.set("name", "seahawks");
footballTeam.set("location", "seattle");
footballTeam.set("color", "green");
footballTeam.set("name", "rams");

var name = footballTeam.get("name");
console.log(footballTeam.prettyString()); // => "rams"