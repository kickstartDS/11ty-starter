import { Section } from "@kickstartds/ds-agency/section";
import { TestimonialsPaid } from "@kickstartds/ds-agency/testimonials-paid";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Text } from "@kickstartds/ds-agency/text";
import { Image } from "@kickstartds/ds-agency/image";
import { Mosaic } from "@kickstartds/ds-agency/mosaic";
import { Hero } from "@kickstartds/ds-agency/hero";
import { PageWrapper } from "./_includes/PageWrapper";
import { CtaPaid } from "@kickstartds/ds-agency/components/cta-paid/index.js";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",

  layout: "base.njk",
  eleventyNavigation: {
    key: "Showcase Techfusion",
    order: 3,
  },
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section
      spaceBefore="none"
      width="full"
      style="accentTransition"
      content={{
        mode: "list",
      }}
    >
      <Hero
        height="fullImage"
        image={{
          alt: "Fake Showcase Mockup Image",
          indent: "none",
          srcMobile: "/static/img/showcases/comp_tfe01.png",
        }}
        largeHeadline
        headline="Harmonizing Digital Experiences for TechFusion Enterprises with a Custom Design System"
        sub="Streamlining Development, Enhancing User Experience, and Boosting Brand Consistency"
        textPosition="below"
      />
    </Section>

    <Section
      width="full"
      spaceBefore="small"
      spaceAfter="none"
      backgroundColor="accent"
      style="boldTransition"
    >
      <Mosaic
        tiles={[
          {
            button: {
              icon: undefined,
              label: "Book a meeting",
              target: undefined,
              toggle: false,
            },
            headline: "**Briefing:**",
            sub: "Harmonize Techfusions Digital Landscape",
            image: "/static/img/showcases/mosaic-1-tfe.png",
            text: "TechFusion Enterprises, a leading player in the smart home industry, grappled with a fragmented digital landscape. Their use of different UI frontend libraries resulted in significant inconsistencies in the user interface and user experience across their digital platforms. The integration of design tokens into their legacy applications was a daunting challenge.",
          },
          {
            button: {
              icon: undefined,
              label: "Book a meeting",
              target: undefined,
              toggle: true,
            },
            headline: "Our Solution:",
            image: "/static/img/showcases/mosaic-2-tfe.png",
            sub: "Design System in 5 Days",
            text: "We partnered with TechFusion to develop a tailored Design System using **kickstartDS**. This **code-first framework** accelerated the setup process, seamlessly integrating with their existing component libraries like Bootstrap and MUI. Our innovative approach ensured brand consistency, even for legacy products, transforming their digital landscape.",
          },
          {
            button: {
              icon: undefined,
              label: "Book a meeting",
              target: undefined,
              toggle: true,
            },
            headline: "Additional Services:",
            image: "/static/img/showcases/mosaic-3-tfe.png",
            sub: "Help to help yourself",
            text: "We empowered TechFusion's marketing and digital teams through comprehensive **training on Design Systems**. Their frontend developers were trained to use [**kickstartDS**](https://www.kickstartds.com), enabling them to take over the development of new components effectively.",
          },
        ]}
      />
    </Section>

    <Section
      backgroundColor="bold"
      width="wide"
      content={{
        mode: "list",
      }}
      headline={{
        text: "Result",
        align: "center",
        textAlign: "center",
        large: true,
      }}
    >
      <Text
        text={`
The implementation of the new Design System resulted in a **year's worth of development time saved**. Coding new components within their tech stack became significantly more efficient, eliminating the need for time-consuming customization of MUI components.
          `}
        align="center"
        style="highlight"
      />
      <TestimonialsPaid
        testimonials={[
          {
            image: {
              src: "/static/img/people/author-john.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- John Smith",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
        ]}
      />
    </Section>

    <Section width="full">
      <CtaPaid
        fullWidth
        image={{
          src: "/static/img/showcases/comp_tfe03.png",
          padding: false,
        }}
        backgroundImage="/static/img/bg/bg_dot-carpet-blue.svg"
        headline="Find some inspiration from Techfusion for your next project"
        largeHeadline
      />
    </Section>

    <Section
      style="anchorGlow"
      width="wide"
      spaceAfter="none"
      spaceBefore="none"
      inverted
    >
      <CtaPaid
        fullWidth
        align="center"
        largeHeadline
        headline="**Ready to harmonize** your Digital Experiences? Let's collaborate to create a tailored **Design System** for your brand."
        sub="Get in touch today."
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
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
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
