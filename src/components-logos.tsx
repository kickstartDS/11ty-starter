import { PageWrapper } from "./_includes/PageWrapper";
import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { Logos } from "@kickstartds/ds-agency/logos";
import { LogosPaid } from "@kickstartds/ds-agency/logos-paid";

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
        headline="Discover the Logos Component"
        sub="6 examples"
      />
    </Section>
    <PreviewSection
      preview={{
        title: "Centered With Button",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <Logos
        align="center"
        cta={{
          label: "Left Aligned With Text Link",
          link: "#",
          style: "button",
          text: "Explore the success stories of our valued customers and discover more about their journey.",
          toggle: true,
        }}
        logos={[
          {
            alt: "Logo 1",
            src: "/static/img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/static/img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/static/img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logos/logoipsum-286.svg",
          },
        ]}
        tagline="Your Success, Our Commitment"
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "Left Aligned With Text Link",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <Logos
        align="left"
        cta={{
          label: "See all our partners",
          link: "#",
          style: "text",
          text: "Explore the success stories of our valued customers and discover more about their journey.",
          toggle: true,
        }}
        logos={[
          {
            alt: "Logo 1",
            src: "/static/img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/static/img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/static/img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logos/logoipsum-286.svg",
          },
        ]}
        tagline="Your Success, Our Commitment"
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "With Tagline And Button",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <LogosPaid
        align="center"
        cta={{
          label: "See all our partners",
          link: "#",
          style: "button",
          text: "Explore the success stories of our valued customers and discover more about their journey.",
          toggle: true,
        }}
        logos={[
          {
            alt: "Logo 1",
            src: "/static/img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/static/img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/static/img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logos/logoipsum-286.svg",
          },
        ]}
        logosPerRow={4}
        tagline="Your Success, Our Commitment"
      />
    </PreviewSection>

    <PreviewSection
      width="wide"
      preview={{
        title: "Logo Wall",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <LogosPaid
        align="center"
        cta={{
          label: "See all our partners",
          link: "#",
          style: "text",
          text: "Explore the success stories of our valued customers and discover more about their journey.",
          toggle: false,
        }}
        logos={[
          {
            alt: "Logo 1",
            src: "/static/img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/static/img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/static/img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logos/logoipsum-286.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logos/logoipsum-286.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logos/logoipsum-286.svg",
          },
        ]}
        logosPerRow={4}
        tagline="Your Success, Our Commitment"
      />
    </PreviewSection>

    <PreviewSection
      width="wide"
      preview={{
        title: "Logo Row",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <LogosPaid
        align="center"
        cta={{
          label: "See all our partners",
          link: "#",
          style: "text",
          text: "Explore the success stories of our valued customers and discover more about their journey.",
          toggle: false,
        }}
        logos={[
          {
            alt: "Logo 1",
            src: "/static/img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/static/img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/static/img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logos/logoipsum-286.svg",
          },
        ]}
        logosPerRow={6}
        tagline="Your Success, Our Commitment"
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "With Text Link",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <LogosPaid
        align="left"
        cta={{
          label: "See all our partners",
          link: "#",
          style: "text",
          text: "Explore the success stories of our valued customers and discover more about their journey.",
          toggle: true,
        }}
        logos={[
          {
            alt: "Logo 1",
            src: "/static/img/logos/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/static/img/logos/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/static/img/logos/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logos/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logos/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logos/logoipsum-286.svg",
          },
          {
            alt: "Logo 7",
            src: "/static/img/logos/logoipsum-244.svg",
          },
        ]}
        logosPerRow={5}
        tagline="Your Success, Our Commitment"
      />
    </PreviewSection>
  </PageWrapper>
);
