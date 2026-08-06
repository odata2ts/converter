// Produces a module-qualified type using the shorthand ...
export default {
  id: "TypeReferenceSource",
  converters: [{ id: "toLuxonShorthand", from: "Edm.DateTimeOffset", to: "luxon.DateTime" }],
};
