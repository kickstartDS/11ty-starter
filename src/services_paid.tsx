import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Faq } from "@kickstartds/ds-agency/faq";
import { Text } from "@kickstartds/ds-agency/text";
import { Image } from "@kickstartds/ds-agency/image";
import { Features } from "@kickstartds/ds-agency/features";
import { Hero } from "@kickstartds/ds-agency/components/hero/index.js";
import { ImageStory } from "@kickstartds/ds-agency/components/image-story/index.js";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title: "Systemics, Design System Services made simple",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Services",
    order: 2,
  },
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section
      spaceBefore="none"
      width="full"
      content={{
        mode: "list",
      }}
    >
      <Hero
        headline="Headless Web & Design System Services"
        height="fullImage"
        image={{
          indent: "none",
          src: "/static/img/deco/hero_services.png",
          srcDesktop: "/static/img/deco/hero_services.png",
          srcMobile: "/static/img/deco/hero_services.png",
          srcTablet: "/static/img/deco/hero_services.png",
        }}
        largeHeadline
        overlay
        sub="Tailored Solutions for Seamless Digital Excellence"
        text="**We believe** that well-crafted design systems are the cornerstone of exceptional user experiences. Our team is dedicated to providing clients with tailored solutions that bridge the gap between creativity and functionality, ultimately reshaping the way users engage with brands."
        textPosition="below"
      />
    </Section>

    <Section style="accentTransition" width="wide" spaceBefore="none">
      <Features
        ctas={{
          style: "intext",
          toggle: true,
        }}
        features={[
          {
            cta: {
              label: "Read more",
              target: "#ds1",
            },
            icon: "move",
            text: "",
            title: "Design System Consulting",
          },
          {
            cta: {
              label: "Read more",
              target: "#ds2",
            },
            icon: "star-outline",
            text: "",
            title: "Design System Creation",
          },
          {
            cta: {
              label: "Read more",
              target: "#ds3",
            },
            icon: "info",
            text: "",
            title: "Design System Trainings",
          },
          {
            cta: {
              label: "Read more",
              target: "#ds4",
            },
            icon: "browser",
            text: "",
            title: "Headless Websites",
          },
        ]}
        layout="smallTiles"
        style="centered"
      />
    </Section>

    <Section
      width="default"
      id="ds1"
      headline={{
        text: "Our Services",
      }}
    >
      <ImageStory
        image={{
          ratio: "none",
          src: "/static/img/deco/ds-services-01.png",
          alt: "A group of designers having a creative meeting in a stylish modern room in a skyscraper, wide angle, blade runner movie like aesthetics, neon-light, lens-flare, pink, blue, and cyan color tonality, wide angle, sharp, ",
        }}
        headline="Design System **Consulting**"
        layout="textLeft"
        sub="Bringing Clarity to Your Vision"
        text="
Design System Consulting at Systemics is your compass in the world of design coherence. Our seasoned consultants work hand-in-hand with your team, understanding your brand's unique DNA and goals. 

We align your vision with actionable strategies, ensuring your design system becomes a guiding light for your entire digital ecosystem. 

**Our goal is to empower you** with the knowledge and direction you need to create seamless, consistent, and captivating user experiences."
        textAlign="left"
      />
    </Section>

    <Section width="default" id="ds2">
      <ImageStory
        image={{
          ratio: "none",
          src: "/static/img/deco/ds-services-02.png",
          alt: "A view inside a web developer agency, like a film still from blade runner, lens-flare effect, Cinematic, Bokeh effect, Neon Lights",
        }}
        headline="Design System **Creation**"
        layout="imageLeft"
        sub="From Vision to Reality"
        text="
Our Design System Creation service is where ideas materialize into tangible results. 

We take your vision, weave it with industry best practices, and craft a comprehensive design system. 

It's not just about visual consistency – it's about **empowering your brand to communicate effectively** and fostering user engagement. Our approach ensures your design system is not only user-centered but also accelerates your development cycles, giving you the competitive edge you deserve."
        textAlign="left"
      />
    </Section>

    <Section width="default" id="ds3">
      <ImageStory
        image={{
          ratio: "none",
          src: "/static/img/deco/ds-services-03.png",
          alt: "A view inside a web developer agency, like a film still from blade runner, lens-flare effect, Cinematic, Bokeh effect, Neon Lights",
        }}
        headline="Design System **Trainings**"
        largeHeadline
        layout="textLeft"
        sub="Empower Your Digital Team"
        text="
