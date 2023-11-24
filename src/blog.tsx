import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { BlogTeaser } from "@kickstartds/ds-agency/blog-teaser";
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
        large: true,
        width: "default",
        align: "center",
      }}
    />
    <Section
      backgroundColor="accent"
      style="boldTransition"
      width="wide"
      spaceBefore="small"
      spaceAfter="small"
    >
      <BlogTeaser
        author={{
          image: "/static/img/people/author-emily.png",
          name: "Jane Smith",
          title: "Black Belt Headless Ninja Warrior",
        }}
        date="12/30/2022"
        headline="Unleashing Innovation with Headless Websites: The Future of Digital Experiences"
        image="/static/img/close-up-young-business-team-working.png"
        link={{
          label: "Read more",
          url: "/blog-post-1",
        }}
        readingTime="5 min read"
        tags={["Headless", "CMS"]}
        teaserText="Dive into the exciting world of headless architecture with Systemics. This article explores our Headless Websites service, a playground of innovation and creativity for brands seeking to redefine their digital journey. Discover how our experts leverage headless CMS architecture to provide unparalleled flexibility while maintaining design integrity. We make content distribution dynamic and responsive, tailoring it to users' preferences for a seamless journey across devices and platforms."
      />
    </Section>

    <Section
      spaceBefore="small"
      content={{
        mode: "list",
        gutter: "large",
      }}
    >
      <BlogTeaser
        author={{
          image: "/static/img/people/author-emily.png",
          name: "Jane Smith",
          title: "Senior AI Researcher",
        }}
        date="12/30/2022"
        headline="The Future of AI"
        image="/static/img/close-up-young-business-team-working.png"
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
          image: "/static/img/people/author-emily.png",
          name: "Jane Smith",
          title: "Senior AI Researcher",
        }}
        date="12/30/2022"
        headline="The Future of AI"
        image="/static/img/close-up-young-business-team-working.png"
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
          image: "/static/img/people/author-emily.png",
          name: "Jane Smith",
          title: "Senior AI Researcher",
        }}
        date="12/30/2022"
        headline="The Future of AI"
        image="/static/img/close-up-young-business-team-working.png"
        link={{
          label: "Read more",
          url: "/blog-post-1/",
        }}
        readingTime="5 min read"
        tags={["Technology", "AI"]}
        teaserText="Dive into the future of AI in this detailed blog post. Discover how technology is rapidly evolving, the impact of AI on various industries, and what to expect in the coming years. Learn about the latest advancements, challenges, and the potential solutions that AI brings to the table."
      />
    </Section>

    <Section
      spaceBefore="small"
      headline={{
        text: "More articles",
        align: "center",
      }}
    >
      <BlogTeaser
        author={{
          image: "/static/img/people/author-emily.png",
          name: "Jane Smith",
          title: "Senior AI Researcher",
        }}
        date="12/30/2022"
        headline="The Future of AI"
        image="/static/img/close-up-young-business-team-working.png"
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
          image: "/static/img/people/author-emily.png",
          name: "Jane Smith",
          title: "Senior AI Researcher",
        }}
        date="12/30/2022"
        headline="The Future of AI"
        image="/static/img/close-up-young-business-team-working.png"
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
          image: "/static/img/people/author-emily.png",
          name: "Jane Smith",
          title: "Senior AI Researcher",
        }}
        date="12/30/2022"
        headline="The Future of AI"
        image="/static/img/close-up-young-business-team-working.png"
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
