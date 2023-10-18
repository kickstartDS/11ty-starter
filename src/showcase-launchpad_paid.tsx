import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Headline } from "@kickstartds/ds-agency/headline";
import { Testimonials } from "@kickstartds/ds-agency/testimonials";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Text } from "@kickstartds/ds-agency/text";
import { Picture } from "@kickstartds/ds-agency/picture";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",

  layout: "base.njk",
  eleventyNavigation: {
    key: "Showcase Launchpad",
    order: 4,
  },
};

export default (props) => (
  <PageWrapper>
    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Picture
        src="/static/img/showcases/comp_audio01.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section width="wide" align="left" mode="list" spaceAfter="default">
      <Headline
        align="left"
        text="Fast-Tracking LaunchPad's Market Presence with **Sanity-powered Landing Pages**"
        sub="Rapid Creation of Marketing Landing Pages atop a Design System for Quick Market Testing and Future Growth"
        content=""
        level="h2"
        style="h2"
        spaceAfter="large"
      />
    </Section>

    <Section
      style="accent"
      width="full"
      align="left"
      mode="list"
      spaceAfter="none"
      spaceBefore="none"
    >
      <Picture
        src="/static/img/showcases/comp_audio02.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section width="wide" align="left" mode="list" spaceAfter="default">
      <Text
        text={`
### Our Solution: 
We set up a content-driven Design System and a Sanity-powered website and landing page builder for LaunchPad Audio Innovations. This approach allowed them to create marketing landing pages at lightning speed, enabling rapid market testing and gaining crucial visibility.
          `}
        layoutVariant={"singleColumn"}
      />
    </Section>
    <Section spaceBefore="small">
      <Testimonials
        testimonials={[
          {
            image: {
              src: "/static/img/people/author-alex.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </Section>

    <Section
      style="accent"
      width="full"
      align="left"
      mode="list"
      spaceAfter="none"
      spaceBefore="none"
    >
      <Picture
        src="/static/img/showcases/comp_audio03.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section style="accent" width="narrow" align="left" mode="list">
      <Text
        text={`
## **Result:** 
With our Sanity-powered solution, LaunchPad was able to streamline their development and design process. This not only allowed them to scale faster but also enabled them to focus on their primary objective - building a standout product in the market. Even though a Design System was not their immediate need, they now have a robust foundation for future growth.
          `}
        layoutVariant={"singleColumn"}
      />
    </Section>

    <Section
      style="accent"
      width="full"
      align="left"
      mode="list"
      spaceAfter="none"
      spaceBefore="none"
    >
      <Picture
        src="/static/img/showcases/comp_audio04.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section inverted>
      <Cta
        align="left"
        headline="**Ready to fast-track** your startup's market presence with a tailored Design System and a Sanity-powered **Landing Page Builder**?"
        text="Connect with us to launch your next idea in less than two weeks. Being ready to learn and scale fast."
        primaryCta={{
          toggle: true,
          label: "Contact us",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "person",
        }}
        secondaryCta={{
          toggle: true,
          label: "Book a meeting",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "date",
        }}
      />
    </Section>

    <Section
      width="wide"
      headline="More of our Demo Customer Showcases"
      align="center"
    >
      <TeaserCard
        target="/showcase-techfusion"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-eco"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
      />
    </Section>

    <Section align="center">
      <Text
        text={`Many thanks to Freepik. All website comps by [Freepik](https://www.freepik.com/free-psd/smart-home-app-web-template_16692832.htm#query=website%20mockup%20tech&position=0&from_view=search&track=ais).`}
        layoutVariant={"singleColumn"}
      />
    </Section>
  </PageWrapper>
);
