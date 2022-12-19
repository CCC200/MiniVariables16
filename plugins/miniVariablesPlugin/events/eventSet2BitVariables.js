export const id = "MINI_SET_TWO_BIT_VARIABLES";
export const name = "Variable Set 2-Bit Values";
export const groups = ["EVENT_GROUP_VARIABLES"];
export const fields = [
    {
      key: "vectorX",
      type: "variable",
      defaultValue: "LAST_VARIABLE"
    },
    {
      key: "value1",
      label: "2-Bit Value 1",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 3,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "value2",
      label: "2-Bit Value 2",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 3,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "value3",
      label: "2-Bit Value 3",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 3,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "value4",
      label: "2-Bit Value 4",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 3,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "value5",
      label: "2-Bit Value 5",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 3,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "value6",
      label: "2-Bit Value 6",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 3,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "value7",
      label: "2-Bit Value 7",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 3,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      label: "Note: Each value cannot exceed 3.",
    }
];
export const compile = (input, helpers) => {
    const { variableSetToValue } = helpers;
    const { vectorX, value1, value2, value3, value4, value5, value6, value7 } = input;
    variableSetToValue(vectorX, (value7.value * 4096) + (value6.value * 1024) + (value5.value * 256) + (value4.value * 64) + (value3.value * 16) + (value2.value * 4) + value1.value);
};