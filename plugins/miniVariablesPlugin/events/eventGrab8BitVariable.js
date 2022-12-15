export const id = "MINI_GRAB_EIGHT_BIT_VARIABLE";
export const name = "Variable Grab 8-Bit Value";
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
            ["value1", "8-Bit Value 1"],
            ["value2", "8-Bit Value 2"]
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
        variableEvaluateExpression(vectorY, vectorX + " % 256");
    } else {
        variableEvaluateExpression(vectorY, vectorX + " / 256");
    }
};
