import "@kickstartds/ds-agency/global.client.js";

import { useEleventy } from "@kickstartds/eleventy-plugin-kickstartds/useEleventy";
import { PageWrapper as Page } from "@kickstartds/ds-agency/page-wrapper";
import { Header } from "@kickstartds/ds-agency/header";
import { Footer } from "@kickstartds/ds-agency/footer";
import { Disclaimer } from "./disclaimer/Disclaimer";
import { HeadlineLevelProvider } from "./headline/HeadlineLevelContext";

export const PageWrapper = ({ floatingHeader = false, children }) => {
  const data = useEleventy();
  // const eleventyNav = navigation.find(data.collections.all);
  // const headerMainNav = eleventyNav.map(({ url, title }) => ({
  //   href: url,
  //   label: title,
  // }));
  const gitHubPageUrl = `https://github.com/kickstartDS/11ty-starter/blob/main/${data.page.inputPath}`;

  return (
    <Page>
      <Header
        logo={data.logo}
        floating={floatingHeader}
        navItems={[
          { label: "Home", href: "/index" },
          { label: "About", href: "/about-us" },
          { label: "Services", href: "/services" },
          { label: "Showcases", href: "/showcases" },
          { label: "Blog", href: "/blog" },
          {
            label: "Storybook",
            href: "https://storybook.basic.design-system.agency/",
          },
        ]}
      />
      <HeadlineLevelProvider>{children}</HeadlineLevelProvider>
      <Disclaimer />
      <Footer
        logo={data.logo}
        navItems={[
          { label: "Home", href: "/index" },
          { label: "About", href: "/about-us" },
          { label: "Services", href: "/services" },
          { label: "Showcases", href: "/showcases" },
          { label: "Blog", href: "/blog" },
          {
            label: "Storybook",
            href: "https://storybook.basic.design-system.agency/",
            target: "_blank",
          },
          { label: "Page Source", href: gitHubPageUrl, target: "_blank" },
          //TBD add Link properly
          {
            label: "Disclaimer",
            href: "https://about.design-system.agency/",
          },
        ]}
      />
    </Page>
  );
};
