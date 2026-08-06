export const validConverter = { id: "validConverter", from: "Edm.String", to: "number" };

// Exports that are reachable via "use", but are no converters at all.
export const notAConverter = "1.0.0";
export const halfConverter = { id: "halfConverter", from: "Edm.String" };

// The package itself is well formed, the second converter within it is not: "to" is missing.
export default {
  id: "InvalidConverter",
  converters: [validConverter, { id: "brokenConverter", from: "Edm.Boolean" }],
};
