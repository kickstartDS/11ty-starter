import { PageWrapper } from "./_includes/PageWrapper";
import { Section } from "@kickstartds/base/lib/section";
import { TextMedia } from "@kickstartds/base/lib/text-media";
import { Button } from "@kickstartds/base/lib/button";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Headline } from "@kickstartds/ds-agency/headline";
import { Testimonial } from "@kickstartds/ds-agency/testimonial";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Showcase",
    order: 3,
  },
};

export default (props) => (
  <PageWrapper {...props}>
    <Section width="full" spaceAfter="none" spaceBefore="none">
      <TextMedia
        text={``}
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_tfe01.jpg",
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
        text="Powering EcoTech Solutions' Digital Transformation with a **Design System** and **Headless CMS**"
        sub="Reinventing Development Processes, Boosting Brand Credibility, and Embracing the Headless Web"
        content=""
        level="h2"
        style="h2"
        spaceAfter="large"
      />
      <TextMedia
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
      <TextMedia
        text={``}
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_tfe02.jpg",
            },
          },
        ]}
      />
    </Section>

    <Section
      style="narrow"
      width="wide"
      align="left"
      mode="list"
      spaceAfter="default"
    >
      <TextMedia
        text={`
### Our Solution: 
We collaborated closely with EcoTech's brand team to set up a Design System that catered to their unique needs. To bring this Design System to life and enhance productivity, we migrated their main website to Storyblok, a robust Headless CMS. This strategic move marked their initial step towards embracing the headless web.
          `}
      />
      <Testimonial
        image="/static/img/customer-1.png"
        name="- Emily Johnson"
        quote="**Systemics's Design System transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.**"
        title="Director of Digital Strategy at EcoTech Solutions"
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
            },
          },
        ]}
      />
    </Section>

    <Section
      style="default"
      width="wide"
      align="left"
      mode="list"
      spaceAfter="default"
      inverted
    >
      <TextMedia
        text={`
### Result: 
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
      <TextMedia
        text={``}
        media={[
          {
            image: {
              src: "/static/img/showcases/comp_tfe04.jpg",
            },
          },
        ]}
      />
    </Section>

    <Section inverted>
      <Cta
        align="left"
        width="wide"
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
        ctaToggle
      />
    </Section>
    <Section align="center">
      <TextMedia
        text={`Many thanks to Freepik. All website comps by [Freepik](https://www.freepik.com/free-psd/smart-home-app-web-template_16692832.htm#query=website%20mockup%20tech&position=0&from_view=search&track=ais).`}
      />
    </Section>
  </PageWrapper>
);
