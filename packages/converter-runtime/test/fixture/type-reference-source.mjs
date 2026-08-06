// Produces an imported type ...
export default {
  id: "TypeReferenceSource",
  converters: [{ id: "toLuxon", from: "Edm.DateTimeOffset", to: { module: "luxon", type: "DateTime" } }],
};
