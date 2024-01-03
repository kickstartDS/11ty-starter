import { PageWrapper } from "./_includes/PageWrapper";
import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { Mosaic } from "@kickstartds/ds-agency/mosaic";

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
        headline="Discover the Mosaic Component"
        sub="2 examples"
      />
    </Section>

    <PreviewSection
      width="full"
      preview={{
        title: "Colorful Tiles",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <Mosaic
        layout="alternate"
        tiles={[
          {
            backgroundColor: "#81005a",
            button: {
              label: "Book a meeting",
              toggle: true,
            },
            headline: "Collaborative Environment",
            image: {
              src: "/static/img/mosaic-1.png",
            },
            text: "Our team thrives in a collaborative environment, fostering creativity and innovation.",
          },
          {
            backgroundColor: "#003380",
            button: {
              label: "Book a meeting",
              toggle: true,
            },
            headline: "Modern Infrastructure",
            image: {
              src: "/static/img/mosaic-2.png",
            },
            text: "Our state-of-the-art office facilities inspire productivity and efficiency.",
          },
          {
            backgroundColor: "#004241",
            button: {
              label: "Book a meeting",
              toggle: true,
            },
            headline: "Teamwork",
            image: {
              src: "/static/img/mosaic-3.png",
            },
            text: "We believe in the power of teamwork. Together, we can achieve great things.",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      width="wide"
      preview={{
        title: "Colorful Text With Illustrations",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <Mosaic
        layout="textLeft"
        tiles={[
          {
            button: {
              label: "Book a meeting",
              toggle: false,
            },
            headline: "Effective Communication",
            image: {
              src: "/static/img/mosaic-2_1.svg",
            },
            sub: "We believe in clear and effective communication. Our team members are always ready to share ideas and solutions.",
            textColor: "#FCFF7D",
          },
          {
            button: {
              label: "Book a meeting",
              toggle: false,
            },
            headline: "Data-Driven Decisions",
            image: {
              src: "/static/img/mosaic-2_2.svg",
            },
            sub: "We make decisions based on data. Our strategies are always backed by solid facts and figures.",
            textColor: "#7DD0FF",
          },
          {
            button: {
              label: "Book a meeting",
              toggle: false,
            },
            headline: "Innovative Design",
            image: {
              src: "/static/img/mosaic-2_3.svg",
            },
            sub: "We are committed to creating innovative designs. Our team is always exploring new ways to improve user experience.",
            textColor: "#FF7DC3",
          },
        ]}
      />
    </PreviewSection>
  </PageWrapper>
);
