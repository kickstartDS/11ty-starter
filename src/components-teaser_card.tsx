import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
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
    <Section>
      <PageIntro
        link={{
          href: "/components-overview",
          label: "All Components",
        }}
        headline="Discover the Teaser Card Component"
        sub="3 examples"
      />
    </Section>

    <PreviewSection
      preview={{
        title: "Product Tiles",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Discover the Extensive Range of Our Software Solutions",
        sub: "Tailored solutions to meet every digital need",
        switchOrder: true,
        align: "center",
      }}
      buttons={[
        {
          label: "See more",
          target: "#",
        },
      ]}
    >
      <TeaserCard
        headline="Castaway"
        text="Transforming Ideas into Code"
        image="/static/img/logos/castaway.svg"
        target="#"
        displayButton={false}
      />
      <TeaserCard
        headline="Communigate"
        text="Empowering Innovation, One Line at a Time"
        image="/static/img/logos/communigate.svg"
        target="#"
        displayButton={false}
      />
      <TeaserCard
        headline="AP Solutions"
        text="Coding the Future, Today"
        image="/static/img/logos/ap.svg"
        target="#"
        displayButton={false}
      />
      <TeaserCard
        headline="HighDensity"
        text="Where Technology Meets Creativity"
        image="/static/img/logos/highdensity.svg"
        target="#"
        displayButton={false}
      />
      <TeaserCard
        headline="Major.ly"
        text="Simplifying Complexity, One Click at a Time"
        image="/static/img/logos/majorly.svg"
        target="#"
        displayButton={false}
      />
      <TeaserCard
        headline="UniversalTech"
        text="Driving Progress with Every Pixel"
        image="/static/img/logos/universaltech.svg"
        target="#"
        displayButton={false}
      />
    </PreviewSection>

    <PreviewSection
      headline={{
        text: "Exploring the Power of **Headless CMS**",
        sub: "Unleashing Efficiency, Scalability, and Performance in Web Development",
        large: true,
        align: "center",
        width: "default",
      }}
      width="wide"
      preview={{
        title: "Page Nav",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <TeaserCard
        displayButton
        headline="Design System Services"
        text="Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture."
        image="/static/img/aboutus/02.jpg"
        target="#"
      />
      <TeaserCard
        displayButton
        headline="Accelerating Digital Experiences"
        text="Discover how our Headless CMS accelerates digital experiences by saving development time and enhancing user experience."
        image="/static/img/aboutus/03.jpg"
        target="#"
      />
      <TeaserCard
        displayButton
        headline="Unleashing Web Speed"
        text="Unleash a new level of web speed and scalability with our unique composable architecture powered by Headless CMS."
        image="/static/img/aboutus/04.jpg"
        target="#"
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "Showcase Preview",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      width="wide"
      headline={{
        text: "Happy Customers Showcases",
        sub: "We can create something shining for you too!",
        switchOrder: true,
      }}
    >
      <TeaserCard
        target="#"
        label="Tech"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="#"
        label="Sustainability"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
      />
      <TeaserCard
        target="#"
        label="Product"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
    </PreviewSection>
  </PageWrapper>
);
