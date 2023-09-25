import path from "node:path";
import "@kickstartds/ds-agency/global.client.js";

import { useEleventy } from "@kickstartds/eleventy-plugin-kickstartds/useEleventy";
import { navigation } from "@11ty/eleventy-navigation";
import { PageWrapper as Page } from "@kickstartds/ds-agency/page-wrapper";
import { Header } from "@kickstartds/ds-agency/header";
import { Footer } from "@kickstartds/ds-agency/footer";

export const PageWrapper = ({ children }) => {
  const data = useEleventy();
  const eleventyNav = navigation.find(data.collections.all);
  const headerMainNav = eleventyNav.map(({ url, title }) => ({
    href: url,
    label: title,
  }));
  const gitHubPageUrl = path.join(
    "https://github.com/kickstartDS/11ty-starter/blob/main",
    data.page.inputPath
  );

  return (
    <Page>
      <Header logo={data.logo} navItems={headerMainNav} />
      {children}
      <Footer
        logo={data.logo}
        navItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about-us" },
          { label: "Services", href: "/services" },
          { label: "Showcases", href: "/showcases" },
          { label: "Blog", href: "/blog" },
          { label: "Disclaimer", href: "/disclaimer/" },
          { label: "Storybook", href: "https://main--64f08cbba622af835d382b4f.chromatic.com/", target: "_blank" },
          { label: "Page Source", href: gitHubPageUrl, target: "_blank" },
        ]}
      />
    </Page>
  );
};
