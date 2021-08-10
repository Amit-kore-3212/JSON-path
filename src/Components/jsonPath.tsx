import React, { useState } from "react";
import { useEffect } from "react";
var jlp = require("json-list-paths");

const obj: any = {
  description:
    "A single transaction - for example, a sales invoice or purchase order",
  type: "object",
  properties: {
    id: {
      format: "int64",
      description: "The unique ID number of this transaction",
      type: "integer",
    },
    name: {
      type: "object",
      properties: {
        address: {
          type: "string",
        },
      },
    },
    code: {
      description:
        "A unique customer-provided code identifying this transaction",
      type: "string",
    },
    companyId: {
      description:
        "The unique ID number of the company that recorded this transaction",
      type: "integer",
      format: "int32",
    },
    date: {
      format: "date",
      description: "The date on which this transaction occurred",
      type: "string",
    },
    paymentDate: {
      format: "date",
      description: "PaymentDate",
      type: "string",
    },
    status: {
      description: "The status of the transaction",
      enum: [
        "Temporary",
        "Saved",
        "Posted",
        "Committed",
        "Cancelled",
        "Adjusted",
        "Queued",
        "PendingApproval",
        "Any",
      ],
      type: "string",
    },
    type: {
      description: "The type of the transaction",
      enum: [
        "SalesOrder",
        "SalesInvoice",
        "PurchaseOrder",
        "PurchaseInvoice",
        "ReturnOrder",
        "ReturnInvoice",
        "InventoryTransferOrder",
        "InventoryTransferInvoice",
        "ReverseChargeOrder",
        "ReverseChargeInvoice",
        "Any",
      ],
      type: "string",
    },
    batchCode: {
      description:
        "If this transaction was created as part of a batch, this code indicates which batch",
      type: "string",
    },
    currencyCode: {
      description: "Currency Code",
      type: "string",
    },
    customerUsageType: {
      description: "Customer Usage Type",
      type: "string",
    },
    entityUseCode: {
      description: "The entity use code for this transaction",
      type: "string",
    },
    customerVendorCode: {
      description: "Customer Vendor Code",
      type: "string",
    },
    customerCode: {
      description:
        "Unique code identifying the customer that requested this transaction",
      type: "string",
    },
    exemptNo: {
      description: "Exempt Number",
      type: "string",
    },
    reconciled: {
      description: "Is Reconciled",
      type: "boolean",
    },
    locationCode: {
      description: "Location Code",
      type: "string",
    },
    reportingLocationCode: {
      description:
        "For customers who use location-based tax reporting, this field controls how this transaction will be filed for multi-location tax filings",
      type: "string",
    },
    purchaseOrderNo: {
      description:
        "The customer-supplied purchase order number of this transaction",
      type: "string",
    },
    referenceCode: {
      description: "A user-defined reference code for this transaction",
      type: "string",
    },
    salespersonCode: {
      description: "The salesperson who provided this transaction",
      type: "string",
    },
    taxOverrideType: {
      description:
        "If a tax override was applied to this transaction, indicates what type of tax override was applied",
      enum: ["None", "TaxAmount", "Exemption", "TaxDate", "AccruedTaxAmount"],
      type: "string",
    },
    taxOverrideAmount: {
      format: "double",
      description:
        "If a tax override was applied to this transaction, indicates the amount of tax that was requested by the customer",
      type: "number",
    },
    taxOverrideReason: {
      description:
        "If a tax override was applied to this transaction, indicates the reason for the tax override",
      type: "string",
    },
    totalAmount: {
      format: "double",
      description: "Total Amount",
      type: "number",
    },
    totalExempt: {
      format: "double",
      description: "Total Exempt",
      type: "number",
    },
    totalDiscount: {
      format: "double",
      description:
        "The total amount of discounts applied to all lines within this transaction",
      type: "number",
    },
    totalTax: {
      format: "double",
      description: "Total Tax",
      type: "number",
    },
    totalTaxable: {
      format: "double",
      description: "Total Taxable",
      type: "number",
    },
    totalTaxCalculated: {
      format: "double",
      description: "Total Tax Calculated",
      type: "number",
    },
    adjustmentReason: {
      description: "Adjustment Reason",
      enum: [
        "NotAdusted",
        "SourcingIssue",
        "ReconciledWithGeneralLedger",
        "ExemptCertApplied",
        "PriceAdjusted",
        "ProductReturned",
        "ProductExchanged",
        "BadDebt",
        "Other",
        "Offline",
      ],
      type: "string",
    },
    adjustmentDescription: {
      description: "Adjustment Description",
      type: "string",
    },
    locked: {
      description: "Is Locked",
      type: "boolean",
    },
    region: {
      description: "Region",
      type: "string",
      minLength: 2,
      maxLength: 3,
    },
    country: {
      description: "Country",
      type: "string",
      minLength: 2,
      maxLength: 2,
    },
    version: {
      format: "int32",
      description: "Version",
      type: "integer",
    },
    softwareVersion: {
      description: "SoftwareVersion",
      type: "string",
    },
    originAddressId: {
      format: "int64",
      description: "Origin Address Id",
      type: "integer",
    },
    destinationAddressId: {
      format: "int64",
      description: "Destination Address Id",
      type: "integer",
    },
    exchangeRateEffectiveDate: {
      format: "date",
      description: "ExchangeRateEffDate",
      type: "string",
    },
    exchangeRate: {
      format: "double",
      description: "ExchangeRate",
      type: "number",
    },
    isSellerImporterOfRecord: {
      description: "Is Seller Importer Of Record",
      type: "boolean",
    },
    description: {
      description: "Description",
      type: "string",
    },
    email: {
      description: "Email address associated with this transaction",
      type: "string",
    },
    businessIdentificationNo: {
      description:
        "VAT business identification number used for this transaction",
      type: "string",
    },
    modifiedDate: {
      format: "date-time",
      description:
        "The date/time when this record was last modified (read only)",
      type: "string",
    },
    modifiedUserId: {
      format: "int32",
      description:
        "The user ID of the user who last modified this record (read only)",
      type: "integer",
    },
    taxDate: {
      format: "date-time",
      description: "TaxDate",
      type: "string",
    },
    lines: {
      description: "A list of lines in this transaction",
      type: "array",
      items: {
        description: "One line item on this transaction",
        type: "object",
        properties: {
          id: {
            format: "int64",
            description: "DocumentLineId",
            type: "integer",
          },
          transactionId: {
            format: "int64",
            description: "DocumentId",
            type: "integer",
          },
          lineNumber: {
            description: "LineNo",
            type: "string",
          },
          method: {
            description: "AccountingMethodId",
            enum: ["Accrual", "Cash"],
            type: "string",
          },
          boundaryOverrideId: {
            format: "int32",
            description: "BoundaryOverrideId",
            type: "integer",
          },
          customerUsageType: {
            description: "CustomerUsageType",
            type: "string",
          },
          description: {
            description: "Description",
            type: "string",
          },
          destinationAddressId: {
            format: "int64",
            description: "DestinationAddressId",
            type: "integer",
          },
          discountAmount: {
            format: "double",
            description: "DiscountAmount",
            type: "number",
          },
          discountTypeId: {
            format: "int32",
            description: "DiscountTypeId",
            type: "integer",
          },
          exemptAmount: {
            format: "double",
            description: "ExemptAmount",
            type: "number",
          },
          exemptCertId: {
            format: "int32",
            description: "ExemptCertId",
            type: "integer",
          },
          exemptNo: {
            description: "ExemptNo",
            type: "string",
          },
          isItemTaxable: {
            description: "IsItemTaxable",
            type: "boolean",
          },
          isSSTP: {
            description: "IsSSTP",
            type: "boolean",
          },
          itemCode: {
            description: "ItemCode",
            type: "string",
          },
          lineAmount: {
            format: "double",
            description: "LineAmount",
            type: "number",
          },
          originAddressId: {
            format: "int64",
            description: "OriginAddressId",
            type: "integer",
          },
          quantity: {
            format: "double",
            description: "Quantity",
            type: "number",
          },
          ref1: {
            description: "Ref1",
            type: "string",
          },
          ref2: {
            description: "Ref2",
            type: "string",
          },
          reportingDate: {
            format: "date-time",
            description: "ReportingDate",
            type: "string",
          },
          revAccount: {
            description: "RevAccount",
            type: "string",
          },
          sourcing: {
            description: "Sourcing",
            enum: ["Destination", "Origin"],
            type: "string",
          },
          tax: {
            format: "double",
            description: "Tax",
            type: "number",
          },
          taxableAmount: {
            format: "double",
            description: "TaxableAmount",
            type: "number",
          },
          taxCalculated: {
            format: "double",
            description: "TaxCalculated",
            type: "number",
          },
          taxCode: {
            description: "TaxCode",
            type: "string",
          },
          taxCodeId: {
            format: "int32",
            description: "TaxCodeId",
            type: "integer",
          },
          taxDate: {
            format: "date-time",
            description: "TaxDate",
            type: "string",
          },
          taxEngine: {
            description: "TaxEngine",
            type: "string",
          },
          taxOverrideType: {
            description: "TaxOverrideTypeId",
            enum: [
              "None",
              "TaxAmount",
              "Exemption",
              "TaxDate",
              "AccruedTaxAmount",
            ],
            type: "string",
          },
          taxOverrideAmount: {
            format: "double",
            description: "TaxOverrideAmount",
            type: "number",
          },
          taxOverrideReason: {
            description: "TaxOverrideReason",
            type: "string",
          },
          taxIncluded: {
            description: "TaxIncluded",
            type: "boolean",
          },
          details: {
            description: "Details",
            type: "array",
            items: {
              description: "An individual tax detail element for this line",
              type: "object",
              properties: {
                id: {
                  format: "int64",
                  description: "DocumentLineDetailId",
                  type: "integer",
                },
                transactionLineId: {
                  format: "int64",
                  description: "DocumentLineId",
                  type: "integer",
                },
                transactionId: {
                  format: "int64",
                  description: "DocumentId",
                  type: "integer",
                },
                addressId: {
                  format: "int64",
                  description: "AddressId",
                  type: "integer",
                },
                country: {
                  description: "Country",
                  type: "string",
                },
                region: {
                  description: "Region",
                  type: "string",
                },
                countyFIPS: {
                  description: "CountyFips",
                  type: "string",
                },
                stateFIPS: {
                  description: "StateFips",
                  type: "string",
                },
                exemptAmount: {
                  format: "double",
                  description: "ExemptAmount",
                  type: "number",
                },
                exemptReasonId: {
                  format: "int32",
                  description: "ExemptReasonId",
                  type: "integer",
                },
                inState: {
                  description: "InState",
                  type: "boolean",
                },
                jurisCode: {
                  description: "JurisCode",
                  type: "string",
                },
                jurisName: {
                  description: "JurisName",
                  type: "string",
                },
                jurisdictionId: {
                  format: "int32",
                  description: "JurisdictionId",
                  type: "integer",
                },
                jurisType: {
                  description: "JurisTypeId",
                  enum: ["STA", "CTY", "CIT", "STJ", "CNT"],
                  type: "string",
                },
                nonTaxableAmount: {
                  format: "double",
                  description: "NonTaxableAmount",
                  type: "number",
                },
                nonTaxableRuleId: {
                  format: "int32",
                  description: "NonTaxableRuleId",
                  type: "integer",
                },
                nonTaxableType: {
                  description: "NonTaxableTypeId",
                  enum: [
                    "RateRule",
                    "RateOverrideRule",
                    "BaseRule",
                    "ExemptEntityRule",
                    "ProductTaxabilityRule",
                    "NexusRule",
                  ],
                  type: "string",
                },
                rate: {
                  format: "double",
                  description: "Rate",
                  type: "number",
                },
                rateRuleId: {
                  format: "int32",
                  description: "RateRuleId",
                  type: "integer",
                },
                rateSourceId: {
                  format: "int32",
                  description: "RateSourceId",
                  type: "integer",
                },
                signatureCode: {
                  description: "SignatureCode",
                  type: "string",
                },
                serCode: {
                  description: "SERCode",
                  type: "string",
                },
                sourcing: {
                  description: "Sourcing",
                  enum: ["Destination", "Origin"],
                  type: "string",
                },
                stateAssignedNo: {
                  description: "StateAssignedNo",
                  type: "string",
                },
                tax: {
                  format: "double",
                  description: "Tax",
                  type: "number",
                },
                taxableAmount: {
                  format: "double",
                  description: "TaxableAmount",
                  type: "number",
                },
                taxType: {
                  description: "TaxTypeId",
                  enum: [
                    "ConsumerUse",
                    "Excise",
                    "Fee",
                    "Input",
                    "Nonrecoverable",
                    "Output",
                    "Rental",
                    "Sales",
                    "Use",
                  ],
                  type: "string",
                },
                taxName: {
                  description: "TaxName",
                  type: "string",
                },
                taxAuthorityTypeId: {
                  format: "int32",
                  description: "TaxAuthorityTypeId",
                  type: "integer",
                },
                taxRegionId: {
                  format: "int32",
                  description: "TaxRegionId",
                  type: "integer",
                },
                taxCalculated: {
                  format: "double",
                  description: "TaxCalculated",
                  type: "number",
                },
                taxOverride: {
                  format: "double",
                  description: "TaxOverride",
                  type: "number",
                },
                rateType: {
                  description: "RateTypeId",
                  enum: [
                    "ReducedA",
                    "ReducedB",
                    "Food",
                    "General",
                    "IncreasedStandard",
                    "LinenRental",
                    "Medical",
                    "Parking",
                    "SuperReduced",
                    "ReducedR",
                    "Standard",
                    "Zero",
                  ],
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
    addresses: {
      description: "A list of addresses used in this transaction",
      type: "array",
      items: {
        description: "An address used within this transaction",
        type: "object",
        properties: {
          id: {
            format: "int64",
            description: "DocumentAddressId",
            type: "integer",
          },
          transactionId: {
            format: "int64",
            description: "DocumentId",
            type: "integer",
          },
          boundaryLevel: {
            description: "BoundaryLevel",
            enum: ["Address", "Zip9", "Zip5"],
            type: "string",
          },
          line1: {
            description: "AddressLine1",
            type: "string",
          },
          line2: {
            description: "AddressLine2",
            type: "string",
          },
          line3: {
            description: "AddressLine3",
            type: "string",
          },
          city: {
            description: "City",
            type: "string",
          },
          region: {
            description: "Region",
            type: "string",
          },
          postalCode: {
            description: "PostalCode",
            type: "string",
          },
          country: {
            description: "Country",
            type: "string",
          },
          taxRegionId: {
            format: "int32",
            description: "TaxRegionId",
            type: "integer",
          },
        },
      },
    },
    locationTypes: {
      description: "A list of location types in this transaction",
      type: "array",
      items: {
        type: "object",
        description: "",
        properties: {
          documentLocationTypeId: {
            description:
              "Location type ID for this location type in transaction",
            type: "integer",
            format: "int64",
          },
          documentId: {
            description: "Transaction ID",
            type: "integer",
            format: "int64",
          },
          documentAddressId: {
            description: "Address ID for the transaction",
            type: "integer",
            format: "int64",
          },
          locationTypeCode: {
            type: "string",
            description: "Location type code",
          },
        },
      },
    },
    summary: {
      description: "Contains a summary of tax on this transaction",
      type: "array",
      items: {
        type: "object",
        description: "Summary information about an overall transaction",
        properties: {
          country: {
            description: "",
            type: "string",
            minLength: 2,
            maxLength: 2,
          },
          region: {
            description:
              "Two or three character ISO region, state or province code, if applicable",
            type: "string",
            minLength: 2,
            maxLength: 3,
          },
          jurisType: {
            description: "The type of jurisdiction that collects this tax",
            type: "string",
            enum: ["Country", "State", "County", "City", "Special"],
          },
          jurisCode: {
            description: "Jurisdiction Code for the taxing jurisdiction",
            type: "string",
          },
          jurisName: {
            description: "The name of the jurisdiction that collects this tax",
            type: "string",
          },
          taxAuthorityType: {
            description:
              "The unique ID of the Tax Authority Type that collects this tax",
            type: "integer",
            format: "int32",
          },
          stateAssignedNo: {
            description:
              "The state assigned number of the jurisdiction that collects this tax",
            type: "string",
          },
          taxType: {
            description: "The tax type of this tax",
            type: "string",
          },
          taxSubType: {
            description: "The tax subtype of this tax",
            type: "string",
          },
          taxName: {
            description: "The name of the tax",
            type: "string",
          },
          taxGroup: {
            description: "Group code when special grouping is enabled",
            type: "string",
          },
          rateType: {
            description:
              "DEPRECATED - Date: 3/1/2018, Version: 18.3, Message: Please use rateTypeCode instead. Indicates the tax rate type.",
            type: "string",
            enum: [
              "ReducedA",
              "ReducedB",
              "Food",
              "General",
              "IncreasedStandard",
              "LinenRental",
              "Medical",
              "Parking",
              "SuperReduced",
              "ReducedR",
              "Standard",
              "Leasing",
              "Services",
              "Zero",
            ],
          },
          rateTypeCode: {
            description: "Indicates the code of the rate type",
            type: "string",
          },
          taxable: {
            description: "Tax Base - The adjusted taxable amount",
            type: "number",
          },
          rate: {
            description:
              "Tax Rate - The rate of taxation, as a fraction of the amount",
            type: "number",
          },
          tax: {
            description: "Tax amount - The calculated tax ",
            type: "number",
          },
          taxCalculated: {
            description:
              "The amount of tax that AvaTax calculated for the transaction",
            type: "number",
          },
          nonTaxable: {
            description: "The amount of the transaction that was non-taxable",
            type: "number",
          },
          exemption: {
            description: "The amount of the transaction that was exempt",
            type: "number",
          },
        },
      },
    },
    taxDetailsByTaxType: {
      description: "Contains the tax details per tax type",
      type: "array",
      items: {
        type: "object",
        description: "Tax Details by Tax Type",
        properties: {
          taxType: {
            description: "Tax Type",
            type: "string",
          },
          totalTaxable: {
            description: "Total taxable amount by tax type",
            type: "number",
          },
          totalExempt: {
            description: "Total exempt by tax type",
            type: "number",
          },
          totalNonTaxable: {
            description: "Total non-exempt by tax type",
            type: "number",
          },
          totalTax: {
            description: "Total tax by tax type",
            type: "number",
          },
          taxSubTypeDetails: {
            description: "Tax Details by Tax subtype",
            type: "object",
            properties: {
              taxSubType: {
                description: "Tax subType",
                type: "string",
              },
              totalTaxable: {
                description: "Total taxable amount by tax type",
                type: "number",
              },
              totalExempt: {
                description: "Total exempt by tax type",
                type: "number",
              },
              totalNonTaxable: {
                description: "Total non-exempt by tax type",
                type: "number",
              },
              totalTax: {
                description: "Total tax by tax type",
                type: "number",
              },
            },
          },
        },
      },
    },
    parameters: {
      description:
        "Contains a list of extra parameters that were set when the transaction was created",
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          value: {
            type: "string",
          },
          unit: {
            type: "string",
          },
        },
      },
    },
    messages: {
      description:
        "List of informational and warning messages regarding this API call",
      type: "array",
      items: {
        description:
          "Informational or warning messages returned by AvaTax with a transaction",
        type: "object",
        properties: {
          summary: {
            description: "A brief summary of what this message tells us",
            type: "string",
          },
          details: {
            description:
              "Detailed information that explains what the summary provided",
            type: "string",
          },
          refersTo: {
            description:
              "Information about what object in your request this message refers to",
            type: "string",
          },
          severity: {
            description:
              "A category that indicates how severely this message affects the results",
            type: "string",
          },
          source: {
            description:
              "The name of the code or service that generated this message",
            type: "string",
          },
        },
      },
    },
    invoiceMessages: {
      description:
        "Invoice messages associated with this document. Currently, this stores legally-required VAT messages",
      type: "array",
      items: {
        description: "",
        type: "object",
        properties: {
          content: {
            description: "The content of the invoice message",
            type: "string",
          },
          lineNumbers: {
            description: "The applicable tax line numbers and codes",
            type: "array",
          },
        },
      },
    },
  },
};

export const JsonPathFinder = () => {
  const [paths, setPath] = useState<any>("");
  // const result = JSONPath({ path: path, json });
  let JsonPathList: any = [];
  // JsonPathList = jlp(obj)
  //   .reduce({
  //     replace: [
  //       {
  //         path: ".items",
  //         key: /^([A-Z]+).*/,
  //         replace: "$1_n",
  //         stop: true,
  //       },
  //     ],
  //   })
  //   .list();
  var path: any = ({ properties }: any) =>
    Object.keys(properties).reduce(
      (acc, key) =>
        acc.concat(
          properties[key].type !== "object"
            ? key
            : path(properties[key]).map((p: any) => `${key}.${p}`)
        ),
      []
    );

  JsonPathList = path(obj);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPath(event.target.value);
  };
  const converted = JsonPathList.map((ele: string) => {
    const lastIndex = ele.lastIndexOf(".");
    const sliced = ele.slice(lastIndex == 0 ? 1 : lastIndex + 1);
    return {
      title: sliced,
      value: `x.${ele}`,
    };
  });
  console.log(converted);
  return (
    <React.Fragment>
      <h2>JSON-Path</h2>
      <select onChange={handleChange}>
        {Object.entries(JsonPathList).map(([key, value]) => {
          return <option>obj.{value}</option>;
        })}
      </select>
    </React.Fragment>
  );
};
