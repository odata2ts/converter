// The two cases the removed dot notation could not express.
export default {
  id: "TypeReference",
  converters: [
    // a type living in a namespace: "bignumber.js.BigNumber.Instance" used to resolve to the
    // module "bignumber.js.BigNumber"
    { id: "toNamespacedType", from: "Edm.Decimal", to: { module: "bignumber.js", type: "BigNumber.Instance" } },
    // a global that needs no import at all, yet carries a dot - a plain string is taken verbatim now
    { id: "toGlobalType", from: "Edm.String", to: "Intl.DateTimeFormat" },
  ],
};
