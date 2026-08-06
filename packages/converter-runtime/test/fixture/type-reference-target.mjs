// ... which this one picks up through the very same reference.
export default {
  id: "TypeReferenceTarget",
  converters: [{ id: "fromLuxonReference", from: { module: "luxon", type: "DateTime" }, to: "string" }],
};
