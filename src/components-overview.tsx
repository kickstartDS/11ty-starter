import { Section } from "@kickstartds/ds-agency/section";
import { PageWrapper } from "./_includes/PageWrapper";
import { ComponentTeaser } from "@kickstartds/ds-agency/components/teaser-component/index.js";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",
  layout: "base.njk",
};

export default (props) => (
  <PageWrapper>
    <Section
      headline={{
        text: "Explore Over 40 Unique Use Cases Across 16 Components",
        width: "default",
        large: true,
        align: "center",
      }}
      width="wide"
    >
      <ComponentTeaser
        title="CTA"
        text="9 Examples"
        image="/static/img/component_screenshots/cta.png"
        target="/components-cta"
      />
      <ComponentTeaser
        title="Hero"
        text="3 Examples"
        image="/static/img/component_screenshots/hero.png"
        target="/components-hero"
      />
      <ComponentTeaser
        title="Video Curtain"
        text="3 Examples"
        image="/static/img/component_screenshots/video-curtain.png"
        target="/components-video_curtain"
      />
      <ComponentTeaser
        title="Features"
        text="5 Examples"
        image="/static/img/component_screenshots/features.png"
        target="/components-features"
      />
      <ComponentTeaser
        title="Gallery"
        text="4 Examples"
        image="/static/img/component_screenshots/gallery.png"
        target="#"
      />
      <ComponentTeaser
        title="Teaser Card"
        text="2 Examples"
        image="/static/img/component_screenshots/teaser.png"
        target="#"
      />
      <ComponentTeaser
        title="Testimonials"
        text="7 Examples"
        image="/static/img/component_screenshots/testimonials.png"
        target="#"
      />
      <ComponentTeaser
        title="Logos"
        text="6 Examples"
        image="/static/img/component_screenshots/logos.png"
        target="#"
      />
      <ComponentTeaser
        title="Stats"
        text="4 Examples"
        image="/static/img/component_screenshots/stats.png"
        target="#"
      />

      <ComponentTeaser
        title="Image Story"
        text="1 Example"
        image="/static/img/component_screenshots/image-story.png"
        target="#"
      />
      <ComponentTeaser
        title="Mosaic"
        text="2 Examples"
        image="/static/img/component_screenshots/mosaic.png"
        target="#"
      />
      <ComponentTeaser
        title="Faq"
        text="2 Examples"
        image="/static/img/component_screenshots/faq.png"
        target="#"
      />
      <ComponentTeaser
        title="Text"
        text="4 Examples"
        image="/static/img/component_screenshots/text.png"
        target="#"
      />
      <ComponentTeaser
        title="Image Text"
        text="2 Examples"
        image="/static/img/component_screenshots/image-text.png"
        target="#"
      />
    </Section>
  </PageWrapper>
);
