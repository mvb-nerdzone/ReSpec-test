let respecConfig = {
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "WV",
  specType: "HR",
  pubDomain: "ep",
  shortName: "ReSpecTest",
  publishDate: "2023-09-01",
  publishVersion: "0.0.5",
  
  previousVersion: "0.0.4",
  previousPublishDate: "2023-07-01",
  previousMaturity: "WV",
  latestVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName"],
  thisVersion: ["nl_organisationPublishURL", "pubDomain", "/", "specStatus", "-", "specType", "-", "shortName", "-", "publishDate"],
  prevVersion: ["nl_organisationPublishURL", "pubDomain", "/", "previousMaturity", "-", "specType", "-", "shortName", "-", "previousPublishDate"],
  
  title: "ReSpec test",
  content: {"ch01": "informative", "ch02": "", "mermaid": ""},
  editors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  authors:
    [
      {
        name: "Logius Standaarden",
        company: "Logius",
        companyURL: "https://github.com/Logius-standaarden",
      }
    ],
  github: "https://github.com/Logius-standaarden/ReSpec-template",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
};
