import { Section } from "@kickstartds/ds-agency/section";
import { Button } from "@kickstartds/ds-agency/button";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Headline } from "@kickstartds/ds-agency/headline";
import { Text } from "@kickstartds/ds-agency/text";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",
  layout: "base.njk",
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section style="anchorGlow">
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
      backgroundColor="accent"
      width="wide"
      content={{
        mode: "list",
      }}
      spaceAfter="small"
    >
      <Headline
        align="left"
        text="Open Source vs. Premium Experience"
        sub="The two showcases in this demo represent the range of possibilities with kickstartDS. "
        level="h2"
        style="h2"
        spaceAfter="minimum"
      />
    </Section>

    <Section backgroundColor="accent" width="narrow" spaceBefore="none">
      <Text
        text={`
### Open Source Demo
The website you are browsing is the **first demo**. It is built entirely using our [**open-source** modules](https://www.kickstartds.com/modules/), demonstrating the robust capabilities you can leverage at no cost. It's a testament to the value that kickstartDS can deliver even with zero investment.

### Premium Experience Demo
The premium Experience is the [other demo](#) taking it a step further by integrating the **paid** kickstartDS [**content component module**](https://www.kickstartds.com/content-module/). This premium feature enriches the user experience, demonstrating the potential of a small investment. 

It showcases how a modest monthly investment, equivalent to the cost of a developer hour, can significantly elevate the look and feel of your website or content-driven application.
        `}
      />
    </Section>

    <Section style="horizontalGradient" spaceBefore="small">
      <Text
        text={`
### By exploring both demos, you can **gain** a clear understanding of the **value** proposition offered by **kickstartDS**, from open source solutions to paid enhancements.        
        `}
      />
    </Section>

    <Section style="horizontalGradient" spaceBefore="none">
      <Button
        variant="primary"
        label="Browse Premium Demo"
        icon="chevron-right"
        target="#"
      />
      <Button
        variant="tertiary"
        label="Explore Storybook"
        icon="browser"
        target="#"
      />
      <Button
        variant="secondary"
        label="See Open Source Components"
        icon="chevron-right"
        target="#"
      />
      <Button
        variant="tertiary"
        label="Explore open source components"
        icon="browser"
        target="#"
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

    <Section inverted>
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
