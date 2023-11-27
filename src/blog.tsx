import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { BlogTeaser } from "@kickstartds/ds-agency/blog-teaser";
import { Image } from "@kickstartds/ds-agency/image";
import { PageWrapper } from "./_includes/PageWrapper";
import { text } from "stream/consumers";

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
      style="accentTransition"
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
      headline={{
        text: "Latest Article",
      }}
    >
      <BlogTeaser
        author={{
          image: "/static/img/people/author-blog-female.png",
          name: "Jane Smith",
          title: "Headless Evangelist and DevRel for real",
        }}
        date="02/02/2024"
        headline="Unleashing Innovation with Headless Websites: The Future of Digital Experiences"
        image="/static/img/blog/2150710000.jpg"
        link={{
          label: "Read more",
          url: "/blog-post1/",
        }}
        readingTime="6 min read"
        tags={["Headless", "CMS"]}
        teaserText="Dive into the exciting world of headless architecture with Systemics. This article explores our Headless Websites service, a playground of innovation and creativity for brands seeking to redefine their digital journey. Discover how our experts leverage headless CMS architecture to provide unparalleled flexibility while maintaining design integrity. We make content distribution dynamic and responsive, tailoring it to users' preferences for a seamless journey across devices and platforms."
      />
    </Section>

    <Section
      spaceBefore="small"
      style="symmetricGlow"
      content={{
        mode: "list",
        gutter: "large",
      }}
    >
      <BlogTeaser
        author={{
          image: "/static/img/people/author-blog-male.png",
          name: "Jon Greyjoy",
          title: "Design System Expert",
        }}
        date="01/24/2024"
        headline="Mastering the Art of Design Systems with Systemics: A Journey from Vision to Reality"
        image="/static/img/blog/2150714059.jpg"
        link={{
          label: "Read more",
          url: "/blog-post2/",
        }}
        readingTime="8 min read"
        tags={["Design System", "Frontend", "Services"]}
        teaserText="In this enlightening article, we delve into how Systemics, your go-to Design System agency, brings clarity and coherence to your brand's digital presence. We discuss our unique approach to Design System Consulting, where we align your vision with actionable strategies for seamless and captivating user experiences. Learn how we transform ideas into tangible results with our Design System Creation service, empowering your brand to communicate effectively across digital platforms."
      />
      <BlogTeaser
        author={{
          image: "/static/img/people/author-blog-female.png",
          name: "Jane Smith",
          title: "Headless Evangelist and DevRel for real",
        }}
        date="01/18/2024"
        headline="3.	Investing in Digital Excellence: Systemics' Design System Trainings"
        image="/static/img/blog/2150849213.jpg"
        link={{
          label: "Read more",
          url: "/blog-post3/",
        }}
        readingTime="7 min read"
        tags={["Design System", "Learning", "Training"]}
        teaserText="Investing in your digital team's growth is crucial for sustainable success. In this article, we highlight Systemics' Design System Trainings, designed to equip your team with the skills they need to harness your design system effectively. Understand how our trainings promote collaboration, shared understanding, and continuous learning, ensuring your design system remains an evolving cornerstone of your digital success."
      />
    </Section>

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Image
        src="/static/img/bg/bg_divder-blue.svg"
        alt="Just a divider image, makes no sense, just for deco"
      />
    </Section>

    <Section
      spaceBefore="small"
      width="wide"
      headline={{
        text: "More articles",
        align: "center",
      }}
    >
      <BlogTeaser
        author={{
          image: "/static/img/people/author-blog-female.png",
          name: "Jane Smith",
          title: "Headless Evangelist and DevRel for real",
        }}
        date="02/02/2024"
        headline="Unleashing Innovation with Headless Websites: The Future of Digital Experiences"
        image="/static/img/blog/2150710000.jpg"
        link={{
          label: "Read more",
          url: "/blog-post1/",
        }}
        readingTime="6 min read"
        tags={["Headless", "CMS"]}
        teaserText="Dive into the exciting world of headless architecture with Systemics. This article explores our Headless Websites service, a playground of innovation and creativity for brands seeking to redefine their digital journey. Discover how our experts leverage headless CMS architecture to provide unparalleled flexibility while maintaining design integrity. We make content distribution dynamic and responsive, tailoring it to users' preferences for a seamless journey across devices and platforms."
      />
      <BlogTeaser
        author={{
          image: "/static/img/people/author-blog-male.png",
          name: "Jon Greyjoy",
          title: "Design System Expert",
        }}
        date="01/24/2024"
        headline="Mastering the Art of Design Systems with Systemics: A Journey from Vision to Reality"
        image="/static/img/blog/2150714059.jpg"
        link={{
          label: "Read more",
          url: "/blog-post2/",
        }}
        readingTime="8 min read"
        tags={["Design System", "Frontend", "Services"]}
        teaserText="In this enlightening article, we delve into how Systemics, your go-to Design System agency, brings clarity and coherence to your brand's digital presence. We discuss our unique approach to Design System Consulting, where we align your vision with actionable strategies for seamless and captivating user experiences. Learn how we transform ideas into tangible results with our Design System Creation service, empowering your brand to communicate effectively across digital platforms."
      />
      <BlogTeaser
        author={{
          image: "/static/img/people/author-blog-female.png",
          name: "Jane Smith",
          title: "Headless Evangelist and DevRel for real",
        }}
        date="01/18/2024"
        headline="3.	Investing in Digital Excellence: Systemics' Design System Trainings"
        image="/static/img/blog/2150849213.jpg"
        link={{
          label: "Read more",
          url: "/blog-post3/",
        }}
        readingTime="7 min read"
        tags={["Design System", "Learning", "Training"]}
        teaserText="Investing in your digital team's growth is crucial for sustainable success. In this article, we highlight Systemics' Design System Trainings, designed to equip your team with the skills they need to harness your design system effectively. Understand how our trainings promote collaboration, shared understanding, and continuous learning, ensuring your design system remains an evolving cornerstone of your digital success."
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
