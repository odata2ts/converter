// ... which this one picks up again, once through each form.
export default {
  id: "TypeReferenceTarget",
  converters: [{ id: "fromLuxonExplicit", from: { module: "luxon", type: "DateTime" }, to: "string" }],
};
