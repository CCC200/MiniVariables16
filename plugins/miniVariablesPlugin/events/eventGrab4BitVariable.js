export const id = "MINI_GRAB_FOUR_BIT_VARIABLE";
export const name = "Variable Grab 4-Bit Value";
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
            ["value1", "4-Bit Value 1"],
            ["value2", "4-Bit Value 2"],
            ["value3", "4-Bit Value 3"],
            ["value4", "4-Bit Value 4"]
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
        variableEvaluateExpression(vectorY, vectorX + " % 8");
    } else if(value == "value2") {
        variableEvaluateExpression(vectorY, "(" + vectorX + " / 8) % 8");
    } else if(value == "value3") {
        variableEvaluateExpression(vectorY, "(" + vectorX + " / 64) % 8");
    } else if(value == "value4") {
        variableEvaluateExpression(vectorY, "(" + vectorX + " / 512) % 8");
    }
};
