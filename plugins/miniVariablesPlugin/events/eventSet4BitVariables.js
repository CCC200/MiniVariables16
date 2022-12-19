export const id = "MINI_SET_FOUR_BIT_VARIABLES";
export const name = "Variable Set 4-Bit Values";
export const groups = ["EVENT_GROUP_VARIABLES"];
export const fields = [
    {
      key: "vectorX",
      type: "variable",
      defaultValue: "LAST_VARIABLE"
    },
    {
      key: "value1",
      label: "4-Bit Value 1",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 7,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "value2",
      label: "4-Bit Value 2",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 7,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "value3",
      label: "4-Bit Value 3",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 7,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "value4",
      label: "4-Bit Value 4",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 7,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      label: "Note: Each value cannot exceed 7.",
    }
];
export const compile = (input, helpers) => {
    const { variableSetToValue } = helpers;
    const { vectorX, value1, value2, value3, value4 } = input;
    variableSetToValue(vectorX, (value4.value * 512) + (value3.value * 64) + (value2.value * 8) + value1.value);
};