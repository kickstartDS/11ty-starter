import "@kickstartds/ds-agency/global.client.js";

import { useEleventy } from "@kickstartds/eleventy-plugin-kickstartds/useEleventy";
import { navigation } from "@11ty/eleventy-navigation";
import { PageWrapper as Page } from "@kickstartds/ds-agency/page-wrapper";
import { Header } from "@kickstartds/ds-agency/header";

export const PageWrapper = ({ children }) => {
  const data = useEleventy();
  const eleventyNav = navigation.find(data.collections.all);
  const headerMainNav = eleventyNav.map(({ url, title }) => ({
    href: url,
    label: title,
  }));
  return (
    <Page>
      <Header
        logo={{
          src: "/static/logo.svg",
          alt: "Systemics Logo",
          width: 176,
          height: 40,
          lazy: false,
        }}
        navItems={headerMainNav}
      />
      {children}
    </Page>
  );
};
