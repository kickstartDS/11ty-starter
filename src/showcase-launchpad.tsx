import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Testimonials } from "@kickstartds/ds-agency/testimonials";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Text } from "@kickstartds/ds-agency/text";
import { Image } from "@kickstartds/ds-agency/image";
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
  <PageWrapper floatingHeader>
    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Image
        src="/static/img/showcases/comp_audio01.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section
      backgroundColor="accent"
      width="wide"
      style="anchorGlow"
      content={{
        mode: "list",
        width: "narrow",
      }}
      spaceAfter="default"
      headline={{
        text: "Fast-Tracking LaunchPad's Market Presence with **StaticCMS-powered Landing Pages**",
        sub: "Rapid Creation of Marketing Landing Pages atop a Design System for Quick Market Testing and Future Growth",
      }}
    >
      <Text
        text={`
### Briefing:
LaunchPad Audio Innovations, an AI-powered digital audio controller startup, needed to quickly establish visibility and test their ads in the market. However, as a young startup, they also needed a solution that would empower them to scale in the future.
          `}
      />
    </Section>

    <Section
      backgroundColor="accent"
      width="full"
      content={{
        mode: "list",
        width: "default",
      }}
      spaceAfter="small"
      spaceBefore="small"
    >
      <Cta
        headline="Do you need a **StaticCMS** starter?"
        text="We offer free template to kickstart your next website project!"
        textAlign="center"
        buttons={[
          {
            label: "See free CMS Starters",
            target: "https://about.design-system.agency/starter/",
            icon: "chevron-right",
          },
          {
            label: "About this Demo",
            target: "https://about.design-system.agency/",
            icon: "info",
          },
        ]}
      />
    </Section>

    <Section
      backgroundColor="accent"
      width="full"
      content={{
        mode: "list",
      }}
      spaceAfter="none"
      spaceBefore="none"
    >
      <Image
        src="/static/img/showcases/comp_audio02.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section
      width="wide"
      content={{
        mode: "list",
      }}
    >
      <Text
        text={`
### Our Solution: 
We set up a content-driven Design System and a StaticCMS-powered website and landing page builder for LaunchPad Audio Innovations. This approach allowed them to create marketing landing pages at lightning speed, enabling rapid market testing and gaining crucial visibility.
          `}
      />
    </Section>
    <Section spaceBefore="small">
      <Testimonials
        testimonial={[
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
      backgroundColor="accent"
      width="full"
      content={{
        mode: "list",
      }}
      spaceAfter="none"
      spaceBefore="none"
    >
      <Image
        src="/static/img/showcases/comp_audio03.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section
      backgroundColor="bold"
      style="horizontalGradient"
      width="narrow"
      content={{
        mode: "list",
      }}
    >
      <Text
        text={`
## Result: 
With our StaticCMS-powered solution, LaunchPad was able to streamline their development and design process. This not only allowed them to scale faster but also enabled them to focus on their primary objective - building a standout product in the market. Even though a Design System was not their immediate need, they now have a robust foundation for future growth.
          `}
      />
    </Section>

    <Section
      backgroundColor="accent"
      width="full"
      content={{
        mode: "list",
      }}
      spaceAfter="none"
      spaceBefore="none"
    >
      <Image
        src="/static/img/showcases/comp_audio04.jpg"
        alt="Fake Showcase Mockup Image"
      />
    </Section>

    <Section inverted>
      <Cta
        headline="**Ready to fast-track** your startup's market presence with a tailored Design System and a StaticCMS-powered **Landing Page Builder**?"
        text="Connect with us to launch your next idea in less than two weeks. Being ready to learn and scale fast."
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
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
        target="/showcase-techfusion"
        button={{
          label: "Go to page",
          hidden: true,
        }}
      />
      <TeaserCard
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
        target="/showcase-eco"
        button={{
          label: "Go to page",
          hidden: true,
        }}
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
