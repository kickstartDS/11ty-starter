import { PageWrapper } from "./_includes/PageWrapper";
import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { ImageText } from "@kickstartds/ds-agency/image-text";

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
        headline="Discover the Image Text Component"
        sub="2 examples"
      />
    </Section>

    <PreviewSection
      preview={{
        title: "Beside Layout",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Headless CMS for the modern web",
        sub: "Frequently asked questions",
      }}
    >
      <ImageText
        image={{
          alt: "Agency",
          src: "/static/img/close-up-young-business-team-working.png",
        }}
        layout="beside-right"
        text="We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).
        
This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._"
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "Above Layout",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="narrow"
      headline={{
        text: "Headless CMS for the modern web",
        sub: "Frequently asked questions",
      }}
    >
      <ImageText
        image={{
          alt: "Agency",
          src: "/static/img/close-up-young-business-team-working.png",
        }}
        layout="above"
        text="We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).
        
This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._"
      />
    </PreviewSection>
  </PageWrapper>
);
