export const id = "MINI_GRAB_TWO_BIT_VARIABLE";
export const name = "Variable Grab 2-Bit Value";
export const groups = ["EVENT_GROUP_VARIABLES"];
export const fields = [
    {
        key: "vectorX",
        type: "variable",
        defaultValue: "LAST_VARIABLE"
    },
    {
        key: "value",
        type: "select",
        options: [
            ["value1", "2-Bit Value 1"],
            ["value2", "2-Bit Value 2"],
            ["value3", "2-Bit Value 3"],
            ["value4", "2-Bit Value 4"],
            ["value5", "2-Bit Value 5"],
            ["value6", "2-Bit Value 6"],
            ["value7", "2-Bit Value 7"]
        ],
        width: "100%",
        defaultValue: "value1"
    },
    {
        key: "vectorY",
        label: "Copy into Variable",
        type: "variable",
        defaultValue: "LAST_VARIABLE"
    }
];
export const compile = (input, helpers) => {
    const { variableEvaluateExpression } = helpers;
    const { vectorX, value, vectorY } = input;
    if (value == "value1") {
        variableEvaluateExpression(vectorY, vectorX + " % 4");
    } else if(value == "value2") {
        variableEvaluateExpression(vectorY, "(" + vectorX + " / 4) % 4");
    } else if(value == "value3") {
        variableEvaluateExpression(vectorY, "(" + vectorX + " / 16) % 4");
    } else if(value == "value4") {
        variableEvaluateExpression(vectorY, "(" + vectorX + " / 64) % 4");
    } else if(value == "value5") {
        variableEvaluateExpression(vectorY, "(" + vectorX + " / 256) % 4");
    } else if(value == "value6") {
        variableEvaluateExpression(vectorY, "(" + vectorX + " / 1024) % 4");
    } else if(value == "value7") {
        variableEvaluateExpression(vectorY, "(" + vectorX + " / 4096) % 4");
    }
};
