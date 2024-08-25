import { ParamValueModel, ValueConverter } from "@odata2ts/converter-api";

export const exampleOfFixingConverter: ValueConverter<boolean, boolean> = {
  id: "exampleOfFixingConverter",
  from: "Edm.Boolean",
  to: "Edm.Boolean",
  convertFrom: (value: ParamValueModel<boolean>): ParamValueModel<boolean> => {
    // here you would do something to fix the type
    return value;
  },
  convertTo: (value: ParamValueModel<boolean>): ParamValueModel<boolean> => {
    // and here you would do something to unfix the type
    return value;
  },
};
