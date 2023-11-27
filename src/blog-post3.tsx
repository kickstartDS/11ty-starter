import { Section } from "@kickstartds/ds-agency/section";
import { BlogHead } from "@kickstartds/ds-agency/blog-head";
import { BlogAside } from "@kickstartds/ds-agency/blog-aside";
import { Text } from "@kickstartds/ds-agency/text";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Split } from "@kickstartds/ds-agency/split";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title: "Systemics, your Design System Agency Insights",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Post 3",
    order: 5,
  },
};

export default (props) => (
  <PageWrapper>
    <Section
      width="wide"
      buttons={[
        {
          label: "Next article",
          target: "/blog-post2",
          icon: "chevron-left",
        },
        {
          label: "Previous article",
          target: "/blog-post1",
          icon: "chevron-right",
        },
      ]}
    >
      <Split layout="sidebarRight">
        <div>
          <BlogHead
            date="01/18/2024"
            tags={["Design System", "Learning", "Training"]}
            headline="Investing in Digital Excellence: Systemics' Design System Trainings"
            image="/static/img/blog/2150849213.jpg"
          />
          <Text
            text={`

__ #tldr: Investing in your digital team's growth is crucial for sustainable success. In this article, we highlight Systemics' Design System Trainings, designed to equip your team with the skills they need to harness your design system effectively. Understand how our trainings promote collaboration, shared understanding, and continuous learning, ensuring your design system remains an evolving cornerstone of your digital success. __
            
## Investing in Digital Excellence: Systemics' Design System Trainings 
Ever heard the phrase 'invest in your team, invest in your growth'? Well, let's tweak that a tad bit and say 'invest in your **digital team's growth**' and you've got yourself the core of sustainable success. But how do you do that, you ask? The answer is closer than you think. **Welcome to the digital revolution with Systemics' Design System Trainings!**


### Educate, Elevate, Innovate: Harness Your Design System 
Designed with the ultimate goal of _equipping your digital team with the necessary skills_, our Design System Trainings ensure that your design system does not only look pretty on the surface but work like a well-oiled machine underneath. We ensure a deep understanding of how it operates, promoting collaboration, shared understanding, and continuous learning among your team. 

So, what does this mean? It means that your designers won't just be applying colors and fonts to templates. They'll be crafting experiences that solve problems, simplify tasks and engage users, all thanks to the seamless understanding of your design system. 

But why stop at designers? Our training also enables your developers to tap into the potential of design systems. They'll be leveraging design components and tokens to build robust and consistent interfaces. The result? A unified digital presence that is a delight to interact with. 


### Beyond Training: A Shared Understanding for Continuous Growth 
We don't just offer training; we create a shared language between your designers and developers. So, instead of building in silos, your team is synergizing, ensuring that your design system evolves with your business needs and remains a cornerstone of your digital success. 

According to our friends at [kickstartDS](https://www.kickstartds.com/blog/how-our-initiative-workshop-series-helps-customers-to-decide-for-or-against-a-design-system/), this shared understanding is key to deciding whether a design system is suitable for your organization or not. We'll help you make that decision, and more importantly, help you make it work!


### Systemics' Design System Training Services: What's on the Menu?
Feeling hungry for knowledge? Our delectable smorgasbord of training services will leave your team satiated, yet craving more. Just like a good menu should, our offerings cater to a mix of requirements and skill levels - leaving no room for any taste bud (or need) to feel left out. 

Look around and you'll find an appetizing range of basic modules. Perfect for teams that are making their first foray into the world of design systems. We offer a thorough introduction to the what, the how, and the why of design systems. This includes understanding the role of a design system in your digital strategy, getting familiar with the core components of a design system, and learning how to effectively contribute to and use a design system. 

Now for those with a more adventurous palate, we serve up advanced training courses. This gets into the nitty-gritty of design tokens, component libraries, Version Control Systems, and integrations with existing software and tools. It's like a masterclass that transforms your team from design system users to design system wizards. Your developers and designers will have the ability to create, manage, and evolve your design system, in sync with your business needs.

We also cater to those who prefer to pair their meals (in this case, their learning) with a glass of personalized attention. We offer one-to-one sessions, reviews, and consulting services. Here, our experts take a deep dive into your specific use case, providing tailored advice and detailed feedback to supercharge your design system journey.

And just in case you are wondering, yes, there's room for customization! With our modular training structure, you can pick and choose the courses that suit your team's needs the most. 

So why wait? Explore our [services page](/services) and indulge in a banquet of knowledge that'll fuel your digital growth. Bon Appetit!

**Investing in your digital team's growth has never been this crucial**, and we're here to ensure that it's not just an investment, but a giant leap towards your digital success. Hop on board the Systemics' Design System Trainings and let's build digital magnificence together!


          `}
          />
        </div>
        <BlogAside
          author={{
            name: "Jane Smith",
            byline: "Headless Evangelist and DevRel for real",
            image: "/static/img/people/author-blog-female.png",
            twitter: "Janesmith",
            email: "Jane.smith@example.com",
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
          readingTime="7 min read"
          date="01/18/2024"
        />
      </Split>
    </Section>

    <Section style="horizontalGradient">
      <Cta
        align="center"
        headline="Wanna know more?"
        text="Intrigued by what a kickstartDS-driven website can do for your brand? Let's explore how we can shape your digital journey. Get in touch today."
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
