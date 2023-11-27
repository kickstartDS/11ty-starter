import { Section } from "@kickstartds/ds-agency/section";
import { CtaPaid } from "@kickstartds/ds-agency/cta-paid";
import { Hero } from "@kickstartds/ds-agency/hero";
import { LogosPaid } from "@kickstartds/ds-agency/logos-paid";
import { Text } from "@kickstartds/ds-agency/text";
import { PageWrapper } from "./_includes/PageWrapper";
import { Mosaic } from "@kickstartds/ds-agency/components/mosaic/index.js";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Showcases Paid",
    order: 3,
  },
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section
      spaceBefore="none"
      spaceAfter="none"
      width="full"
      content={{
        mode: "list",
      }}
    >
      <Hero
        height="fullScreen"
        image={{
          alt: undefined,
          indent: "none",
          src: "https://picsum.photos/seed/kdsvisual/640/270",
          srcDesktop: "/static/img/close-up-young-business-team-working.png",
          srcMobile: "/static/img/close-up-young-business-team-working.png",
          srcTablet: "/static/img/close-up-young-business-team-working.png",
        }}
        largeHeadline
        overlay
        headline="Transformations powered by 💗, Innovation & Design Systems"
        sub="Selected showcases from Design Systems and headless Webs of the biggest global Enterprises 😁"
        textPosition="below"
      />
    </Section>
    <Section spaceBefore="none">
      <Text
        text={`Welcome to our showcase of success stories. Here, you'll discover how we've partnered with diverse organizations to revolutionize their digital landscapes. From creating bespoke design systems to implementing headless CMSs, our solutions have empowered brands to streamline processes, enhance user experiences, and foster brand consistency. Dive in to explore how we've turned challenges into opportunities, and visions into reality.`}
        align="center"
        style="highlight"
      />
    </Section>

    <Section
      style="accentTransition"
      spaceBefore="small"
      spaceAfter="none"
      width="max"
    >
      <Mosaic
        tiles={[
          {
            headline: "Speed and Scale",
            sub: "LaunchPad Audio Innovations",
            text: "Explore how we empowered LaunchPad, an AI-powered digital audio controller startup, with rapid landing page creation for market testing and a robust foundation for future growth.",
            image: "/static/img/showcases/preview_audio.png",
            backgroundColor: "#0101A3",
            button: {
              label: "See showcase",
              icon: "chevron-right",
              toggle: true,
            },
          },
          {
            headline: "Savigating the Headless Frontier for Brand Consistency",
            sub: "EcoTech Solutions",
            text: "See how we collaborated with EcoTech Solutions to set up a tailored Design System and migrate their main website to a headless CMS, enhancing brand credibility and saving valuable time.",
            image: "/static/img/showcases/preview_eco.png",
            backgroundColor: "#21331E",
            button: {
              target: "/showcase-eco_paid",
              label: "See showcase",
              icon: "chevron-right",
              toggle: true,
            },
          },
          {
            headline: "A Digital Transformation Love Story",
            sub: "TechFusion Enterprises",
            text: "Discover how we revolutionized TechFusion Enterprises' digital landscape by developing a tailored Design System. Our innovative approach saved them a year's worth of development time and harmonized their user experiences across all platforms.",
            image: "/static/img/showcases/preview_tfe.png",
            backgroundColor: "#670A82",
            button: {
              label: "See showcase",
              icon: "chevron-right",
              toggle: true,
            },
          },
        ]}
      />
    </Section>

    <Section backgroundColor="accent" style="anchorGlow" width="wide">
      <CtaPaid
        fullWidth
        align="center"
        largeHeadline
        headline="Ready to embark on a transformative digital journey?"
        text="Reach out to us for insights and solutions that seamlessly merge design systems and headless web architecture."
        buttons={[
          {
            label: "Contact us",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "date",
          },
        ]}
      />
    </Section>

    <Section
      spaceAfter="none"
      width="wide"
      headline={{
        align: "center",
        text: "**More Sucess Stories incoming**",
      }}
    >
      <LogosPaid
        align="center"
        logos={[
          {
            alt: "Logo 1",
            src: "/static/img/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/static/img/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/static/img/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logoipsum-286.svg",
          },
          {
            alt: "Logo 7",
            src: "/static/img/logoipsum-212.svg",
          },
          {
            alt: "Logo 8",
            src: "/static/img/logoipsum-217.svg",
          },
          {
            alt: "Logo 9",
            src: "/static/img/logoipsum-239.svg",
          },
          {
            alt: "Logo 10",
            src: "/static/img/logoipsum-244.svg",
          },
        ]}
        logosPerRow={4}
        tagline=""
      />
    </Section>

    <Section>
      <Text
        text={`Many thanks to Freepik. All website comps by [Freepik](https://www.freepik.com/free-psd/smart-home-app-web-template_16692832.htm#query=website%20mockup%20tech&position=0&from_view=search&track=ais).`}
        align="center"
      />
    </Section>
  </PageWrapper>
);
