// The two cases the dotted shorthand cannot express.
export default {
  id: "TypeReference",
  converters: [
    // a type living in a namespace: splitting "bignumber.js.BigNumber.Instance" at the last dot
    // would yield the module "bignumber.js.BigNumber"
    { id: "toNamespacedType", from: "Edm.Decimal", to: { module: "bignumber.js", type: "BigNumber.Instance" } },
    // a global that needs no import at all, yet carries a dot
    { id: "toGlobalType", from: "Edm.String", to: { type: "Intl.DateTimeFormat" } },
  ],
};
