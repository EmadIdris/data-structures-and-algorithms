'use strict';

class Graph {
    constructor() {
        this.vertices = [];
        this.adjacent = {};
        this.edges = 0;
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjacent[v] = [];
    }

    addEdge(v, w) {
        this.adjacent[v].push(w);
        this.adjacent[w].push(v);
        this.edges++;
    }

    size() {
        if (this.adjacent.size > 0) {
          return this.adjacent.size;
        } else {
          return null;
        }
    }

    dfs(goal, v = this.vertices[0], discovered = []) {
        let adj = this.adjacent;

        discovered[v] = true;

        for (let i = 0; i < adj[v].length; i++){
            let w = adj[v][i];

            if (!discovered[w]) {
                this.dfs(goal, w, discovered);
            }
        }

        return discovered[goal] || false;
    }
}



module.exports = Graph ;