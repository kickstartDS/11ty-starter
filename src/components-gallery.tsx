import { Section } from "@kickstartds/ds-agency/section";
import { PreviewSection } from "@kickstartds/ds-agency/preview-section";
import { PageIntro } from "@kickstartds/ds-agency/page-intro";
import { Gallery } from "@kickstartds/ds-agency/gallery";
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
        headline="Discover the Gallery Component"
        sub="4 examples"
      />
    </Section>
    <PreviewSection
      preview={{
        title: "Small Squares With Lightbox",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Explore Our **Visual Journey**",
        sub: "Dive into our collection of captivating images",
      }}
    >
      <Gallery
        aspectRatio="square"
        layout="smallTiles"
        lightbox
        images={[
          {
            alt: "Alt text Image 1",
            caption: "Caption Image 1",
            src: "/static/img/close-up-young-business-team-working.png",
          },
          {
            alt: "Alt text Image 2",
            caption: "Caption Image 2",
            src: "/static/img/low-angle-tall-building-with-many-windows_23-2148230392.png",
          },
          {
            alt: "Alt text Image 3",
            caption: "Caption Image 3",
            src: "/static/img/full-shot-different-people-working-together.png",
          },
          {
            alt: "Alt text Image 4",
            caption: "Caption Image 4",
            src: "/static/img/top-view-desk-with-keyboard-drawing-pad.png",
          },
          {
            alt: "Alt text Image 5",
            caption: "Caption Image 5",
            src: "/static/img/people/people-brainstorming-work-meeting.png",
          },
          {
            alt: "Alt text Image 6",
            caption: "Caption Image 6",
            src: "/static/img/view-modern-office.jpg",
          },
          {
            alt: "Alt text Image 7",
            caption: "Caption Image 7",
            src: "/static/img/people/colleagues-work-office-using-computers-looking-aside.png",
          },
        ]}
      />
    </PreviewSection>
    <PreviewSection
      width="wide"
      preview={{
        title: "Large Landscape Tiles",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Unveil Our Photographic Showcase",
        sub: "Discover the stories behind our diverse gallery",
        align: "center",
        large: true,
      }}
    >
      <Gallery
        layout="largeTiles"
        aspectRatio="landscape"
        images={[
          {
            alt: "Alt text Image 1",
            caption: "Caption Image 1",
            src: "/static/img/close-up-young-business-team-working.png",
          },
          {
            alt: "Alt text Image 2",
            caption: "Caption Image 2",
            src: "/static/img/low-angle-tall-building-with-many-windows_23-2148230392.png",
          },
          {
            alt: "Alt text Image 3",
            caption: "Caption Image 3",
            src: "/static/img/full-shot-different-people-working-together.png",
          },
          {
            alt: "Alt text Image 4",
            caption: "Caption Image 4",
            src: "/static/img/top-view-desk-with-keyboard-drawing-pad.png",
          },
          {
            alt: "Alt text Image 5",
            caption: "Caption Image 5",
            src: "/static/img/people/people-brainstorming-work-meeting.png",
          },
          {
            alt: "Alt text Image 6",
            caption: "Caption Image 6",
            src: "/static/img/view-modern-office.jpg",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      preview={{
        title: "Free Aspect Ratio",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Discover Our Picture Portfolio",
        sub: "A glimpse into the visual experiences we offer",
        switchOrder: true,
      }}
    >
      <Gallery
        aspectRatio="unset"
        layout="smallTiles"
        lightbox
        images={[
          {
            alt: "Alt text Image 1",
            caption: "Caption Image 1",
            src: "/static/img/close-up-young-business-team-working.png",
          },
          {
            alt: "Alt text Image 2",
            caption: "Caption Image 2",
            src: "/static/img/low-angle-tall-building-with-many-windows_23-2148230392.png",
          },
          {
            alt: "Alt text Image 3",
            caption: "Caption Image 3",
            src: "/static/img/full-shot-different-people-working-together.png",
          },
          {
            alt: "Alt text Image 4",
            caption: "Caption Image 4",
            src: "/static/img/top-view-desk-with-keyboard-drawing-pad.png",
          },
          {
            alt: "Alt text Image 5",
            caption: "Caption Image 5",
            src: "/static/img/people/people-brainstorming-work-meeting.png",
          },
          {
            alt: "Alt text Image 6",
            caption: "Caption Image 6",
            src: "/static/img/view-modern-office.jpg",
          },
          {
            alt: "Alt text Image 7",
            caption: "Caption Image 7",
            src: "/static/img/people/colleagues-work-office-using-computers-looking-aside.png",
          },
        ]}
      />
    </PreviewSection>

    <PreviewSection
      width="narrow"
      preview={{
        title: "Stack Landscape",
        label: "Paid",
        link: {
          label: "View in Storybook",
          href: "#",
        },
      }}
      headline={{
        text: "Step into Our Image Gallery",
        sub: "Experience the world through our lens",
      }}
    >
      <Gallery
        aspectRatio="landscape"
        images={[
          {
            alt: "Alt text Image 1",
            caption: "Caption Image 1",
            src: "/static/img/close-up-young-business-team-working.png",
          },
          {
            alt: "Alt text Image 2",
            caption: "Caption Image 2",
            src: "/static/img/low-angle-tall-building-with-many-windows_23-2148230392.png",
          },
          {
            alt: "Alt text Image 3",
            caption: "Caption Image 3",
            src: "/static/img/full-shot-different-people-working-together.png",
          },
        ]}
        layout="stack"
      />
    </PreviewSection>
  </PageWrapper>
);
