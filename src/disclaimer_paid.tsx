import { Section } from "@kickstartds/ds-agency/section";
import { CtaPaid } from "@kickstartds/ds-agency/cta-paid";
import { PageWrapper } from "./_includes/PageWrapper";
import { Text } from "@kickstartds/ds-agency/text";
import { VideoCurtain } from "@kickstartds/ds-agency/video-curtain";
import { Button } from "@kickstartds/ds-agency/components/button/index.js";

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
      style="symmetricGlow"
      width="wide"
      content={{
        mode: "list",
        width: "default",
      }}
      headline={{
        text: "Open Source vs. Premium Experience",
        sub: "The two showcases in this demo represent the range of possibilities with kickstartDS. ",
        large: true,
      }}
    >
      <Text
        text={`
### Premium Experience Demo
You're currently navigating the Premium Experience Demo, enriched by the integration of the [**paid** kickstartDS content component module](https://www.kickstartds.com/content-module/). This premium feature enhances your user experience, demonstrating the potential of a small investment. 

It showcases how a modest monthly investment - akin to the cost of a developer hour - can significantly elevate the look and feel of your website or content-driven application.

### Open Source Demo
The other demo, built entirely using our [**open-source** modules](https://www.kickstartds.com/modules/), demonstrates the robust capabilities you can leverage at no cost. It stands as a testament to the value that kickstartDS can deliver even with zero investment.
    `}
      />
    </Section>

    <Section
      backgroundColor="bold"
      spaceBefore="none"
      spaceAfter="small"
      width="full"
      content={{
        align: "center",
        mode: "list",
        width: "default",
      }}
    >
      <CtaPaid
        align="left"
        fullWidth
        headline="By exploring both demos, you can **gain** a clear understanding of the **value** proposition offered by **kickstartDS**, from open source solutions to paid enhancements."
        sub="Browse the different demos and Storybook to feel it yourself"
        buttons={[
          {
            label: "Switch to free Demo",
            icon: "chevron-right",
            target: "/index",
          },
          {
            label: "Browse paid Module",
            icon: "browser",
            target: "#",
          },
          {
            label: " Explore Open Source Components",
            icon: "chevron-right",
            target: "#",
          },
        ]}
      />
    </Section>

    <Section style="stagelights">
      <Text
        text={`
## **The Purpose of this Demo**
This demo is intended to provide a firsthand experience of the capabilities of [**kickstartDS**](https://www.kickstartds.com). It's not just a website; it’s a demonstration of how we can transform your digital landscape. Please note that while this demo represents a **Design System Agency**, the principles and techniques showcased are applicable to a wide range of industries and use cases.

## **Disclaimer**
While we've strived to provide a comprehensive demonstration, please bear in mind that this is a simplified showcase of the potential of [**kickstartDS**](https://www.kickstartds.com). The actual implementation of a **Design System** and **headless CMS** like Storybook or Sanity.io can be tailored to your specific needs and goals, ensuring a custom solution that drives your digital success.
        `}
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
