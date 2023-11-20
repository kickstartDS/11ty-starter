import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Text } from "@kickstartds/ds-agency/text";
import { Image } from "@kickstartds/ds-agency/image";
import { Features } from "@kickstartds/ds-agency/features";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",
  layout: "base.njk",
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section backgroundColor="accent" style="boldTransition">
      <Cta
        align="left"
        headline="**This is a vibrant Simulation** designed to unveil the potential of **kickstartDS**"
        sub="A Showcase as testament to the transformative potential of **kickstartDS**-driven Headless Websites and **Design Systems**"
        text={`Spoiler: if you are looking for an Agency to serve your Headless or Design System needs - contact us, we are real experts!`}
        buttons={[
          {
            label: "Talk to us!",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "contact",
          },
        ]}
      />
    </Section>

    <Section
      content={{
        mode: "list",
      }}
      headline={{
        text: "Open Source vs. Premium Experience",
        sub: "The Purpose of this Demo",
      }}
      spaceAfter="small"
    >
      <Text
        text={`
This demo is intended to provide a firsthand experience of the capabilities of [**kickstartDS**](https://www.kickstartds.com). It's not just a website; it’s a demonstration of how we can transform your digital landscape. Please note that while this demo represents a **Design System Agency**, the principles and techniques showcased are applicable to a wide range of industries and use cases.
          `}
      />
    </Section>
    <Section
      width="wide"
      content={{
        mode: "list",
      }}
      spaceBefore="small"
      spaceAfter="small"
    >
      <Image
        src="/static/img/deco/disclaimer-devider-dotted.png"
        alt="Digital art of two friendly girls standing in front of each other, playing with a huge pile of toy bricks in their center. the scene is surrounded by horizontal light stripes in motion creating a ring around them, light blue, violet and purple colors, light neon-lights, laser-light, wide-angle "
      />
    </Section>

    <Section spaceBefore="none" spaceAfter="small">
      <Text
        text={`
## The two showcases in this demo represent the range of possibilities with kickstartDS.
### Open Source Demo
The website you are browsing is the **first demo**. It is built entirely using our [**open-source** modules](https://www.kickstartds.com/modules/), demonstrating the robust capabilities you can leverage at no cost. It's a testament to the value that kickstartDS can deliver even with zero investment.

### Premium Experience Demo
The premium Experience is the [other demo](#) taking it a step further by integrating the **paid** kickstartDS [**content component module**](https://www.kickstartds.com/content-module/). This premium feature enriches the user experience, demonstrating the potential of a small investment. 

It showcases how a modest monthly investment, equivalent to the cost of a developer hour, can significantly elevate the look and feel of your website or content-driven application.
        `}
      />
    </Section>

    <Section
      style="boldTransition"
      spaceBefore="small"
      width="wide"
      content={{
        width: "default",
      }}
      headline={{
        text: "By exploring both demos, you can **gain** a clear understanding of the **value** proposition offered by **kickstartDS**, from open source solutions to paid enhancements.",
        large: true,
      }}
    >
      <Features
        ctas={{
          style: "button",
          toggle: true,
        }}
        features={[
          {
            cta: {
              label: "Browse premium Demo",
              target: "#",
            },
            icon: "star-outline",
            text: "Compare the premium feature of the Demo-Website with enriched user experience, demonstrating the potential worth less than 2 hours of development",
            title: "Demo with enriched Components",
          },
          {
            cta: {
              label: "Explore paid Content Module",
              target: "https://www.kickstartds.com/content-module/",
            },
            icon: "share",
            text: "Based on our Open Source library, the Content Module completes your Design Systems components by adding rich components to build beautiful content experiences",
            title: "Feature 2",
          },
          {
            cta: {
              label: "See Open Source Components",
              target: "https://www.kickstartds.com/modules/",
            },
            icon: "info",
            text: "Texttestetete",
            title: "This Version is purely built atop free Components",
          },
          {
            cta: {
              label: "Explore its Storybook",
              target: "#",
            },
            icon: "browser",
            text: "Browsing our Storybook will quickly show you the capabilities kickstartDS brings to you",
            title: "Discover all Open Source Components",
          },
        ]}
        layout="largeTiles"
        style="stack"
      />
    </Section>

    <Section>
      <Text
        text={`
## The Purpose of this **Demo**
This demo is intended to provide a firsthand experience of the capabilities of [**kickstartDS**](https://www.kickstartds.com). It's not just a website; it's a demonstration of how we can transform your digital landscape. Please note that while this demo represents a **Design System Agency**, the principles and techniques showcased are applicable to a wide range of industries and use cases.

## **Disclaimer**
While we've strived to provide a comprehensive demonstration, please bear in mind that this is a simplified showcase of the potential of [**kickstartDS**](https://www.kickstartds.com). The actual implementation of a **Design System** and **headless CMS** like Storybook or Sanity.io can be tailored to your specific needs and goals, ensuring a custom solution that drives your digital success.
        `}
      />
    </Section>

    <Section style="horizontalGradient">
      <Cta
        align="center"
        headline="Wanna know more?"
        text="Intrigued by what a kickstartDS-driven website can do for your brand? Let's explore how we can shape your digital journey. Get in touch today."
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
  </PageWrapper>
);
