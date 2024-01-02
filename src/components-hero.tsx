import { Section } from "@kickstartds/ds-agency/section";
import { Hero } from "@kickstartds/ds-agency/hero";
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
    <Section>
      <PageIntro
        link={{
          href: "/components-overview",
          label: "All Components",
        }}
        headline="Discover the Hero Component"
        sub="3 examples"
      />
    </Section>
    <PreviewSection
      width="full"
      spaceBefore="none"
      spaceAfter="none"
      preview={{
        title: "Text Below Image",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      content={{
        mode: "list",
      }}
    >
      <Hero
        buttons={[
          {
            icon: "arrow-down",
            label: "Explore further",
            target: "#",
          },
        ]}
        headline="Welcome to Our Dynamic Workplace"
        height="default"
        highlightText
        image={{
          indent: "none",
          src: "https://picsum.photos/seed/kdsvisual/640/270",
          srcDesktop:
            "/static/img/people/colleagues-work-office-using-computers-looking-aside.png",
          srcMobile:
            "/static/img/people/colleagues-work-office-using-computers-looking-aside.png",
          srcTablet:
            "/static/img/people/colleagues-work-office-using-computers-looking-aside.png",
        }}
        overlay
        sub="Where Creativity Meets Innovation"
        text="Experience the perfect blend of creativity, innovation, and productivity in our modern office environment."
        textPosition="below"
      />
    </PreviewSection>
    <PreviewSection
      width="full"
      spaceBefore="none"
      spaceAfter="none"
      preview={{
        title: "Text On Image With Overlay",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      content={{
        mode: "list",
      }}
    >
      <Hero
        buttons={[
          {
            icon: "person",
            label: "Meet Us",
            target: "#",
          },
          {
            icon: "date",
            label: "Schedule a Meeting",
            target: "#",
          },
        ]}
        colorNeutral
        headline="Master Scalable Solutions"
        height="fullImage"
        image={{
          indent: "none",
          src: "https://picsum.photos/seed/kdsvisual/640/270",
          srcDesktop: "/static/img/top-view-desk-with-keyboard-drawing-pad.png",
          srcMobile: "/static/img/top-view-desk-with-keyboard-drawing-pad.png",
          srcTablet: "/static/img/top-view-desk-with-keyboard-drawing-pad.png",
        }}
        overlay
        text="Harness our expertise in crafting scalable and robust applications using cutting-edge technologies."
        textPosition="center"
      />
    </PreviewSection>
    <PreviewSection
      width="full"
      spaceBefore="none"
      spaceAfter="none"
      preview={{
        title: "Text On Image With Overlay",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      content={{
        mode: "list",
      }}
    >
      <Hero
        buttons={[
          {
            icon: "arrow-right",
            label: "Discover More",
            target: "#",
          },
          {
            icon: "phone",
            label: "Reach Out",
            target: "#",
          },
        ]}
        headline="Discover Our Design System"
        height="fullScreen"
        image={{
          indent: "none",
          src: "https://picsum.photos/seed/kdsvisual/640/270",
          srcDesktop:
            "/static/img/people/people-brainstorming-work-meeting.png",
          srcMobile: "/static/img/people/people-brainstorming-work-meeting.png",
          srcTablet: "/static/img/people/people-brainstorming-work-meeting.png",
        }}
        sub="Scalable. Efficient. Seamless."
        text="Our design system provides a seamless and efficient framework for building scalable applications. Experience unprecedented speed and scalability with our Headless CMS powered websites, web apps & composable architecture."
        textPosition="left"
        textbox
      />
    </PreviewSection>
  </PageWrapper>
);
