/*
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 4, 
                    children: [
                        {
                            value: 6, 
                            children: [
                                {value: 8, children: []}
                            ]}
                    ]
                },
                {
                    value: 5, 
                    children: [
                        {value: 7, children: []}
                    ]
                }
            ]
        },
        {
            value: 3,
            children: []
        }
    ]
}

//Recorrido DFS

function dfs(node){
    console.log(node.value);
    for(let child of node.children){
        dfs(child);
        console.log("TEST:", node.value);
    }
}

//Recorrido BFS

function bfs(root){
    const tag = [root];
    while(tag.length){
        const node = tag.shift();
        console.log(node.value);
        tag.push(...node.children)
        console.log(tag);
        
    }
}

dfs(tree);
console.log("-----------");
bfs(tree);
*/

// DP

function fib(n,){
    if(n<=1) return n;
    return fib(n-1) + fib (n-2);
}

console.log(fib(8));

function fibMemo(n, memo={}){
    console.log(n, memo);
    
    if(n in memo) return memo[n];
    if(n<=1) return n;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

console.log(fibMemo(8));


