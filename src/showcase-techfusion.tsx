import { TextMedia } from "@kickstartds/base/lib/text-media";
import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Headline } from "@kickstartds/ds-agency/headline";
import { Testimonial } from "@kickstartds/ds-agency/testimonial";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { PageWrapper } from "./_includes/PageWrapper";

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
  <PageWrapper>
    <Section width="full" spaceAfter="none" spaceBefore="none">
      <TextMedia
        text={``}
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_tfe01.jpg",
              alt: "Fake Showcase Mockup Image",
            },
          },
        ]}
      />
    </Section>

    <Section
      style="accent"
      width="wide"
      align="left"
      mode="list"
      spaceAfter="default"
    >
      <Headline
        align="left"
        text="Harmonizing **Digital Experiences** for TechFusion Enterprises with a Custom **Design System**"
        sub="Streamlining Development, Enhancing User Experience, and Boosting Brand Consistency"
        content=""
        level="h2"
        style="h2"
        spaceAfter="large"
      />
      <TextMedia
        text={`
### Briefing:
TechFusion Enterprises, a leading player in the smart home industry, grappled with a fragmented digital landscape. Their use of different UI frontend libraries resulted in significant inconsistencies in the user interface and user experience across their digital platforms. The integration of design tokens into their legacy applications was a daunting challenge.
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
      <TextMedia
        text={``}
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_tfe02.jpg",
              alt: "Fake Showcase Mockup Image",
            },
          },
        ]}
      />
    </Section>

    <Section width="wide" align="left" mode="list" spaceAfter="default">
      <TextMedia
        text={`
### Our Solution: 
We partnered with TechFusion to develop a tailored Design System using **kickstartDS**. This **code-first framework** accelerated the setup process, seamlessly integrating with their existing component libraries like Bootstrap and MUI. Our innovative approach ensured brand consistency, even for legacy products, transforming their digital landscape.

          `}
      />
    </Section>
    <Section spaceBefore="small">
      <Testimonial
        image="/static/img/people/author-john.png"
        alt="Fake Testimonial Portrait"
        name="- John Smith"
        quote="Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating."
        title="Chief Marketing Officer at TechFusion Enterprises"
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
      <TextMedia
        text={``}
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_tfe03.jpg",
              alt: "Fake Showcase Mockup Image",
            },
          },
        ]}
      />
    </Section>

    <Section
      style="accent"
      width="narrow"
      align="left"
      mode="list"
      spaceAfter="default"
    >
      <TextMedia
        text={`
## **Result:** 
The implementation of the new Design System resulted in a **year's worth of development time saved**. Coding new components within their tech stack became significantly more efficient, eliminating the need for time-consuming customization of MUI components.

**Additional Services:**

We empowered TechFusion's marketing and digital teams through comprehensive **training on Design Systems**. Their frontend developers were trained to use [**kickstartDS**](https://www.kickstartds.com), enabling them to take over the development of new components effectively.
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
      <TextMedia
        text={``}
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_tfe04.jpg",
              alt: "Fake Showcase Mockup Image",
            },
          },
        ]}
      />
    </Section>

    <Section inverted>
      <Cta
        align="left"
        headline="**Ready to harmonize** your Digital Experiences? Let's collaborate to create a tailored **Design System** for your brand."
        text="Get in touch today."
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
        target="/showcase-launchpad"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        target="/showcase-eco"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
      />
    </Section>

    <Section align="center">
      <TextMedia
        text={`Many thanks to Freepik. All website comps by [Freepik](https://www.freepik.com/free-psd/smart-home-app-web-template_16692832.htm#query=website%20mockup%20tech&position=0&from_view=search&track=ais).`}
      />
    </Section>
  </PageWrapper>
);
