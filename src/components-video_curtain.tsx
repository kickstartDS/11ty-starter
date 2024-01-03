import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { VideoCurtain } from "@kickstartds/ds-agency/video-curtain";
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
        title: "Atmospheric Video With Overlay",
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
      <VideoCurtain
        buttons={[
          {
            label: "Explore More",
          },
        ]}
        headline="Step into Our Innovative Workspace"
        overlay
        sub="Where Creativity Meets Technology"
        text="Experience the fusion of creativity and technology in our state-of-the-art office."
        textPosition="center"
        video={{
          srcDesktop: "/static/img/videos/video-720.mp4",
          srcMobile: "/static/img/videos/video-720.mp4",
          srcTablet: "/static/img/videos/video-720.mp4",
        }}
      />
    </PreviewSection>
    <PreviewSection
      width="full"
      spaceBefore="none"
      spaceAfter="none"
      preview={{
        title: "Color Neutral Text",
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
      <VideoCurtain
        buttons={[
          {
            label: "Join Us",
          },
        ]}
        colorNeutral
        headline="Join Our Creative Journey"
        highlightText
        overlay
        sub="Where Every Idea Matters"
        text="Be part of a creative journey where every idea is valued and innovation is celebrated."
        textPosition="left"
        video={{
          srcDesktop: "/static/img/videos/video-agency.mp4",
          srcMobile: "/static/img/videos/video-agency.mp4",
          srcTablet: "/static/img/videos/video-agency.mp4",
        }}
      />
    </PreviewSection>
    <PreviewSection
      width="full"
      spaceBefore="none"
      spaceAfter="none"
      preview={{
        title: "Color Neutral Video",
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
      <VideoCurtain
        buttons={[
          {
            label: "Discover More",
          },
        ]}
        headline="Welcome to Our Collaborative Space"
        highlightText
        overlay
        sub="Where Ideas Come to Life"
        text="Experience the synergy of creativity and teamwork in our modern office environment."
        textPosition="center"
        video={{
          srcDesktop: "/static/img/videos/handshake-bw.mp4",
          srcMobile: "/static/img/videos/handshake-bw.mp4",
          srcTablet: "/static/img/videos/handshake-bw.mp4",
        }}
      />
    </PreviewSection>
  </PageWrapper>
);
