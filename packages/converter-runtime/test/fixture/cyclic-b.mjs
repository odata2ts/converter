// ... which this one maps straight back, closing the loop.
export default {
  id: "CyclicB",
  converters: [{ id: "backToStringConverter", from: "IntermediateType", to: "Edm.String" }],
};
