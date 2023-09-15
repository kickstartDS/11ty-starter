import "@kickstartds/ds-agency/global.client.js";

import { PageWrapper } from "@kickstartds/ds-agency/page-wrapper";
import { Section } from "@kickstartds/base/lib/section";
import { TextMedia } from "@kickstartds/base/lib/text-media";
import { Button } from "@kickstartds/base/lib/button";
import { CtaText } from "@kickstartds/ds-agency/cta-text";
import { Headline } from "@kickstartds/ds-agency/headline";

export const data = {
  title: "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",
  layout: "base.njk",
};

export default (props) => (
  <PageWrapper>
    <Section width="default">
      <CtaText
        align="left"
        headline="**This is a Vibrant Simulation** designed to unveil the impressive potential of **kickstartDS**"
        subheadline="A Showcase as testament to the transformative potential of **kickstartDS**-driven Headless Websites and **Design Systems**"
        text={`Spoiler: if you are looking for an Agency to serve your Headless or Design System needs - contact us, we are real experts!`}
        primaryCta={{
          toggle: true,
          label: "Book a meeting",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "date",
        }}
        secondaryCta={{
          toggle: true,
          label: "See our Design System Services",
          target: "https://www.kickstartds.com/services/",
          icon: "chevron-right",
        }}
        ctaToggle
      />
    </Section>
    
    <Section style="accent" width="wide" align="left" mode="list" spaceAfter="small">
      <Headline
        align="left"
        text="We empower Businesses with the Tools they need to thrive in the Digital Landscape."
        sub="Our crystal clear mission:"
        switchOrder
        content="Test Content"
        level="h2"
        style="h1"
        spaceAfter="minimum"
      />
    </Section>
    
    <Section
      style="accent"
      width="narrow"
      align="left"
      spaceBefore="none"
    >
      <TextMedia
        text={`**We believe** that well-crafted design systems are the cornerstone of exceptional user experiences. Our team is dedicated to providing clients with tailored solutions that bridge the gap between creativity and functionality, ultimately reshaping the way users engage with brands.`}
      />
    </Section>

    <Section
      headline="What We Do and How We Do It"
      text="text text"
      content="Test Content"
      width="default"
      align="left"
    >
      <TextMedia
        text={`
## Benefit from the **power of kickstartDS**, as we do too
We strongly believe in using the best tools to bring our clients exceptional results. That's why we've integrated kickstartDS into our workflow. This code-first framework for design system creation is our secret sauce to saving time, without compromising on quality. kickstartDS allows us to fast-track the development process, ensuring you get a fully functional and polished design system in a fraction of the time it would traditionally take.

## **Maximizing Value** for Our Clients
We're not just building design systems; we're building value. By combining our expertise in design systems and headless CMS architecture, we deliver solutions that are not only visually appealing but also inherently functional. This approach ensures that your brand's identity remains consistent across platforms while your content distribution becomes more dynamic and efficient. We firmly believe that a harmonious blend of design systems and headless CMSs unlocks immense potential for businesses, propelling them ahead in the digital race.`}
      />
    </Section>

    <Section
      headline="About & History"
      style="accent"
      text="text text"
      content="Test Content"
      width="default"
      align="left"
    >
      <TextMedia
        text={`Founded by passionate digital enthusiasts, Systemics emerged from the desire to reshape the digital realm. With a history spanning over a decade, we've continuously evolved to stay at the forefront of design systems, headless CMSs, and cutting-edge development practices. Our journey is one of innovation, collaboration, and a relentless pursuit of excellence.`}
      />
    </Section>
    
    <Section
      headline="Facts & Figures"
      text="text text"
      content="Test Content"
      style="accent"
      width="default"
      align="left"
      mode="tile"
    >
      
    </Section>

    <Section inverted>
      <CtaText
        align="left"
        width="wide"
        headline="Discover the **Systemics** difference. Join us in creating a **Digital Future** that's both functional and unforgettable."
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
  </PageWrapper>
);