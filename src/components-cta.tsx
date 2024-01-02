import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { CtaPaid } from "@kickstartds/ds-agency/cta-paid";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";

import { PageWrapper } from "./_includes/PageWrapper";

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
    <Section
      content={{
        mode: "list",
        gutter: "none",
      }}
    >
      <PageIntro
        link={{
          href: "/components-overview",
          label: "All Components",
        }}
        headline="Discover the Cta Component"
        sub="9 examples"
      />
    </Section>
    <PreviewSection
      preview={{
        title: "Banner",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="default"
      content={{
        mode: "list",
      }}
    >
      <Cta
        buttons={[
          {
            icon: "person",
            label: "Get Started",
            target: "#",
          },
        ]}
        headline="Why Choose Our Design System?"
        sub="Built for consistency and speed."
        text="Our design system is built with scalability and efficiency in mind. It allows for consistent UI across different platforms, making your development process smoother and faster."
        textAlign="center"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Highlighed",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="wide"
      content={{
        mode: "list",
      }}
    >
      <Cta
        buttons={[
          {
            icon: "person",
            label: "Get Started",
            target: "#",
          },
        ]}
        headline="Why Choose Our Design System?"
        highlightText
        sub="Built for consistency and speed."
        text="Our design system is built with scalability and efficiency in mind. It allows for consistent UI across different platforms, making your development process smoother and faster."
        textAlign="center"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Left Aligned",
        label: "Free",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="default"
      content={{
        mode: "list",
      }}
    >
      <Cta
        buttons={[
          {
            icon: "person",
            label: "Learn More",
            target: "#",
          },
        ]}
        headline="Experience Our Design System"
        sub="Efficient, scalable, seamless."
        text="Our design system offers a seamless and efficient way to build scalable applications. Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture."
        textAlign="left"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Product Advertisement",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="full"
      content={{
        mode: "list",
      }}
    >
      <CtaPaid
        backgroundImage="/static/img/bg_dot-carpet-blue.svg"
        buttons={[
          {
            icon: "chevron-right",
            label: "Shop Now",
            target: "/shop",
          },
          {
            label: "Learn More",
            target: "/product-info",
          },
        ]}
        contentAlign="center"
        headline="Experience Immersive Sound"
        highlightText
        image={{
          alt: "Over-Ear Headphones",
          padding: false,
          src: "/static/img/showcases/comp_audio04.png",
        }}
        order={{
          desktopImageLast: false,
          mobileImageLast: false,
        }}
        sub="With Our Premium Over-Ear Headphones"
        text="Our over-ear headphones provide an immersive audio experience. With noise-cancellation technology and high-quality sound."
        textAlign="left"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Contact Banner",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="full"
      content={{
        mode: "list",
      }}
    >
      <CtaPaid
        buttons={[
          {
            icon: "person",
            label: "Contact us",
            target: "#",
          },
          {
            icon: "date",
            label: "Book a meeting",
            target: "#",
          },
        ]}
        contentAlign="center"
        fullWidth
        headline="Get in touch"
        image={{
          padding: false,
          src: "/static/img/contact-person.png",
        }}
        order={{
          desktopImageLast: false,
          mobileImageLast: false,
        }}
        sub="Chat with us about getting your product or platform to market faster"
        text="Our modular design approach allows for flexibility and scalability in your application's architecture."
        textAlign="left"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Split Banner",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="wide"
      content={{
        mode: "list",
      }}
    >
      <CtaPaid
        backgroundColor="#001856"
        buttons={[
          {
            icon: "person",
            label: "What can we do for you?",
            target: "#",
          },
        ]}
        colorNeutral
        contentAlign="center"
        fullWidth
        headline="Design System Services"
        image={{
          padding: false,
          src: "/static/img/colored-square.png",
        }}
        order={{
          desktopImageLast: false,
          mobileImageLast: false,
        }}
        text="Here at Systemics, we bring a range of design system services that can make a difference."
        textAlign="left"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Angled Image",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="full"
      backgroundColor="accent"
      spaceAfter="none"
      spaceBefore="none"
      content={{
        mode: "list",
      }}
    >
      <CtaPaid
        buttons={[
          {
            icon: "person",
            label: "Contact us",
            target: "#",
          },
          {
            icon: "date",
            label: "Book a meeting",
            target: "#",
          },
        ]}
        contentAlign="center"
        fullWidth
        headline="Our **Approach** to Design Systems"
        image={{
          padding: false,
          src: "/static/img/angled-image.png",
        }}
        order={{
          desktopImageLast: true,
          mobileImageLast: false,
        }}
        text="We value efficiency without compromising quality. Our secret weapon? kickstartDS, a revolutionary code-first and open source framework for creating design systems.

This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster."
        textAlign="left"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Colored Banner",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="full"
      content={{
        mode: "list",
      }}
    >
      <CtaPaid
        backgroundColor="#a30051"
        buttons={[
          {
            label: "Learn More",
            target: "#",
          },
          {
            label: "Contact Us",
            target: "#",
          },
        ]}
        colorNeutral
        contentAlign="center"
        headline="Expertise in Scalable Solutions"
        highlightText
        image={{
          padding: true,
        }}
        order={{
          desktopImageLast: true,
          mobileImageLast: false,
        }}
        text="Leverage our expertise in creating scalable and robust applications using modern technologies."
        textAlign="left"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Align Bottom",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="wide"
      content={{
        mode: "list",
      }}
    >
      <CtaPaid
        backgroundImage="/static/img/grid-bg.svg"
        buttons={[
          {
            icon: "person",
            label: "Contact us",
            target: "#",
          },
          {
            icon: "date",
            label: "Book a meeting",
            target: "#",
          },
        ]}
        contentAlign="bottom"
        fullWidth
        headline="Custom Solutions"
        image={{
          padding: true,
          src: "/static/img/offset-image.png",
        }}
        order={{
          desktopImageLast: false,
          mobileImageLast: false,
        }}
        text="At Systemics, we believe in the power of technology to transform businesses. Our team of experienced professionals is dedicated to providing innovative solutions that meet the unique needs of your business.

We understand that every business is different, and that's why we offer custom solutions tailored to your specific business needs and requirements."
        textAlign="left"
      />
    </PreviewSection>{" "}
  </PageWrapper>
);
