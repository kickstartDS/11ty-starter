import { Section } from "@kickstartds/ds-agency/section";
import { Faq } from "@kickstartds/ds-agency/faq";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { VideoCurtain } from "@kickstartds/ds-agency/video-curtain";
import { TestimonialsPaid } from "@kickstartds/ds-agency/testimonials-paid";
import { PageWrapper } from "./_includes/PageWrapper";
import { CtaPaid } from "@kickstartds/ds-agency/components/cta-paid/index.js";
import { ImageStory } from "@kickstartds/ds-agency/components/image-story/index.js";
import { Hero } from "@kickstartds/ds-agency/components/hero/index.js";
import { Image } from "@kickstartds/ds-agency/image";
import { LogosPaid } from "@kickstartds/ds-agency/components/logos-paid/index.js";

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
  <PageWrapper floatingHeader>
    <Section
      spaceBefore="none"
      spaceAfter="none"
      width="full"
      content={{
        mode: "list",
      }}
    >
      <VideoCurtain
        buttons={[
          {
            icon: "chevron-down",
            label: "What can we do for you?",
            target: "#startit",
          },
        ]}
        headline="Simplify the process of building your Design System"
        overlay
        sub="With your headless experts"
        text="Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture."
        textPosition="center"
        video={{
          srcDesktop: "/static/img/video-1080.mp4",
          srcMobile: "/static/img/video-720.mp4",
          srcTablet: "/static/img/video-1080.mp4",
        }}
      />
    </Section>

    <Section width="max">
      <LogosPaid
        align="center"
        tagline="Orgs we've helped saving time & money"
        logos={[
          {
            alt: "Logo 1",
            src: "/static/img/logoipsum-212.svg",
          },
          {
            alt: "Logo 2",
            src: "/static/img/logoipsum-217.svg",
          },
          {
            alt: "Logo 3",
            src: "/static/img/logoipsum-239.svg",
          },
          {
            alt: "Logo 4",
            src: "/static/img/logoipsum-244.svg",
          },
          {
            alt: "Logo 5",
            src: "/static/img/logoipsum-250.svg",
          },
          {
            alt: "Logo 6",
            src: "/static/img/logoipsum-286.svg",
          },
        ]}
        logosPerRow={6}
      />
    </Section>

    <Section
      id="startit"
      headline={{
        text: "Design System Services",
        sub: "Crafting Consistency, Fostering Growth",
        switchOrder: true,
        width: "narrow",
        align: "center",
        textAlign: "center",
        large: true,
      }}
      width="full"
    >
      <ImageStory
        padding
        layout="imageLeft"
        text={`
**Here at Systemics, we bring a range of design system services that can make a difference:**

### 1. Design System **Consulting**
Let's work side by side to shape a design system strategy that aligns perfectly with your goals. It's not just about tools; it's about guiding principles, stakeholder management und making the right decisions at the right time.
<br/><br/>

### 2. Design System **Creation & Development**
We'll bring your design system from concept to production, giving you consistent and engaging user experiences across different platforms. We will work together with your digital teams to transfer all complex Figma ideas into code using kickstartDS.
<br/><br/>

### 3. Headless **CMS & Websites**
We leverage the power of headless CMSs to provide scalable, flexible, and versatile websites that drive your online presence.
<br/><br/>

### 4. Design System **Training**
We empower your digital teams with the knowledge and skills to manage and evolve your design system effectively.
<br/><br/>

**Ready to make your digital journey exceptional?**
<br/><br/><br/>

        `}
        image={{
          src: "/static/img/deco/coding_01_framed.png",
          alt: "Just a decorative illustration",
        }}
        buttons={[
          {
            label: "Reach out today!",
            icon: "chevron-right",
            target: "https://app.lemcal.com/@daniel-ley",
          },
        ]}
      />
    </Section>

    <Section width="full">
      <Hero
        buttons={[
          {
            icon: "person",
            label: "Book a meeting",
            target: undefined,
          },
        ]}
        headline="Our Approach to Design Systems"
        sub="Own a design system without investing years of development."
        height="fullImage"
        image={{
          alt: "Info graphic displaying the pains and gains of adopting, adapting or creating an own design system vs. what you gain relying on kickstartDS for this as a meta framework for design system creation",
          indent: "none",
          src: "",
          srcDesktop: "/static/img/infos/adapt_kickstartds.svg",
          srcMobile: "/static/img/infos/adapt_kickstartds_mobile.svg",
          srcTablet: "/static/img/infos/adapt_kickstartds.svg",
        }}
        largeHeadline
        text="We value efficiency without compromising quality. Our secret weapon? **kickstartDS**, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever."
        textPosition="below"
      />
    </Section>

    <Section
      width="wide"
      style="accentTransition"
      content={{
        mode: "list",
      }}
      headline={{
        text: "No Agency site without some shiny happy Customer",
        sub: "AI-generated smiles, as you see them everywhere nowadays",
        textAlign: "left",
      }}
    >
      <TestimonialsPaid
        testimonials={[
          {
            image: {
              src: "/static/img/people/author-emily.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- Emily Johnson",
            quote:
              "Systemics's Design System transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
          {
            image: {
              src: "/static/img/people/author-john.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- John Smith",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
          {
            image: {
              src: "/static/img/people/author-alex.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            title: "CEO of LaunchPad Innovations",
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      style="accent"
      headline={{
        text: "Happy Customers Showcases",
        sub: "We can create something shining for you too!",
      }}
    >
      <TeaserCard
        target="/showcase-techfusion_paid"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-launchpad_paid"
        headline="Speed and Scale"
        label="Freshest Fruit"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        target="/showcase-eco_paid"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
      />
    </Section>

    <Section width="full" spaceBefore="none">
      <CtaPaid
        align="left"
        headline="Get in touch and chat with us about getting your product or platform to market faster"
        backgroundImage="/static/img/bg/bg_schrill.svg"
        backgroundColor="#B9398D"
        image={{
          hAlign: "center",
          order: {
            desktopImageLast: true,
            mobileImageLast: false,
          },
          ratio: "none",
          src: "/static/img/deco/contact-us-person-smart.png",
          vAlign: "center",
        }}
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

    <Section
      width="wide"
      content={{
        align: "center",
        width: "default",
      }}
      headline={{
        text: "Design Systems, all you need to know",
        sub: "Design Systems have gained popularity due to the growing need for consistency, efficiency, and scalability in digital product development.",
        large: true,
      }}
    >
      <Faq
        questions={[
          {
            question: "What is a Design System?",
            answer:
              "A Design System is a comprehensive set of guidelines, components, and tools that facilitate the consistent creation and maintenance of digital products. It serves as a single source of truth for designers, developers, and content creators, ensuring a cohesive brand identity and user experience across all platforms and devices.",
          },
          {
            question: "What are the benefits of investing in a Design System?",
            answer:
              "Investing in a Design System offers numerous benefits, including increased efficiency, improved collaboration, enhanced consistency, and streamlined workflows. It ensures a unified brand voice, facilitates faster product development, and enables teams to create scalable, maintainable, and adaptable digital experiences.",
          },
        ]}
      />
    </Section>

    <Section
      headline={{
        text: "Design Systems & Headless FAQs",
      }}
    >
      <Faq
        questions={[
          {
            question: "What is a Design System?",
            answer:
              "A Design System is a comprehensive set of guidelines, components, and tools that facilitate the consistent creation and maintenance of digital products. It serves as a single source of truth for designers, developers, and content creators, ensuring a cohesive brand identity and user experience across all platforms and devices.",
          },
          {
            question: "What are the benefits of investing in a Design System?",
            answer:
              "Investing in a Design System offers numerous benefits, including increased efficiency, improved collaboration, enhanced consistency, and streamlined workflows. It ensures a unified brand voice, facilitates faster product development, and enables teams to create scalable, maintainable, and adaptable digital experiences.",
          },
          {
            question:
              "How does it help enterprise companies with complex SaaS products?",
            answer:
              "We assist enterprise companies by creating tailored Design Systems that cater to the unique requirements of their complex SaaS products. Our approach involves understanding the product's goals, user needs, and brand identity, and then crafting a comprehensive Design System that streamlines workflows, enhances collaboration, and ensures a consistent user experience.",
          },
          {
            question: "Is a Design System not too expensive for a Startup?",
            answer:
              "While Design Systems may initially seem expensive, they are a long-term investment that can save startups time, resources, and money in the long run. By establishing a solid foundation for design and development, startups can reduce inconsistencies, minimize rework, and improve overall product quality, which ultimately leads to a more successful and sustainable business.",
          },
          {
            question: "How long does a Design System take to build?",
            answer:
              "The time required to build a Design System varies depending on the project's complexity, scope, and specific requirements. On average, a Design System can take anywhere from a few weeks to several months to develop. However, it is essential to remember that a Design System is an evolving entity that requires ongoing maintenance and updates.",
          },
          {
            question:
              "What's the difference between a Design System and a Style Guide?",
            answer:
              "A Style Guide is a subset of a Design System, focusing primarily on the visual aspects of a brand, such as colors, typography, and iconography. A Design System, on the other hand, is a more comprehensive framework that encompasses not only visual elements but also components, patterns, guidelines, and tools for design, development, and content creation.",
          },
          {
            question: "How much does a Design System cost?",
            answer:
              "The cost of a Design System varies depending on factors such as project scope, complexity, and specific requirements. It is essential to view a Design System as a long-term investment that yields significant returns in terms of improved efficiency, reduced rework, and enhanced brand consistency. If you start at zero and the design system should serve at least 5 digital touchpoints, it could take months to years to develop all the code base. We believe in tailored solutions, so get in touch with us to discuss your specific requirements. As we work with kickstartDS, you can save lots of money because all the main concepts and aspects are already covered. Invest in its paid modules is really low in comparison to the development time you normally need to spend. For the rest, we'll provide you with a transparent, customized quote that aligns with your goals.",
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      spaceBefore="none"
      spaceAfter="small"
      content={{
        width: "wide",
        align: "center",
      }}
    >
      <Image
        src="/static/img/deco/office-devider-dotted.png"
        alt="Photorealistic image Super wide scale of a view into a hyper modern design & web development agency, glass walls, no people, wide angle, blade runner movie like aesthetics, neon-light, lens-flare, pink, blue, and cyan color tonality, wide angle, sharp, "
      />
    </Section>

    <Section
      width="default"
      content={{
        width: "default",
      }}
      headline={{
        text: "Headless CMS for the modern web",
        sub: "Frequently asked questions",
        align: "right",
        width: "default",
      }}
    >
      <Faq
        questions={[
          {
            question: "How do Headless CMSs fit into the picture?",
            answer:
              "A Headless CMS fits perfectly into the picture by offering a content-first approach that complements a Design System. It decouples the back-end content repository from the front-end presentation layer, allowing for seamless integration with any design system. The result is a flexible, scalable, and platform-agnostic system that ensures content consistency across all platforms and devices.",
          },
          {
            question:
              "How does the combination of Headless CMS and Design System create value?",
            answer:
              "The combination of a Headless CMS and a Design System creates value by enhancing efficiency, consistency, and scalability. A Headless CMS allows for seamless content management across various platforms, while a Design System ensures a consistent user experience and brand identity. Together, they enable teams to create and manage digital experiences more effectively, resulting in improved user engagement and business growth.",
          },
          {
            question: "Is transitioning to a Headless Web complicated?",
            answer:
              "Transitioning to a Headless Web can be a significant change, but it doesn't have to be complicated. With the right planning, tools, and expertise, the transition can be smooth and beneficial. It's about understanding your specific needs and goals, choosing the right Headless CMS, and effectively integrating it with your Design System.",
          },
          {
            question:
              "How can I ensure a consistent design across various channels with a Headless Web setup? ",
            answer:
              "Ensuring a consistent design across various channels with a Headless Web setup is achieved through the integration of a Design System. The Design System serves as a single source of truth for design elements and guidelines, ensuring a unified brand identity and user experience across all platforms and devices. Combined with the platform-agnostic nature of a Headless CMS, you can deliver a consistent and engaging user experience across all channels.",
          },
        ]}
      />
    </Section>

    <Section style="glow" width="full">
      <CtaPaid
        align="center"
        headline="Ready to embark on a transformative digital journey?"
        text="Reach out to us for insights and solutions that seamlessly merge design systems and headless web architecture."
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
