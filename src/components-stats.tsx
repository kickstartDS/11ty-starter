import { PageWrapper } from "./_includes/PageWrapper";
import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { Stats } from "@kickstartds/ds-agency/stats";
import { StatsPaid } from "@kickstartds/ds-agency/stats-paid";

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
        headline="Discover the Stats Component"
        sub="4 examples"
      />
    </Section>
    <PreviewSection
      preview={{
        title: "Simple",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Facts & Figures",
        sub: "Measuring Our Progress in Numbers",
        align: "center",
      }}
    >
      <Stats
        stats={[
          {
            number: 1500,
            title: "Users",
          },
          {
            number: 350,
            title: "Subscribers",
          },
          {
            number: 125,
            title: "Components",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "With Description",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Key Statistics & Metrics",
        align: "center",
      }}
    >
      <Stats
        stats={[
          {
            description:
              "Experience the power of our platform, embraced by a vast community of users. Our user base is diverse and dynamic, including both active and inactive members. Join us and become part of this ever-growing community.",
            number: 1500,
            title: "Users",
          },
          {
            description:
              "Stay ahead with our regular updates and newsletters. Our subscribers are always in the loop, receiving the latest news and features. Subscribe now and never miss an update from us.",
            number: 350,
            title: "Subscribers",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "Count Up With Icons",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Our Agency in Numbers",
        sub: "Insights into Our Performance",
        align: "center",
      }}
    >
      <StatsPaid
        stats={[
          {
            icon: "person",
            number: 1500,
            title: "Users",
          },
          {
            icon: "star",
            number: 350,
            title: "Subscribers",
          },
          {
            icon: "map",
            number: 125,
            title: "Locations",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "Count Up With Description",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Snapshot of Our Success",
        sub: "Quantifying Our Achievements",
        align: "center",
      }}
    >
      <StatsPaid
        stats={[
          {
            description:
              "Experience the power of our platform, embraced by a vast community of users. Our user base is diverse and dynamic, including both active and inactive members. Join us and become part of this ever-growing community.",
            icon: "person",
            number: 1500,
            title: "Users",
          },
          {
            description:
              "Stay ahead with our regular updates and newsletters. Our subscribers are always in the loop, receiving the latest news and features. Subscribe now and never miss an update from us.",
            icon: "person",
            number: 350,
            title: "Subscribers",
          },
        ]}
      />
    </PreviewSection>
  </PageWrapper>
);
