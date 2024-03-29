import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Logos } from "@kickstartds/ds-agency/logos";
import { Text } from "@kickstartds/ds-agency/text";
import { Image } from "@kickstartds/ds-agency/image";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Showcases",
    order: 3,
  },
};

export default (props) => (
  <PageWrapper>
    <Section
      style="accentTransition"
      spaceAfter="none"
      headline={{
        text: "Transformations powered by **💗**, **Innovation** & **Design Systems**",
        sub: "Selected showcases from Design Systems and headless Webs of the biggest global Enterprises 😁",
        large: true,
      }}
    >
      <Text
        text={`
Welcome to our showcase of success stories. Here, you'll discover how we've partnered with diverse organizations to revolutionize their digital landscapes. From creating bespoke design systems to implementing headless CMSs, our solutions have empowered brands to streamline processes, enhance user experiences, and foster brand consistency. Dive in to explore how we've turned challenges into opportunities, and visions into reality.
          `}
      />
    </Section>

    <Section
      backgroundColor="accent"
      spaceAfter="none"
      width="wide"
      content={{
        mode: "slider",
        tileWidth: "largest",
      }}
      headline={{
        text: "**01** Launchpad Audio Innovations",
      }}
    >
      <Image
        src="/static/img/showcases/comp_audio01.jpg"
        alt="Huge Logo of that fake reference customer"
      />
      <Image
        src="/static/img/showcases/comp_audio02.jpg"
        alt="Huge Logo of that fake reference customer"
      />
      <Image
        src="/static/img/showcases/comp_audio03.jpg"
        alt="Huge Logo of that fake reference customer"
      />
    </Section>
    <Section
      spaceBefore="none"
      backgroundColor="accent"
      width="wide"
      content={{
        mode: "list",
      }}
    >
      <Cta
        headline="Speed and Scale"
        text={`Explore how we empowered LaunchPad, an AI-powered digital audio controller startup, with rapid landing page creation for market testing and a robust foundation for future growth.`}
        buttons={[
          {
            label: "See Showcase",
            icon: "chevron-right",
            target: "/showcase-launchpad",
          },
        ]}
      />
    </Section>

    <Section
      spaceAfter="none"
      width="wide"
      content={{
        mode: "slider",
        tileWidth: "largest",
      }}
      headline={{
        text: "**02** EcoTech Solutions",
      }}
    >
      <Image
        src="/static/img/showcases/comp_eco01.jpg"
        alt="Huge Logo of that fake reference customer"
      />
      <Image
        src="/static/img/showcases/comp_eco02.jpg"
        alt="Huge Logo of that fake reference customer"
      />
      <Image
        src="/static/img/showcases/comp_eco03.jpg"
        alt="Huge Logo of that fake reference customer"
      />
    </Section>
    <Section
      spaceBefore="none"
      width="wide"
      content={{
        mode: "list",
      }}
    >
      <Cta
        headline="Navigating the Headless Frontier for Brand Consistency"
        text={`See how we collaborated with EcoTech Solutions to set up a tailored Design System and migrate their main website to a headless CMS, enhancing brand credibility and saving valuable time.`}
        buttons={[
          {
            label: "See Showcase",
            icon: "chevron-right",
            target: "/showcase-eco",
          },
        ]}
      />
    </Section>

    <Section
      spaceAfter="none"
      backgroundColor="accent"
      width="wide"
      content={{
        mode: "slider",
        tileWidth: "largest",
      }}
      headline={{
        text: "**03** TechFusion Enterprises",
      }}
    >
      <Image
        src="/static/img/showcases/comp_tfe01.jpg"
        alt="Huge Logo of that fake reference customer"
      />
      <Image
        src="/static/img/showcases/comp_tfe02.jpg"
        alt="Huge Logo of that fake reference customer"
      />
      <Image
        src="/static/img/showcases/comp_tfe03.jpg"
        alt="Huge Logo of that fake reference customer"
      />
    </Section>

    <Section
      spaceBefore="none"
      backgroundColor="accent"
      width="wide"
      content={{
        mode: "list",
      }}
    >
      <Cta
        headline="A Digital Transformation Love Story"
        text={`Discover how we revolutionized TechFusion Enterprises' digital landscape by developing a tailored Design System. Our innovative approach saved them a year's worth of development time and harmonized their user experiences across all platforms.`}
        buttons={[
          {
            label: "See Showcase",
            icon: "chevron-right",
            target: "/showcase-techfusion",
          },
        ]}
      />
    </Section>

    <Section inverted backgroundColor="accent" width="wide">
      <Cta
        textAlign="center"
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
      backgroundColor="accent"
      width="wide"
      headline={{
        text: "**More Sucess Stories incoming**",
        textAlign: "center",
      }}
    >
      <Logos
        align="center"
        logo={[
          {
            alt: "Logo 1",
            src: "/static/img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/static/img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/static/img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logos/logoipsum-286.svg",
          },
          {
            alt: "Logo 7",
            src: "/static/img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 8",
            src: "/static/img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 9",
            src: "/static/img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 10",
            src: "/static/img/logos/logoipsum-244.svg",
          },
        ]}
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
