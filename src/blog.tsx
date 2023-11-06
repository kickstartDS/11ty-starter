import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { BlogTeaser } from "@kickstartds/ds-agency/blog-teaser";
import { Text } from "@kickstartds/ds-agency/text";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title: "Systemics, your Design System Agency Insights",
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
      headline={{
        text: "Welcome to the **Systemics' Blog** – Your digital transformation **compass**!",
        sub: "We are here to guide you through the complex yet exhilarating landscape of digital innovation.",
      }}
    >
      <Text
        text={`
Amid the buzzwords and tech jargon, we seek to create a haven where clarity meets creativity, and theory becomes practice.

Our articles are like a treasure trove – mined and refined from our wealth of experience in harnessing headless CMS and crafting masterful design systems. We strive to build a bridge between complex technical concepts and their practical application.

From the intricate art of **Design Systems** to the boundary-pushing innovation of **headless websites**, we've got all the good stuff right here. 
**Our blog is not just a resource; it's a conversation. A place where ideas transform into digital reality.**
      `}
      />
    </Section>

    <Section
      background="accent"
      content={{
        mode: "list",
      }}
      spaceAfter="small"
      headline={{
        text: "Immerse yourself in our three latest posts:",
      }}
    >
      <Text
        text={`
We believe in not just keeping up with the digital world, but setting the pace.

☕️ So, grab a cup of coffee, 

🛋️ make yourself comfortable 

🌅 and let's change the world, 

**one blog post at a time!**`}
      />
    </Section>

    <Section
      background="accent"
      width="wide"
      content={{
        mode: "list",
      }}
    >
      <BlogTeaser
        author={{
          image: "/static/img/customer-1.png",
          name: "Jane Smith",
          title: "Black Belt Headless Ninja Warrior",
        }}
        date="12/30/2022"
        headline="Unleashing Innovation with Headless Websites: The Future of Digital Experiences"
        image="/static/img/agency.png"
        link={{
          label: "Read more",
          url: "/blog-post-1",
        }}
        readingTime="5 min read"
        tags={["Headless", "CMS"]}
        teaserText="Dive into the exciting world of headless architecture with Systemics. This article explores our Headless Websites service, a playground of innovation and creativity for brands seeking to redefine their digital journey. Discover how our experts leverage headless CMS architecture to provide unparalleled flexibility while maintaining design integrity. We make content distribution dynamic and responsive, tailoring it to users' preferences for a seamless journey across devices and platforms."
      />
      <BlogTeaser
        author={{
          image: "/static/img/customer-1.png",
          name: "Jane Smith",
          title: "Senior AI Researcher",
        }}
        date="12/30/2022"
        headline="The Future of AI"
        image="/static/img/agency.png"
        link={{
          label: "Read more",
          url: "/blog-post-1/",
        }}
        readingTime="5 min read"
        tags={["Technology", "AI"]}
        teaserText="Dive into the future of AI in this detailed blog post. Discover how technology is rapidly evolving, the impact of AI on various industries, and what to expect in the coming years. Learn about the latest advancements, challenges, and the potential solutions that AI brings to the table."
      />
      <BlogTeaser
        author={{
          image: "/static/img/customer-1.png",
          name: "Jane Smith",
          title: "Senior AI Researcher",
        }}
        date="12/30/2022"
        headline="The Future of AI"
        image="/static/img/agency.png"
        link={{
          label: "Read more",
          url: "/blog-post-1/",
        }}
        readingTime="5 min read"
        tags={["Technology", "AI"]}
        teaserText="Dive into the future of AI in this detailed blog post. Discover how technology is rapidly evolving, the impact of AI on various industries, and what to expect in the coming years. Learn about the latest advancements, challenges, and the potential solutions that AI brings to the table."
      />
    </Section>

    <Section inverted>
      <Cta
        align="left"
        headline="Ready to ignite your digital transformation journey?"
        sub="Spark the change with Systemics! Let's chat today and redefine your digital tomorrow."
        buttons={[
          {
            label: "Contact us",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "date",
          },
        ]}
      />
    </Section>
  </PageWrapper>
);
