import { Section } from "@kickstartds/ds-agency/section";
import { PageWrapper } from "./_includes/PageWrapper";
import { ComponentTeaser } from "@kickstartds/ds-agency/teaser-component";

export const data = {
  title:
    "A kickstartDS Demo Showcase: Systemics, your Design System & Headless Agency",
  layout: "base.njk",
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section
      headerSpacing
      headline={{
        text: "40+ Unique Use Cases, 14 Dynamic Components",
        sub: "Dive into the versatility and diversity of our Design System",
        width: "default",
        large: true,
        align: "center",
      }}
      width="wide"
      spotlight
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
        target="/components-gallery"
      />
      <ComponentTeaser
        title="Teaser Card"
        text="3 Examples"
        image="/static/img/component_screenshots/teaser.png"
        target="/components-teaser_card"
      />
      <ComponentTeaser
        title="Testimonials"
        text="7 Examples"
        image="/static/img/component_screenshots/testimonials.png"
        target="/components-testimonials"
      />
      <ComponentTeaser
        title="Logos"
        text="6 Examples"
        image="/static/img/component_screenshots/logos.png"
        target="/components-logos"
      />
      <ComponentTeaser
        title="Stats"
        text="4 Examples"
        image="/static/img/component_screenshots/stats.png"
        target="/components-stats"
      />
      <ComponentTeaser
        title="Image Story"
        text="1 Example"
        image="/static/img/component_screenshots/image-story.png"
        target="/components-image_story"
      />
      <ComponentTeaser
        title="Mosaic"
        text="2 Examples"
        image="/static/img/component_screenshots/mosaic.png"
        target="/components-mosaic"
      />
      <ComponentTeaser
        title="FAQ"
        text="2 Examples"
        image="/static/img/component_screenshots/faq.png"
        target="/components-faq"
      />
      <ComponentTeaser
        title="Text"
        text="4 Examples"
        image="/static/img/component_screenshots/text.png"
        target="/components-text"
      />
      <ComponentTeaser
        title="Image Text"
        text="2 Examples"
        image="/static/img/component_screenshots/image-text.png"
        target="/components-image_text"
      />
    </Section>
  </PageWrapper>
);
