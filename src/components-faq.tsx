import { PageWrapper } from "./_includes/PageWrapper";
import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { Faq } from "@kickstartds/ds-agency/faq";

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
        headline="Discover the FAQ Component"
        sub="2 examples"
      />
    </Section>
    <PreviewSection
      preview={{
        title: "Dropdown List",
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
      <Faq
        questions={[
          {
            question: "How do Headless CMSs fit into the picture?",
            answer:
              "A Headless CMS fits perfectly into the picture by offering a content-first approach that complements a Design System. It decouples the back-end content repository from the front-end presentation layer, allowing for seamless integration with any design system. The result is a flexible, scalable, and platform-agnostic system that ensures content consistency across all platforms and devices.",
          },
          {
            question:
              "How does the combination of Headless CMS and Design System create value?",
            answer:
              "The combination of a Headless CMS and a Design System creates value by enhancing efficiency, consistency, and scalability. A Headless CMS allows for seamless content management across various platforms, while a Design System ensures a consistent user experience and brand identity. Together, they enable teams to create and manage digital experiences more effectively, resulting in improved user engagement and business growth.",
          },
          {
            question: "Is transitioning to a Headless Web complicated?",
            answer:
              "Transitioning to a Headless Web can be a significant change, but it doesn't have to be complicated. With the right planning, tools, and expertise, the transition can be smooth and beneficial. It's about understanding your specific needs and goals, choosing the right Headless CMS, and effectively integrating it with your Design System.",
          },
          {
            question:
              "How can I ensure a consistent design across various channels with a Headless Web setup? ",
            answer:
              "Ensuring a consistent design across various channels with a Headless Web setup is achieved through the integration of a Design System. The Design System serves as a single source of truth for design elements and guidelines, ensuring a unified brand identity and user experience across all platforms and devices. Combined with the platform-agnostic nature of a Headless CMS, you can deliver a consistent and engaging user experience across all channels.",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "Single Dropdown",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <Faq
        questions={[
          {
            answer:
              "Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.",
            question: "What is a Design System?",
          },
        ]}
      />
    </PreviewSection>
  </PageWrapper>
);
