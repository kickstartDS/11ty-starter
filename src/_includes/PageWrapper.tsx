import path from "node:path";
import "@kickstartds/ds-agency/global.client.js";

import { useEleventy } from "@kickstartds/eleventy-plugin-kickstartds/useEleventy";
import { navigation } from "@11ty/eleventy-navigation";
import { PageWrapper as Page } from "@kickstartds/ds-agency/page-wrapper";
import { Header } from "@kickstartds/ds-agency/header";
import { Footer } from "@kickstartds/ds-agency/footer";

export const PageWrapper = ({ floatingHeader = false, children }) => {
  const data = useEleventy();
  const eleventyNav = navigation.find(data.collections.all);
  const headerMainNav = eleventyNav.map(({ url, title }) => ({
    href: url,
    label: title,
  }));
  const gitHubPageUrl = `https://github.com/kickstartDS/11ty-starter/blob/main/${data.page.inputPath}`;

  return (
    <Page>
      <Header logo={data.logo} floating={floatingHeader} />
      {children}
      <Footer
        logo={data.logo}
        navItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about-us" },
          { label: "Services", href: "/services" },
          { label: "Showcases", href: "/showcases" },
          { label: "Blog", href: "/blog" },
          { label: "Disclaimer", href: "/disclaimer" },
          {
            label: "Storybook",
            href: "https://main--64f08cbba622af835d382b4f.chromatic.com/",
            target: "_blank",
          },
          { label: "Page Source", href: gitHubPageUrl, target: "_blank" },
          { label: "Home-Paid", href: "/index_paid" },
          { label: "About-Paid", href: "/about-us_paid" },
          { label: "Services-Paid", href: "/services_paid" },
          { label: "Showcases-Paid", href: "/showcases_paid" },
          // { label: "Blog-Paid", href: "/blog_paid" },
          { label: "Disclaimer-Paid", href: "/disclaimer_paid" },
        ]}
      />
    </Page>
  );
};
