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
    key: "Showcase EcoTech",
    order: 3,
  },
};

export default (props) => (
  <PageWrapper>
    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Picture
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_eco01.jpg",
              alt: "Fake Showcase Mockup Image",
            },
          },
        ]}
      />
    </Section>

    <Section
      style="accent"
      width="default"
      align="left"
      mode="list"
      spaceAfter="default"
      inverted
    >
      <Headline
        align="left"
        text="Powering EcoTech Solutions' Digital Transformation with a **Design System** and **Headless CMS**"
        sub="**Reinventing Development Processes, Boosting Brand Credibility, and Embracing the Headless Web**"
        content=""
        level="h2"
        style="h2"
        spaceAfter="large"
      />
      <Text
        text={`
### Briefing:
EcoTech Solutions, a forward-thinking company in the sustainable PV and wind power industry, sought a way to streamline their development process and enhance their brand consistency across platforms.
          `}
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
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_eco02.jpg",
              alt: "Fake Showcase Mockup Image",
            },
          },
        ]}
      />
    </Section>

    <Section width="default" align="left" mode="list" spaceAfter="default">
      <Text
        text={`
### Our Solution: 
We collaborated closely with EcoTech's brand team to set up a Design System that catered to their unique needs. To bring this Design System to life and enhance productivity, we migrated their main website to Storyblok, a robust Headless CMS. This strategic move marked their initial step towards embracing the headless web.
          `}
      />
      <Testimonials
        testimonials={[
          {
            image: {
              src: "/static/img/people/author-emily.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- Emily Johnson",
            quote:
              "Systemics's Design System transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            title: "Director of Digital Strategy at EcoTech Solutions",
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
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_eco03.jpg",
              alt: "Fake Showcase Mockup Image",
            },
          },
        ]}
      />
    </Section>

    <Section
      style="accent"
      width="narrow"
      align="center"
      mode="list"
      spaceAfter="default"
      inverted
    >
      <Text
        text={`
### **Result:**
The implementation of the new **Design System** and migration to **Storyblok** transformed EcoTech's development process. It introduced a level of consistency across their platforms that not only saved them time but also boosted their brand's credibility.
          `}
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
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_eco04.jpg",
              alt: "Fake Showcase Mockup Image",
            },
          },
        ]}
      />
    </Section>

    <Section inverted>
      <Cta
        align="left"
        headline="Ready to **power up your**  Digital Transformation with a tailored **Design System** and Headless **CMS**? "
        text="Connect with us to start your journey."
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
        target="/showcase-launchpad"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
    </Section>

    <Section align="center">
      <Text
        text={`Many thanks to Freepik. All website comps by [Freepik](https://www.freepik.com/free-psd/smart-home-app-web-template_16692832.htm#query=website%20mockup%20tech&position=0&from_view=search&track=ais).`}
      />
    </Section>
  </PageWrapper>
);
