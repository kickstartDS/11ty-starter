import { Section } from "@kickstartds/ds-agency/section";
import { BlogHead } from "@kickstartds/ds-agency/blog-head";
import { BlogAside } from "@kickstartds/ds-agency/blog-aside";
import { Text } from "@kickstartds/ds-agency/text";
import { Split } from "@kickstartds/ds-agency/split";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title: "Systemics, your Design System Agency Insights",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Post 1",
    order: 5,
  },
};

export default (props) => (
  <PageWrapper>
    <Section width="wide">
      <Split layout="sidebarRight">
        <div>
          <BlogHead
            date="12/30/2022"
            tags={["Technology", "AI"]}
            headline="The Future of AI: A Glimpse into the Unseen"
            image="/static/img/close-up-young-business-team-working.png"
          />
          <Text
            text={`
  ## Introduction
  The future of **ArtiEficial Intelligence (AI)** is a topic that has been the subject of much debate. It's a field that's constantly evolving, with new advancements and breakthroughs happening all the time. [Learn more about AI](https://en.wikipedia.org/wiki/Artificial_intelligence)

  ## The Current State of AI
  Today, AI is already a part of our daily lives. From *smart home devices* to *recommendation algorithms* on our favorite streaming services, AI is everywhere.

  ## The Potential of AI
  The potential of AI is immense. It has the ability to revolutionize industries, from healthcare to finance, and everything in between.

  ## The Challenges of AI
  However, with great potential comes great challenges. Issues such as data privacy and the ethical implications of AI are just some of the hurdles that need to be overcome.

  ## The Role of AI in Society
  AI has the potential to greatly impact society. It can lead to job creation in new industries, and can also help solve complex societal problems.

  ## Conclusion
  The future of AI is exciting and full of potential. However, it's important that we navigate this future with caution, ensuring that the benefits of AI are accessible to all, while minimizing its potential risks.
          `}
          />
        </div>
        <BlogAside
          author={{
            name: "Jane Doe",
            byline: "Senior Developer",
            image: "/static/img/people/author-emily.png",
            twitter: "Janedoe",
            email: "Jane.doe@example.com",
          }}
          socialSharing={[
            {
              icon: "twitter",
              href: "https://twitter.com/share?text=This%20is%20a%20blog%20post%20headline&url=https://example.com/blog",
              title: "Share on Twitter",
            },
            {
              icon: "linkedin",
              href: "https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/blog&title=This%20is%20a%20blog%20post%20headline",
              title: "Share on LinkedIn",
            },
          ]}
          readingTime="5 min read"
          date="12/30/2022"
        />
      </Split>
    </Section>
  </PageWrapper>
);
