export const id = "MINI_SET_EIGHT_BIT_VARIABLES";
export const name = "Variable Set 8-Bit Values";
export const groups = ["EVENT_GROUP_VARIABLES"];
export const fields = [
    {
      key: "vectorX",
      type: "variable",
      defaultValue: "LAST_VARIABLE"
    },
    {
      key: "vectorY",
      label: "8-Bit Value 1",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 255,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      key: "vectorZ",
      label: "8-Bit Value 2",
      type: "union",
      types: ["number", "variable", "property"],
      defaultType: "number",
      min: 0,
      max: 255,
      defaultValue: {
        number: 0,
        variable: "LAST_VARIABLE",
        property: "$self$:xpos"
      },
      width: "50%",
    },
    {
      label: "Note: The combined total of both values must be <= 382. Each value cannot exceed 255.",
    }
];
export const compile = (input, helpers) => {
    const { variableSetToValue } = helpers;
    const { vectorX, vectorY, vectorZ } = input;
    variableSetToValue(vectorX, vectorZ.value * 256 + vectorY.value);
};