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
      headline={{
        text: "Design System Services",
        align: "center",
      }}
      preview={{
        title: "Simple",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
    >
      <TeaserCard
        displayButton={false}
        headline="Accelerating Digital Experiences with Headless CMS"
        image="/static/img/close-up-young-business-team-working.png"
        target="#"
        text="Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture."
      />
      <TeaserCard
        displayButton={false}
        headline="Unleashing Web Speed with Headless CMS"
        image="/static/img/full-shot-different-people-working-together.png"
        target="#"
        text="Discover a new level of speed and scalability with our Headless CMS-driven websites and web applications, all thanks to our unique composable architecture."
      />
    </PreviewSection>

    <PreviewSection
      headline={{
        text: "Exploring the Power of Headless CMS",
        sub: "Unleashing Efficiency, Scalability, and Performance in Web Development",
        large: true,
        align: "center",
      }}
      width="wide"
      preview={{
        title: "With Button",
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
      width="wide"
      headline={{
        text: "Happy Customers Showcases",
        sub: "We can create something shining for you too!",
      }}
      preview={{
        title: "With Label",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
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
