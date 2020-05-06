import {Result} from "../types/result";
import {BinaryTree} from "../../code/structures/binaryTree";
import {Node} from "../../code/structures/binaryTree";

namespace ​test​ {
    export function RunFindNode(): boolean{

        var tree = new Node(
            new Node(
                new Node(
                     new Node(
                        null,
                        null,
                        1
                    ),
                    new Node(
                        null,
                        null,
                        3
                    ),
                    2
                ),
                new Node(
                    new Node(
                        null,
                        null,
                        5
                    ),
                    null,
                    6
                ),
                4
            ),
            new Node(
                new Node(
                    null,
                    null,
                     8
                ),
                new Node(
                    null,
                    null,
                     10
                ),
                9
            ),
            7
        )

        let testArr = [
            new Result<Node>(()=> BinaryTree.findNode(tree, 3),  new Node(
                null,
                null,
                3
            ))
        ];

        let isOk: boolean;
        testArr.forEach(test => {
            let tested = test.Run();
            let testOk = test.isOk;
            isOk = isOk && testOk;
            console.log('%c%s', `color: ${testOk ? 'green' : 'red'}; font: 1.2rem/1 Tahoma;`, tested);
            return tested;
        });
        
        return isOk;
    }
}

​test​.RunFindNode();