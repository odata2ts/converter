// A TypeReference without the mandatory "type".
export default {
  id: "InvalidTypeReference",
  converters: [{ id: "noTypeConverter", from: "Edm.String", to: { module: "luxon" } }],
};
