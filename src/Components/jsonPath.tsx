import React, { useState } from "react";
var jlp = require("json-list-paths");

const obj: any = {
  id: {
    name: "amit",
    college: {
      address: "something",
    },
  },
  qqq: "ABCDEFGHIJKLM",
  companyId: 334,
  date: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  paymentDate: "ABCDEFGHIJ",
  status: "Cancelled",
  type: "ReturnOrder",
  batchCode: "ABCDEFGHIJKLM",
  currencyCode: "ABCDEFGHIJKLMNOPQRSTUV",
  customerUsageType: "ABCDEFGHIJKLMNOPQRSTUV",
  entityUseCode: "ABCDEFGHIJKLM",
  customerVendorCode: "ABCDEFGHIJK",
  customerCode: "ABCDEFGHIJKLMNOPQRSTU",
  exemptNo: "ABCDEFG",
  reconciled: true,
  locationCode: "ABCDEFGHIJKLMNO",
  reportingLocationCode: "ABCDEFGHI",
  purchaseOrderNo: "ABCDEFGHIJKLMNOP",
  referenceCode: "ABCDEFGHIJKLM",
  salespersonCode: "ABCDEFGHIJKLMNOPQRSTUVW",
  taxOverrideType: "None",
  taxOverrideAmount: 308.0,
  taxOverrideReason: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  totalAmount: 349.75,
  totalExempt: 246.75,
  totalDiscount: 221.25,
  totalTax: -29.25,
  totalTaxable: 134.25,
  totalTaxCalculated: 366.5,
  adjustmentReason: "SourcingIssue",
  adjustmentDescription: "ABCD",
  locked: false,
  region: "AB",
  country: "AB",
  version: 991,
  softwareVersion: "ABCDEFGHIJKLMNOPQRSTUVWXYZAB",
  originAddressId: 474,
  destinationAddressId: -19,
  exchangeRateEffectiveDate: "ABCDEFGHIJKLMNOPQRSTUVWX",
  exchangeRate: 963.75,
  isSellerImporterOfRecord: false,
  description: "ABCDEFGHIJKLMNOPQRS",
  email: "ABCDEFGHIJKLMNOP",
  businessIdentificationNo: "ABCDEFGHIJKLMNOPQRSTUVWXYZA",
  modifiedDate: "ABCDEFGHIJKLMNOPQRSTUVWXYZABC",
  modifiedUserId: 777,
  taxDate: "ABCDEFGHIJKLMNOPQRSTUVWXYZA",
  lines: [],
  addresses: [],
  locationTypes: [],
  summary: [],
  taxDetailsByTaxType: [],
  parameters: [],
  messages: [],
  invoiceMessages: [],
};

export const JsonPathFinder = () => {
  const [path, setPath] = useState<any>("");
  // const result = JSONPath({ path: path, json });
  let JsonPathList = [];
  JsonPathList = jlp(obj)
    .reduce({
      replace: [
        {
          path: ".items",
          key: /^([A-Z]+).*/,
          replace: "$1_n",
          stop: true,
        },
      ],
    })
    .list();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPath(event.target.value);
  };
  const converted = JsonPathList.map((ele: string) => {
    const lastIndex = ele.lastIndexOf(".");
    const sliced = ele.slice(lastIndex == 0 ? 1 : lastIndex + 1);
    return {
      title: sliced,
      value: `x${ele}`,
    };
  });
  console.log(converted);
  return (
    <React.Fragment>
      <h2>JSON-Path</h2>
      <select onChange={handleChange}>
        {Object.entries(JsonPathList).map(([key, value]) => {
          return <option>obj{value}</option>;
        })}
      </select>
    </React.Fragment>
  );
};
