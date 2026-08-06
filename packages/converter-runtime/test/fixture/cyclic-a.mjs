// Maps Edm.String onto an intermediate type ...
export default {
  id: "CyclicA",
  converters: [{ id: "toIntermediateConverter", from: "Edm.String", to: "IntermediateType" }],
};
