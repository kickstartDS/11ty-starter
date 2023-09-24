import { TextMedia } from "@kickstartds/base/lib/text-media";
import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title: "About Systemics, your Design System Agency",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Blog",
    order: 4,
  },
};

export default (props) => (
  <PageWrapper>
    <Section 
      width="wide"
      headline="Welcome to the **Systemics' Blog** – Your digital transformation **compass**!"
      sub="We are here to guide you through the complex yet exhilarating landscape of digital innovation."
    >
      <TextMedia
        text={`
Amid the buzzwords and tech jargon, we seek to create a haven where clarity meets creativity, and theory becomes practice.

Our articles are like a treasure trove – mined and refined from our wealth of experience in harnessing headless CMS and crafting masterful design systems. We strive to build a bridge between complex technical concepts and their practical application.

From the intricate art of design systems to the boundary-pushing innovation of headless websites, we've got all the good stuff right here. Our blog is not just a resource; it's a conversation. A place where ideas transform into digital reality. 

At Systemics, we believe in not just keeping up with the digital world, but setting the pace. So, grab a cup of coffee, make yourself comfortable and let's change the world, one blog post at a time!
                `}
      />
    </Section>

    <Section
      style="accent"
      width="wide"
      align="left"
      mode="list"
      spaceAfter="small"
      headline="Immerse yourself in our three latest posts:"
    >
      <TextMedia
        text={`**We believe** that well-crafted design systems are the cornerstone of exceptional user experiences. Our team is dedicated to providing clients with tailored solutions that bridge the gap between creativity and functionality, ultimately reshaping the way users engage with brands.`}
      />
    </Section>

    <Section inverted>
      <Cta
        align="left"
        headline="Ready to ignite your digital transformation journey?"
        sub="Spark the change with Systemics! Let's chat today and redefine your digital tomorrow."
        primaryCta={{
          toggle: true,
          label: "Contact us",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "person",
        }}
        secondaryCta={{
          toggle: true,
          label: "Book a meeting",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "date",
        }}
      />
    </Section>
  </PageWrapper>
);
