import { PageWrapper } from "./_includes/PageWrapper";
import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { Text } from "@kickstartds/ds-agency/text";

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
        headline="Discover the Text Component"
        sub="4 examples"
      />
    </Section>
    <PreviewSection
      preview={{
        title: "Single Column",
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
      <Text
        align="left"
        layout="singleColumn"
        text="We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).
        
This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._"
      />
    </PreviewSection>

    <PreviewSection
      width="narrow"
      preview={{
        title: "Centered",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Efficiency Meets Excellence",
        sub: "Accelerating Development While Maintaining Quality",
      }}
    >
      <Text
        align="center"
        layout="singleColumn"
        text="We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).
        
This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._"
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "Multi Column",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Revolutionizing Design Systems",
        sub: "Accelerating Development without Sacrificing Quality",
      }}
    >
      <Text
        align="left"
        layout="multiColumn"
        text="We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).
This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.
_Experience the power of streamlined development and see the difference it can make in your projects._"
      />
    </PreviewSection>

    <PreviewSection
      width="wide"
      preview={{
        title: "Highlight",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Our Secret to Efficient, Quality Development",
        sub: "Transforming Design System Dreams into Reality",
        large: true,
        align: "center",
      }}
    >
      <Text
        align="center"
        highlightText
        text="We prioritize efficiency without sacrificing quality. Our secret? A groundbreaking, code-first, open-source framework for [building design systems](#).
        
This tool expedites our **development process**, saving you precious time and enabling us to deliver superior results more quickly. With this framework, your design system aspirations can be realized faster than ever before.

_Experience the power of streamlined development and see the difference it can make in your projects._"
      />
    </PreviewSection>
  </PageWrapper>
);
