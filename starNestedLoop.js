function starNestedLoop(n, m) {
    let string = "";

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            string += '*';
        }
        string += "\n";
    }
    console.log(string)
}

//TEST CASE
starNestedLoop(1,2)
// *
// *

starNestedLoop(2,3)
// **
// **
// **

starNestedLoop(4,1)
// ****