Invest in your team's growth with our Design System Trainings. We believe that the true value of a design system lies not only in its components but in the hands that wield them. 

Our training equips your digital teams with the skills they need to harness your design system effectively. 

By promoting collaboration, shared understanding, and continuous learning, **we ensure your design system remains an evolving cornerstone of your digital success.**"
        textAlign="left"
      />
    </Section>

    <Section width="default" id="ds4" style="boldTransition">
      <ImageStory
        image={{
          ratio: "none",
          src: "/static/img/deco/ds-services-04.png",
          alt: "A view inside a web developer agency, with some busy people, working in front of a glass whiteboard, layout user interface components, like a film still from blade runner, lens-flare effect, Cinematic, Neon Lights, website design, Neon lighting, lens-flare-effect",
        }}
        headline="**Headless** Websites"
        largeHeadline
        layout="imageLeft"
        sub="Unleash the Power of Headless Architecture"
        text="
Discover the future of digital experiences with our Headless Websites service. By decoupling content from presentation, we offer you a playground of innovation and creativity. 

Our experts leverage headless CMS architecture to give you unparalleled flexibility while maintaining design integrity. 

our content distribution becomes dynamic and responsive, tailored to your users' preferences, making their **journey seamless across devices and platforms.**"
        textAlign="left"
      />
    </Section>

    <Section
      width="full"
      spaceAfter="none"
      spaceBefore="none"
      backgroundColor="bold"
    >
      <Image
        src="/static/img/bg/bg_divder-blue.svg"
        alt="Just a divider image, makes no sense, just for deco"
      />
    </Section>

    <Section
      backgroundColor="bold"
      headline={{
        text: "Our Methodology",
        sub: "Leveraging Open Source Technology to Minimize Investment and Maximize Speed",
      }}
      content={{
        mode: "list",
      }}
    >
      <Text
        text={`**kickstartDS** is a powerful and efficient **open source** technology that organizations should consider when starting a **design system**, due to the following reasons:`}
      />
      <Faq
        questions={[
          {
            question: "1. Time-saving",
            answer:
              "kickstartDS is a code-first framework that accelerates the design system creation process. By utilizing this technology, organizations can save valuable time and resources, enabling them to focus on other critical aspects of their business.",
          },
          {
            question: "2. Agility",
            answer:
              "kickstartDS allows organizations to maintain a high level of agility in their design system development. The framework's flexibility ensures that teams can quickly adapt to changes in requirements or emerging trends, ensuring that the design system remains up-to-date and relevant.",
          },
          {
            question: "3. Scalability",
            answer:
              "With kickstartDS, organizations can create design systems that are easily scalable. As the business grows and evolves, the design system can be expanded and adapted to accommodate new features, platforms, and devices, ensuring a consistent user experience across all touchpoints.",
          },
          {
            question: "4. Consistency",
            answer:
              "kickstartDS promotes consistency across the design system by providing a solid foundation for the creation and implementation of design elements. This ensures that the organization's brand identity remains cohesive and recognizable throughout all digital platforms.",
          },
          {
            question: "5. Collaboration",
            answer:
              "kickstartDS facilitates seamless collaboration between design, development, and content teams. By providing a unified framework, team members can work together more efficiently, resulting in a more streamlined workflow and a higher quality end product.",
          },
          {
            question: "6. Customization",
            answer:
              "kickstartDS offers a high level of customization, allowing organizations to tailor the design system to their specific needs and goals. This ensures that the design system aligns with the organization's brand identity and resonates with its target audience.",
          },
        ]}
      />
      <Text
        text={`In summary, [**kickstartDS**](https://www.kickstartds.com) is an ideal technology for organizations looking to create a design system that is efficient, agile, scalable, and consistent. By leveraging this technology, organizations can streamline their design processes, enhance collaboration, and ultimately create a more compelling and cohesive digital presence.`}
      />
    </Section>

    <Section backgroundColor="accent">
      <Cta
        align="left"
        headline="**Ready** to craft excellence into your digital journey?"
        sub="Dive into our services and let Systemics redefine the way your brand connects with the digital world."
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
