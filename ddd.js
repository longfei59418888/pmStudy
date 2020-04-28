const sdf = {
    "type": "Program",
    "start": 0,
    "end": 117,
    "body": [
        {
            "type": "VariableDeclaration",
            "start": 0,
            "end": 11,
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "start": 6,
                    "end": 11,
                    "id": {
                        "type": "Identifier",
                        "start": 6,
                        "end": 7,
                        "name": "d"
                    },
                    "init": {
                        "type": "Literal",
                        "start": 10,
                        "end": 11,
                        "value": 3,
                        "raw": "3"
                    }
                }
            ],
            "kind": "const"
        },
        {
            "type": "ExpressionStatement",
            "start": 12,
            "end": 40,
            "expression": {
                "type": "AssignmentExpression",
                "start": 12,
                "end": 40,
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "start": 12,
                    "end": 36,
                    "object": {
                        "type": "Identifier",
                        "start": 12,
                        "end": 31,
                        "name": "__webpack_exports__"
                    },
                    "property": {
                        "type": "Literal",
                        "start": 32,
                        "end": 35,
                        "value": "a",
                        "raw": "'a'"
                    },
                    "computed": true
                },
                "right": {
                    "type": "Literal",
                    "start": 39,
                    "end": 40,
                    "value": 2,
                    "raw": "2"
                }
            }
        },
        {
            "type": "ExportNamedDeclaration",
            "start": 41,
            "end": 59,
            "declaration": {
                "type": "VariableDeclaration",
                "start": 48,
                "end": 59,
                "declarations": [
                    {
                        "type": "VariableDeclarator",
                        "start": 54,
                        "end": 59,
                        "id": {
                            "type": "Identifier",
                            "start": 54,
                            "end": 55,
                            "name": "a"
                        },
                        "init": {
                            "type": "Literal",
                            "start": 58,
                            "end": 59,
                            "value": 2,
                            "raw": "2"
                        }
                    }
                ],
                "kind": "const"
            },
            "specifiers": [],
            "source": null
        },
        {
            "type": "ExportNamedDeclaration",
            "start": 60,
            "end": 97,
            "declaration": {
                "type": "VariableDeclaration",
                "start": 67,
                "end": 97,
                "declarations": [
                    {
                        "type": "VariableDeclarator",
                        "start": 73,
                        "end": 97,
                        "id": {
                            "type": "Identifier",
                            "start": 73,
                            "end": 74,
                            "name": "b"
                        },
                        "init": {
                            "type": "ArrowFunctionExpression",
                            "start": 77,
                            "end": 97,
                            "id": null,
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "start": 81,
                                "end": 97,
                                "body": [
                                    {
                                        "type": "ReturnStatement",
                                        "start": 87,
                                        "end": 95,
                                        "argument": {
                                            "type": "Literal",
                                            "start": 94,
                                            "end": 95,
                                            "value": 1,
                                            "raw": "1"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ],
                "kind": "const"
            },
            "specifiers": [],
            "source": null
        },
        {
            "type": "ExportDefaultDeclaration",
            "start": 99,
            "end": 115,
            "declaration": {
                "type": "Identifier",
                "start": 114,
                "end": 115,
                "name": "d"
            }
        }
    ],
    "sourceType": "module"
}

const test = [1, 2, 3, 4]
test.pop(2)
console.log(test)


