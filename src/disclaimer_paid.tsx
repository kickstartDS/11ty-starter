import { Section } from "@kickstartds/ds-agency/section";
import { CtaPaid } from "@kickstartds/ds-agency/cta-paid";
import { PageWrapper } from "./_includes/PageWrapper";
import { Text } from "@kickstartds/ds-agency/text";
import { Features } from "@kickstartds/ds-agency/features";
import { ImageStory } from "@kickstartds/ds-agency/image-story";
import { VideoCurtain } from "@kickstartds/ds-agency/video-curtain";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",
  layout: "base.njk",
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section
      spaceBefore="none"
      spaceAfter="none"
      width="full"
      content={{
        mode: "list",
      }}
    >
      <VideoCurtain
        headline="This is a vibrant Simulation designed to unveil the potential of kickstartDS"
        overlay
        sub="A Showcase as testament to the transformative potential of kickstartDS-driven Headless Websites and Design Systems"
        text=""
        textPosition="center"
        video={{
          srcDesktop:
            "/static/img/videos/_import_6074abda2c1d16.29497953_FPpreview.mp4",
          srcMobile:
            "/static/img/videos/_import_6074abda2c1d16.29497953_FPpreview.mp4",
          srcTablet:
            "/static/img/videos/_import_6074abda2c1d16.29497953_FPpreview.mp4",
        }}
      />
    </Section>

    <Section
      backgroundColor="bold"
      width="narrow"
      style="horizontalGradient"
      content={{
        mode: "list",
        align: "center",
      }}
      buttons={[
        {
          label: "Contact us",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "person",
        },
      ]}
    >
      <Text
        align="center"
        style="highlight"
        text={`
### Spoiler! 

Although this is just a demo website, if you are looking for an Agency to serve your Headless or Design System needs, contact us, **we are real experts!**`}
      />
    </Section>

    <Section
      backgroundColor="accent"
      style="boldTransition"
      width="wide"
      content={{
        mode: "list",
        width: "wide",
      }}
      headline={{
        text: "Open Source vs. Premium Experience",
        large: true,
      }}
    >
      <ImageStory
        layout="imageLeft"
        text={`
## The two showcases in this demo represent the range of possibilities with kickstartDS

###Premium Experience Demo
You're currently navigating the Premium Experience Demo, enriched by the integration of the [**paid** kickstartDS content component module](https://www.kickstartds.com/content-module/). This premium feature enhances your user experience, demonstrating the potential of a small investment. 

It showcases how a modest monthly investment - akin to the cost of a developer hour - can significantly elevate the look and feel of your website or content-driven application.

### Open Source Demo
The other demo, built entirely using our [**open-source** modules](https://www.kickstartds.com/modules/), demonstrates the robust capabilities you can leverage at no cost. It stands as a testament to the value that kickstartDS can deliver even with zero investment.`}
        image={{
          src: "/static/img/deco/disclaimer-deco.png",
          alt: "Digital art of two friendly girls standing in front of each other, playing with a huge pile of toy bricks in their center. the scene is surrounded by horizontal light stripes in motion creating a ring around them, light blue, violet and purple colors, light neon-lights, laser-light, wide-angle",
        }}
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
        text: "Comparing both demos, you will **gain** a clear understanding of the **value** proposition offered by **kickstartDS**",
        sub: "From an Open Source solution with paid enhancements",
        large: true,
        switchOrder: true,
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
              label: "Learn more on kickstartDS",
              target: "https://www.kickstartds.com/module",
            },
            icon: "info",
            text: "Which is enriched with more complex components based on the **kickstartDS Content Module**",
            title: "You currently browse the premium demo",
          },
          {
            cta: {
              label: "Explore its Storybook",
              target: "#",
            },
            icon: "browser",
            text: "Browsing our Storybook will quickly show you the capabilities kickstartDS has to offer",
            title: "Discover all Components",
          },
          {
            cta: {
              label: "Switch to free Demo",
              target: "/index",
            },
            icon: "star-outline",
            text: "Compare what the free version using Open Source componets only can already offer in regards to this a demo experience",
            title: "Demo free Version",
          },
          {
            cta: {
              label: "Explore paid Content Module",
              target: "https://www.kickstartds.com/content-module/",
            },
            icon: "share",
            text: "Based on our Open Source Core, the Content Module completes your Design Systems components by adding rich components to build beautiful content experiences",
            title: "Value-add: Content Module",
          },
        ]}
        layout="largeTiles"
        style="stack"
      />
    </Section>

    <Section style="accentTransition">
      <Text
        text={`
## The Purpose of this Demo
This demo is intended to provide a firsthand experience of the capabilities of [**kickstartDS**](https://www.kickstartds.com). It's not just a website; it's a demonstration of how we can transform your digital landscape. Please note that while this demo represents a **Design System Agency**, the principles and techniques showcased are applicable to a wide range of industries and use cases.

## Important Disclaimer
While we've strived to provide a comprehensive demonstration, please bear in mind that this is a simplified showcase of the potential of [**kickstartDS**](https://www.kickstartds.com). The actual implementation of a **Design System** and **headless CMS** like Storybook or Sanity.io can be tailored to your specific needs and goals, ensuring a custom solution that drives your digital success.
        `}
        style="highlight"
        layout="multiColumn"
      />
    </Section>

    <Section width="full" spaceBefore="none" spaceAfter="none" inverted>
      <CtaPaid
        align="left"
        headline="Wanna know more?"
        sub="Intrigued by what a kickstartDS-driven website can do for your brand? Let's explore how we can shape your digital journey. Get in touch today."
        backgroundImage="/static/img/bg/bg_schrill.svg"
        backgroundColor="#B9398D"
        image={{
          hAlign: "center",
          order: {
            desktopImageLast: false,
            mobileImageLast: false,
          },
          src: "/static/img/deco/contact-us-person-smart.png",
          vAlign: "center",
        }}
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
