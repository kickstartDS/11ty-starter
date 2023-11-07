import { Section } from "@kickstartds/ds-agency/section";
import { StatsPaid } from "@kickstartds/ds-agency/stats-paid";
import { CtaPaid } from "@kickstartds/ds-agency/cta-paid";
import { Text } from "@kickstartds/ds-agency/text";
import { Gallery } from "@kickstartds/ds-agency/gallery";
import { PageWrapper } from "./_includes/PageWrapper";
import { Hero } from "@kickstartds/ds-agency/components/hero/index.js";
import { ImageStory } from "@kickstartds/ds-agency/components/image-story/index.js";

export const data = {
  title: "About Systemics, your Design System Agency",
  layout: "base.njk",
  eleventyNavigation: {
    key: "About",
    order: 2,
  },
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section spaceBefore="none" width="full">
      <Hero
        height="fullImage"
        image={{
          srcMobile:
            "/static/img/colleagues-work-office-using-computers-looking-aside.jpg",
        }}
        overlay
        largeHeadline
        textPosition="below"
        headline="Crafting Digital Brilliance at Systemics"
        sub="Elevating Headless Experiences through Innovative Design Systems"
        text={`At Systemics, we specialize in creating bespoke design systems that bring harmony and consistency to your digital presence. Our expertise extends beyond design, as we seamlessly integrate headless CMS architecture, maximizing the value of both worlds. We work closely with you, understanding your brand's essence and user needs, to craft experiences that leave a lasting impact.`}
      />
    </Section>

    <Section
      headline={{
        text: "We empower Businesses with the Tools they need to thrive in the Digital Landscape.",
        sub: "Our crystal clear mission:",
        switchOrder: true,
        width: "default",
        align: "center",
      }}
      content={{
        width: "default",
        align: "right",
      }}
      style="horizontalGradient"
      width="wide"
    >
      <Text
        text={`**We believe** that well-crafted design systems are the cornerstone of exceptional user experiences. Our team is dedicated to providing clients with tailored solutions that bridge the gap between creativity and functionality, ultimately reshaping the way users engage with brands.`}
        style="highlight"
      />
    </Section>

    <Section
      inverted
      content={{
        mode: "list",
        gutter: "large",
      }}
      backgroundColor="bold"
      width="wide"
      style="anchorGlow"
    >
      <ImageStory
        image={{
          src: "/static/img/deco/office-building-3.png",
        }}
        headline="Benefit from the **power of kickstartDS**"
        text={`**as we do too!**
We strongly believe in using the best tools to bring our clients exceptional results. That's why we've integrated kickstartDS into our workflow. This code-first framework for design system creation is our secret sauce to saving time, without compromising on quality.

kickstartDS allows us to fast-track the development process, ensuring you get a fully functional and polished design system in a fraction of the time it would traditionally take.

## **Maximizing Value** for Our Clients
We're not just building design systems; we're building value. By combining our expertise in design systems and headless CMS architecture, we deliver solutions that are not only visually appealing but also inherently functional.

This approach ensures that your brand's identity remains consistent across platforms while your content distribution becomes more dynamic and efficient. We firmly believe that a harmonious blend of design systems and headless CMSs unlocks immense potential for businesses, propelling them ahead in the digital race.
`}
      />
      <ImageStory
        layout="imageLeft"
        image={{
          src: "/static/img/deco/office-building-2.png",
        }}
        headline="About & History"
        text={`### Founded by passionate digital enthusiasts 

Systemics emerged from the desire to reshape the digital realm. With a history spanning over a decade, we've continuously evolved to stay at the forefront of design systems, headless CMSs, and cutting-edge development practices.
        
Our journey is one of innovation, collaboration, and a relentless pursuit of excellence. **Wann join us?**`}
      />
    </Section>

    <Section
      headline={{
        text: "Facts & Figures",
        textAlign: "center",
      }}
      backgroundColor="accent"
      style="symmetricGlow"
      width="wide"
    >
      <StatsPaid
        stats={[
          {
            number: 33,
            title: "Years of Expertise",
            icon: "map",
            description:
              "With over 33 years in the industry, we`ve honed our craft and forged a reputation for **headless excellence** designed in systems.",
          },
          {
            number: 200,
            title: "Successful Projects",
            icon: "upload",
            description:
              "**We`re so great**, that we`ve collaborated with diverse clients, across industries, delivering impactful solutions that drive results",
          },
          {
            number: 99,
            title: "Client Satisfaction",
            icon: "star-outline",
            description:
              "Thanks to **NPS, our client-centric** approach ensures we meet and exceed expectations, reflected in our high satisfaction rate",
          },
        ]}
      />
    </Section>

    <Section
      headline={{
        text: "Super cool Agency Life here",
      }}
      backgroundColor="accent"
      width="wide"
    >
      <Gallery
        images={[
          {
            alt: "Alt text Image 1",
            caption: "Caption Image 1",
            url: "/static/img/agency.png",
          },
          {
            alt: "Alt text Image 2",
            caption: "Caption Image 2",
            url: "/static/img/team.png",
          },
          {
            alt: "Alt text Image 3",
            caption: "Caption Image 3",
            url: "/static/img/agency.png",
          },
          {
            alt: "Alt text Image 4",
            caption: "Caption Image 4",
            url: "/static/img/agency.png",
          },
          {
            alt: "Alt text Image 5",
            caption: "Caption Image 5",
            url: "/static/img/team.png",
          },
          {
            alt: "Alt text Image 6",
            caption: "Caption Image 6",
            url: "/static/img/agency.png",
          },
        ]}
        layout="largeTiles"
      />
    </Section>

    <Section inverted>
      <CtaPaid
        align="left"
        headline="Discover the **Systemics** difference. Join us in creating a **Digital Future** that's both functional and unforgettable."
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
