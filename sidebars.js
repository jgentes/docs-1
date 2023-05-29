// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  sidebar: [
    {
      type: "category",
      label: "Get started",
      items: [{ type: "autogenerated", dirName: "get-started" }],
    },
    {
      type: "category",
      label: "CLI & SDK",
      items: [{ type: "autogenerated", dirName: "cli" }],
    },
    {
      type: "category",
      label: "Subscription",
      items: [{ type: "autogenerated", dirName: "subscription" }],
    },
    {
      type: "category",
      label: "Flakiness",
      items: [{ type: "autogenerated", dirName: "flakiness" }],
    },
    {
      type: "category",
      label: "Integration Guides",
      link: { type: "generated-index" },
      items: [{ type: "autogenerated", dirName: "integrations" }],
    },
    {
      type: "category",
      label: "CI Guides",
      link: { type: "generated-index" },
      items: [{ type: "autogenerated", dirName: "ci-guides" }],
    },
    {
      type: "category",
      label: "Community",
      items: [
        "community/about-us",
        "community/contact-us",
        {
          type: "link",
          label: "GitHub",
          href: "https://github.com/argos-ci/argos",
        },
        {
          type: "link",
          label: "Discord",
          href: "https://discord.gg/pK79sv85Vg",
        },
        {
          type: "link",
          label: "Twitter",
          href: "https://twitter.com/argos_ci",
        },
      ],
    },
    {
      type: "category",
      label: "Legal",
      items: [
        {
          type: "link",
          label: "Security",
          href: "https://www.argos-ci.com/security",
        },
        {
          type: "link",
          label: "Privacy",
          href: "https://www.argos-ci.com/privacy",
        },
        {
          type: "link",
          label: "Terms",
          href: "https://www.argos-ci.com/terms",
        },
      ],
    },
  ],
};

module.exports = sidebars;
