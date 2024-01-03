import { PageWrapper } from "./_includes/PageWrapper";
import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { Testimonials } from "@kickstartds/ds-agency/testimonials";
import { TestimonialsPaid } from "@kickstartds/ds-agency/testimonials-paid";

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
        headline="Discover the Testimonials Component"
        sub="7 examples"
      />
    </Section>
    <PreviewSection
      headline={{
        text: "Services in Design Systems",
        sub: "Voices of Our Clients: Experiencing the Impact of Design Systems",
        align: "center",
      }}
      preview={{
        title: "Simple",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <Testimonials
        testimonials={[
          {
            image: {
              alt: "Alt Text Customer 1",
              src: "/static/img/people/author-emily.png",
            },
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            name: "Emily Johnson",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      headline={{
        text: "Showcasing Satisfied Clients",
        sub: "We can also create something brilliant for you!",
        align: "center",
      }}
      preview={{
        title: "With Title",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <Testimonials
        testimonials={[
          {
            image: {
              alt: "Alt Text Customer 1",
              src: "/static/img/people/author-emily.png",
            },
            name: "Emily Johnson",
            title: "Chief Marketing Officer at TechFusion Enterprises",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      headline={{
        text: "Highlighting Our Creative Solutions",
        sub: "Hear what our AI-generated customers have to say",
        textAlign: "left",
      }}
      preview={{
        title: "List Layout",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <Testimonials
        testimonials={[
          {
            image: {
              alt: "Alt Text Customer 1",
              src: "/static/img/people/author-emily.png",
            },
            name: "Emily Johnson",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            image: {
              alt: "Alt Text Customer 2",
              src: "/static/img/people/author-john.png",
            },
            name: "John Smith",
            quote:
              "Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
          {
            image: {
              alt: "Alt Text Customer 3",
              src: "/static/img/people/author-alex.png",
            },
            name: "Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      headline={{
        text: "Additional Demonstrations of Our Customer Successes",
        sub: "Showcasing Further Triumphs in Client Satisfaction",
        textAlign: "left",
      }}
      preview={{
        title: "Slider Layout",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <TestimonialsPaid
        layout="slider"
        testimonials={[
          {
            image: {
              alt: "Alt Text Customer 1",
              src: "/static/img/people/author-emily.png",
            },
            name: "Emily Johnson",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            image: {
              alt: "Alt Text Customer 2",
              src: "/static/img/people/author-john.png",
            },
            name: "John Smith",
            quote:
              "Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
          {
            image: {
              alt: "Alt Text Customer 3",
              src: "/static/img/people/author-alex.png",
            },
            name: "Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      headline={{
        text: "Delving into the Strength of Headless CMS",
        sub: "Further Illustrations of Our Clientele's Achievements",
        textAlign: "left",
      }}
      preview={{
        title: "With Rating",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <TestimonialsPaid
        layout="slider"
        testimonials={[
          {
            image: {
              alt: "Alt Text Customer 1",
              src: "/static/img/people/author-emily.png",
            },
            name: "Emily Johnson",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            rating: 5,
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            image: {
              alt: "Alt Text Customer 2",
              src: "/static/img/people/author-john.png",
            },
            name: "John Smith",
            quote:
              "Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            rating: 4,
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
          {
            image: {
              alt: "Alt Text Customer 3",
              src: "/static/img/people/author-alex.png",
            },
            name: "Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            rating: 5,
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      headline={{
        text: "Additional Demonstrations of Our Customer Successes",
        sub: "AI-generated smiles, as you see them everywhere nowadays",
        textAlign: "left",
      }}
      preview={{
        title: "List Layout",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <TestimonialsPaid
        layout="list"
        testimonials={[
          {
            image: {
              alt: "Alt Text Customer 1",
              src: "/static/img/people/author-emily.png",
            },
            name: "Emily Johnson",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            rating: 5,
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            image: {
              alt: "Alt Text Customer 2",
              src: "/static/img/people/author-john.png",
            },
            name: "John Smith",
            quote:
              "Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            rating: 4,
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
          {
            image: {
              alt: "Alt Text Customer 3",
              src: "/static/img/people/author-alex.png",
            },
            name: "Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            rating: 5,
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      headline={{
        text: "Delving into the Strength of Headless CMS",
        sub: "More Examples of Successful Collaborations with Our Clients",
        textAlign: "left",
      }}
      preview={{
        title: "Alternating Layout",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <TestimonialsPaid
        layout="alternating"
        testimonials={[
          {
            image: {
              alt: "Alt Text Customer 1",
              src: "/static/img/people/author-emily.png",
            },
            name: "Emily Johnson",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            rating: 5,
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            image: {
              alt: "Alt Text Customer 2",
              src: "/static/img/people/author-john.png",
            },
            name: "John Smith",
            quote:
              "Systemics's design system transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            rating: 4,
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
          {
            image: {
              alt: "Alt Text Customer 3",
              src: "/static/img/people/author-alex.png",
            },
            name: "Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            rating: 5,
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </PreviewSection>
  </PageWrapper>
);
