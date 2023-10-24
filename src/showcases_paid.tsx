import { Section } from "@kickstartds/ds-agency/section";
import { CtaPaid } from "@kickstartds/ds-agency/cta-paid";
import { Hero } from "@kickstartds/ds-agency/hero";
import { LogosPaid } from "@kickstartds/ds-agency/logos-paid";
import { Text } from "@kickstartds/ds-agency/text";
import { Image } from "@kickstartds/ds-agency/image";
import { PageWrapper } from "./_includes/PageWrapper";

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
  <PageWrapper>
    <Section width="default" align="left" mode="list">
      <Hero
        height="fullImage"
        image={{
          alt: undefined,
          indent: "none",
          src: "https://picsum.photos/seed/kdsvisual/640/270",
          srcDesktop: "/static/img/hero-below.png",
          srcMobile: "/static/img/hero.png",
          srcTablet: "/static/img/hero-below.png",
        }}
        largeHeadline
        overlay
        headline="Transformations powered by **💗**, **Innovation** & **Design Systems**"
        sub="Selected showcases from Design Systems and headless Webs of the biggest global Enterprises 😁"
        textPosition="below"
      />
      <Text
        text={`
Welcome to our showcase of success stories. Here, you'll discover how we've partnered with diverse organizations to revolutionize their digital landscapes. From creating bespoke design systems to implementing headless CMSs, our solutions have empowered brands to streamline processes, enhance user experiences, and foster brand consistency. Dive in to explore how we've turned challenges into opportunities, and visions into reality.
          `}
        layout="singleColumn"
      />
    </Section>

    <Section
      style="accent"
      width="wide"
      align="left"
      mode="list"
      headline="**01**"
    >
      <Image
        src="/static/img/showcases/comp_audio01.jpg"
        alt="Huge Logo of that fake reference customer"
      />
      <CtaPaid
        align="left"
        backgroundColor="#06081f"
        ctas={[
          {
            label: "See Showcase",
            icon: "chevron-right",
            target: "/showcase-launchpad_paid",
          },
        ]}
        headline="Speed and Scale"
        largeHeadline
        sub="LaunchPad Audio Innovations"
        text="Explore how we empowered LaunchPad, an AI-powered digital audio controller startup, with rapid landing page creation for market testing and a robust foundation for future growth."
        fullWidth
      />
    </Section>

    <Section width="wide" align="left" mode="list" headline="**02**">
      <Image
        src="/static/img/showcases/comp_eco01.jpg"
        alt="Huge Logo of that fake reference customer"
      />
      <CtaPaid
        align="left"
        headline="Savigating the Headless Frontier for Brand Consistency"
        sub="EcoTech Solutions"
        text={`See how we collaborated with EcoTech Solutions to set up a tailored Design System and migrate their main website to a headless CMS, enhancing brand credibility and saving valuable time.`}
        ctas={[
          {
            label: "See Showcase",
            icon: "chevron-right",
            target: "/showcase-eco_paid",
          },
        ]}
      />
    </Section>

    <Section
      style="accent"
      width="wide"
      align="left"
      mode="list"
      headline="**03**"
    >
      <Image
        src="/static/img/showcases/comp_tfe01.jpg"
        alt="Huge Logo of that fake reference customer"
      />
      <CtaPaid
        align="left"
        headline="A Digital Transformation Love Story"
        sub="TechFusion Enterprises"
        text={`Discover how we revolutionized TechFusion Enterprises' digital landscape by developing a tailored Design System. Our innovative approach saved them a year's worth of development time and harmonized their user experiences across all platforms.`}
        ctas={[
          {
            label: "See Showcase",
            icon: "chevron-right",
            target: "/showcase-techfusion_paid",
          },
        ]}
      />
    </Section>

    <Section style="default" width="wide">
      <CtaPaid
        align="left"
        headline="Ready to embark on a transformative digital journey?"
        text="Reach out to us for insights and solutions that seamlessly merge design systems and headless web architecture."
        ctas={[
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
      style="accent"
      width="wide"
      align="center"
      headline="**More Sucess Stories incoming**"
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

    <Section align="center">
      <Text
        text={`Many thanks to Freepik. All website comps by [Freepik](https://www.freepik.com/free-psd/smart-home-app-web-template_16692832.htm#query=website%20mockup%20tech&position=0&from_view=search&track=ais).`}
        layout="singleColumn"
      />
    </Section>
  </PageWrapper>
);
