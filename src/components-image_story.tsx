import { PageWrapper } from "./_includes/PageWrapper";
import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { ImageStory } from "@kickstartds/ds-agency/image-story";

export const data = {
  title:
    "We are Systemics. we build headless design system driven solutions! And, we're great!",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Home",
    order: 1,
  },
};

export default (props) => (
  <PageWrapper>
    <Section>
      <PageIntro
        link={{
          href: "/components-overview",
          label: "All Components",
        }}
        headline="Discover the Image Story Component"
        sub="1 example"
      />
    </Section>
    <PreviewSection
      preview={{
        title: "Sticky Image Next To Scrolling Text",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="wide"
    >
      <ImageStory
        buttons={[
          {
            disabled: false,
            label: "Learn More",
            size: "medium",
            target: "#",
            variant: "secondary",
          },
          {
            disabled: false,
            label: "Contact Us",
            size: "medium",
            target: "#",
            variant: "secondary",
          },
        ]}
        headline="The Sanity & Next.js Experts"
        image={{
          ratio: "none",
          src: "/static/img/full-shot-different-people-working-together.png",
        }}
        largeHeadline
        layout="imageLeft"
        sub="Subheadline"
        text="
Here at Systemics, we bring a range of design system services that can make a difference:

### 1. Design System Consulting
Let's work side by side to shape a design system strategy that aligns perfectly with your goals. It's not just about tools; it's about guiding principles, stakeholder management und making the right decisions at the right time.

### 2. Design System Creation & Development
We'll bring your design system from concept to production, giving you consistent and engaging user experiences across different platforms. We will work together with your digital teams to transfer all complex Figma ideas into code using kickstartDS.

### 3. Headless CMS & Websites
We leverage the power of headless CMSs to provide scalable, flexible, and versatile websites that drive your online presence.

### 4. Design System Training
We empower your digital teams with the knowledge and skills to manage and evolve your design system effectively.

Ready to make your digital journey exceptional?
    "
        textAlign="left"
      />
    </PreviewSection>
  </PageWrapper>
);
