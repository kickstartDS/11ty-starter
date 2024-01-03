import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { PageWrapper } from "./_includes/PageWrapper";
import { Features } from "@kickstartds/ds-agency/features";

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
        headline="Discover the Features Component"
        sub="5 examples"
      />
    </Section>
    <PreviewSection
      width="wide"
      preview={{
        title: "Icon Centered",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Explore Our Feature Set",
        sub: "Dive into the wide array of functionalities we provide",
        align: "center",
        large: true,
      }}
    >
      <Features
        ctas={{
          style: "link",
          toggle: true,
        }}
        features={[
          {
            cta: {
              label: "Learn more",
              target: "/feature1",
            },
            icon: "home",
            text: "Our design system allows for a scalable architecture, enabling you to build applications that can grow with your needs.",
            title: "Scalable Architecture",
          },
          {
            cta: {
              label: "Get started",
              target: "/feature2",
            },
            icon: "map",
            text: "Experience efficient development like never before. Our design system streamlines the development process, saving you time and resources.",
            title: "Efficient Development",
          },
          {
            cta: {
              label: "Explore",
              target: "/feature3",
            },
            icon: "person",
            text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
            title: "Consistent UI",
          },
          {
            cta: {
              label: "Customize",
              target: "/feature4",
            },
            icon: "star",
            text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
            title: "Customizable Design",
          },
          {
            cta: {
              label: "Deploy",
              target: "/feature5",
            },
            icon: "upload",
            text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
            title: "Cloud Ready",
          },
          {
            cta: {
              label: "Secure",
              target: "/feature6",
            },
            icon: "login",
            text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
            title: "Secure",
          },
        ]}
        layout="largeTiles"
        style="centered"
      />
    </PreviewSection>
    <PreviewSection
      width="wide"
      preview={{
        title: "Stack With Button",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Uncover Our Capabilities",
        sub: "Discover the extensive features that set us apart",
      }}
    >
      <Features
        ctas={{
          style: "button",
          toggle: true,
        }}
        features={[
          {
            cta: {
              label: "Explore",
              target: "/feature3",
            },
            icon: "person",
            text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
            title: "Consistent UI",
          },
          {
            cta: {
              label: "Customize",
              target: "/feature4",
            },
            icon: "star",
            text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
            title: "Customizable Design",
          },
          {
            cta: {
              label: "Deploy",
              target: "/feature5",
            },
            icon: "upload",
            text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
            title: "Cloud Ready",
          },
          {
            cta: {
              label: "Secure",
              target: "/feature6",
            },
            icon: "login",
            text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
            title: "Secure",
          },
        ]}
        layout="smallTiles"
        style="stack"
      />
    </PreviewSection>
    <PreviewSection
      width="narrow"
      preview={{
        title: "List View",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Discover What We Bring to the Table",
        sub: "A look into the unique features we offer",
      }}
    >
      <Features
        ctas={{ style: "intext", toggle: false }}
        features={[
          {
            cta: {
              label: "Customize",
              target: "/feature4",
            },
            icon: "star",
            text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
            title: "Customizable Design",
          },
          {
            cta: {
              label: "Get started",
              target: "/feature2",
            },
            icon: "map",
            text: "Experience efficient development like never before. Our design system streamlines the development process, saving you time and resources.",
            title: "Efficient Development",
          },
          {
            cta: {
              label: "Explore",
              target: "/feature3",
            },
            icon: "person",
            text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
            title: "Consistent UI",
          },
          {
            cta: {
              label: "Learn more",
              target: "/feature1",
            },
            icon: "home",
            text: "Our design system allows for a scalable architecture, enabling you to build applications that can grow with your needs.",
            title: "Scalable Architecture",
          },
          {
            cta: {
              label: "Deploy",
              target: "/feature5",
            },
            icon: "upload",
            text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
            title: "Cloud Ready",
          },
          {
            cta: {
              label: "Secure",
              target: "/feature6",
            },
            icon: "login",
            text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
            title: "Secure",
          },
        ]}
        layout="list"
        style="besideLarge"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Icon Beside With Link In Text",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Experience Our Feature-Rich Solutions",
        sub: "Get to know the diverse functionalities we have in store",
      }}
    >
      <Features
        ctas={{
          style: "intext",
          toggle: true,
        }}
        features={[
          {
            cta: {
              label: "Learn more",
              target: "/feature1",
            },
            icon: "home",
            text: "Our design system allows for a scalable architecture, enabling you to build applications that can grow with your needs.",
            title: "Scalable Architecture",
          },
          {
            cta: {
              label: "Get started",
              target: "/feature2",
            },
            icon: "map",
            text: "Experience efficient development like never before. Our design system streamlines the development process, saving you time and resources.",
            title: "Efficient Development",
          },
          {
            cta: {
              label: "Explore",
              target: "/feature3",
            },
            icon: "person",
            text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
            title: "Consistent UI",
          },
          {
            cta: {
              label: "Customize",
              target: "/feature4",
            },
            icon: "star",
            text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
            title: "Customizable Design",
          },
          {
            cta: {
              label: "Deploy",
              target: "/feature5",
            },
            icon: "upload",
            text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
            title: "Cloud Ready",
          },
          {
            cta: {
              label: "Secure",
              target: "/feature6",
            },
            icon: "login",
            text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
            title: "Secure",
          },
        ]}
        layout="smallTiles"
        style="intext"
      />
    </PreviewSection>
    <PreviewSection
      preview={{
        title: "Icon Intext With Link",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Delve into Our Offerings",
        sub: "Unveiling the features that make us stand out",
      }}
    >
      <Features
        ctas={{
          style: "link",
          toggle: true,
        }}
        features={[
          {
            cta: {
              label: "Customize",
              target: "/feature4",
            },
            icon: "star",
            text: "Our design system is fully customizable, allowing you to tailor the look and feel of your application to match your brand identity.",
            title: "Customizable Design",
          },
          {
            cta: {
              label: "Get started",
              target: "/feature2",
            },
            icon: "map",
            text: "Experience efficient development like never before. Our design system streamlines the development process, saving you time and resources.",
            title: "Efficient Development",
          },
          {
            cta: {
              label: "Explore",
              target: "/feature3",
            },
            icon: "person",
            text: "Achieve a consistent UI across different platforms. Our design system ensures your applications maintain a uniform look and feel.",
            title: "Consistent UI",
          },
          {
            cta: {
              label: "Deploy",
              target: "/feature5",
            },
            icon: "upload",
            text: "Built with modern cloud architectures in mind, our design system is ready to be deployed on any cloud platform.",
            title: "Cloud Ready",
          },
          {
            cta: {
              label: "Secure",
              target: "/feature6",
            },
            icon: "login",
            text: "Security is our priority. Our design system is built with best security practices to keep your application safe.",
            title: "Secure",
          },
        ]}
        layout="largeTiles"
        style="intext"
      />
    </PreviewSection>
  </PageWrapper>
);
