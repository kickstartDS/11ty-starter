import { Section } from "@kickstartds/ds-agency/section";
import { TestimonialsPaid } from "@kickstartds/ds-agency/testimonials-paid";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Text } from "@kickstartds/ds-agency/text";
import { Image } from "@kickstartds/ds-agency/image";
import { PageWrapper } from "./_includes/PageWrapper";
import { Hero } from "@kickstartds/ds-agency/components/hero/index.js";
import { CtaPaid } from "@kickstartds/ds-agency/components/cta-paid/index.js";

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
  <PageWrapper floatingHeader>
    <Section width="full" spaceAfter="small" spaceBefore="none">
      <Hero
        image={{
          srcMobile: "/static/img/showcases/comp_eco01.jpg",
          alt: "Fake Showcase Mockup Image",
        }}
      />
    </Section>
    <Section
      headline={{
        text: "Powering EcoTech Solutions' Digital Transformation with a **Design System** and **Headless CMS**",
        sub: "Reinventing Development Processes, Boosting Brand Credibility, and Embracing the Headless Web",
        width: "default",
        align: "center",
        large: true,
      }}
      width="wide"
      spaceAfter="none"
    />
    <Section
      width="max"
      content={{
        mode: "list",
      }}
    >
      <Hero
        height="fullImage"
        image={{
          srcMobile: "/static/img/showcases/comp_eco02.jpg",
        }}
      />
    </Section>
    <Section
      headline={{
        text: "Briefing:",
        sub: "Harmonize Techfusions Digital Landscape",
      }}
      spaceBefore="none"
      width="wide"
      content={{
        width: "narrow",
        align: "left",
      }}
    >
      <Text text="EcoTech Solutions, a forward-thinking company in the sustainable PV and wind power industry, sought a way to streamline their development process and enhance their brand consistency across platforms." />
    </Section>
    <Section style="accent" width="max">
      <Hero
        height="fullImage"
        image={{
          srcMobile: "/static/img/showcases/comp_eco02.jpg",
        }}
      />
    </Section>
    <Section
      headline={{
        text: "Our Solution:",
        sub: "Design System end to end",
        width: "narrow",
        align: "center",
      }}
      width="wide"
      content={{
        width: "narrow",
        align: "center",
      }}
      style="accent"
      spaceBefore="none"
    >
      <Text text="We collaborated closely with EcoTech's brand team to set up a Design System that catered to their unique needs. To bring this Design System to life and enhance productivity, we migrated their main website to Storyblok, a robust Headless CMS. This strategic move marked their initial step towards embracing the headless web." />
    </Section>
    <Section width="max">
      <Hero
        height="fullImage"
        image={{
          srcMobile: "/static/img/showcases/comp_eco04.jpg",
        }}
      />
    </Section>
    <Section
      spaceBefore="none"
      width="wide"
      headline={{
        text: "Headless is best:",
        sub: "Easy adoption thanks Design System",
        width: "narrow",
        align: "right",
      }}
      content={{
        width: "narrow",
        align: "right",
      }}
    >
      <Text text="We collaborated closely with EcoTech's brand team to set up a Design System that catered to their unique needs. To bring this Design System to life and enhance productivity, we migrated their main website to Storyblok, a robust Headless CMS. This strategic move marked their initial step towards embracing the headless web." />
    </Section>
    <Section
      style="accent"
      spaceAfter="default"
      content={{
        mode: "list",
      }}
      headline={{
        text: "Result:",
      }}
    >
      <Text
        text={`
The implementation of the new **Design System** and migration to **Storyblok** transformed EcoTech's development process. It introduced a level of consistency across their platforms that not only saved them time but also boosted their brand's credibility.
          `}
      />
      <TestimonialsPaid
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
      content={{
        mode: "list",
      }}
      spaceAfter="none"
      spaceBefore="none"
    >
      <Image
        src="/static/img/showcases/comp_eco04.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>
    <Section>
      <CtaPaid
        align="left"
        headline="Ready to **power up your**  Digital Transformation with a tailored **Design System** and Headless **CMS**? "
        text="Connect with us to start your journey."
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
      width="wide"
      headline={{
        text: "More of our Demo Customer Showcases",
        textAlign: "center",
      }}
    >
      <TeaserCard
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
    </Section>
    <Section>
      <Text
        align="center"
        text={`Many thanks to Freepik. All website comps by [Freepik](https://www.freepik.com/free-psd/smart-home-app-web-template_16692832.htm#query=website%20mockup%20tech&position=0&from_view=search&track=ais).`}
      />
    </Section>
  </PageWrapper>
);
