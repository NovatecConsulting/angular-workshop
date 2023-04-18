// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Angular Workshop",
  tagline: "Der Weg in die digitale Zukunft",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://novatecconsulting.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/angular-workshop/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NovatecConsulting", // Usually your GitHub org/user name.
  projectName: "angular-workshop", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Angular Workshop",
        logo: {
          alt: "Novatec Logo",
          src: "img/logo.svg",
          srcDark: "img/logo_w.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/NovatecConsulting/angular-workshop",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Novatec Logo",
          src: "img/logo_w.svg",
          href: "https://novatec-gmbh.de",
          width: 160,
        },
        links: [
          {
            items: [
              {
                html: `
<div class="address">Novatec Consulting GmbH<br>Bertha-Benz-Platz 1<br>D-70771 Leinfelden-Echterdingen</div>
<div class="contact"><a class="link -text -can-hover" href="tel:+49 711 22040-700">+49 711 22040-700</a></div>
<div class="mail"><a class="link -text -can-hover" href="mailto:info@novatec-gmbh.de">info@novatec-gmbh.de</a></div>`,
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Website",
                href: "https://www.novatec-gmbh.de",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/novatecgmbh",
              },
              {
                label: "GitHub",
                href: "https://github.com/NovatecConsulting",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Angular Workshop, Novatec Consulting GmbH.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
