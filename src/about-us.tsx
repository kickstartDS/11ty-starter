import { Section } from "@kickstartds/ds-agency/section";
import { Stats } from "@kickstartds/ds-agency/stats";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Text } from "@kickstartds/ds-agency/text";
import { Image } from "@kickstartds/ds-agency/image";
import { Gallery } from "@kickstartds/ds-agency/gallery";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title: "About Systemics, your Design System Agency",
  layout: "base.njk",
  eleventyNavigation: {
    key: "About",
    order: 2,
  },
};

export default (props) => (
  <PageWrapper>
    <Section
      headline={{
        text: "Crafting Digital Brilliance at **Systemics**",
        large: true,
        sub: "Elevating Headless Experiences through Innovative Design Systems",
      }}
      style="boldTransition"
      width="default"
    >
      <Text
        align="left"
        highlight
        text={`At Systemics, we specialize in creating bespoke design systems that bring harmony and consistency to your digital presence. Our expertise extends beyond design, as we seamlessly integrate headless CMS architecture, maximizing the value of both worlds. We work closely with you, understanding your brand's essence and user needs, to craft experiences that leave a lasting impact.`}
      />
    </Section>

    <Section
      width="wide"
      spaceBefore="none"
      spaceAfter="small"
      backgroundColor="bold"
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
      headline={{
        text: "We empower Businesses with the Tools they need to thrive in the Digital Landscape.",
        sub: "Our crystal clear mission:",
        switchOrder: true,
        width: "default",
        align: "left",
      }}
      content={{
        width: "default",
        align: "center",
      }}
      backgroundColor="bold"
      style="anchorGlow"
      width="wide"
    >
      <Text
        text={`**We believe** that well-crafted design systems are the cornerstone of exceptional user experiences. Our team is dedicated to providing clients with tailored solutions that bridge the gap between creativity and functionality, ultimately reshaping the way users engage with brands.`}
        highlight
      />
    </Section>

    <Section
      headline={{
        text: "Our Secret Sauce",
        sub: "The technology behind all success",
        width: "default",
        align: "left",
      }}
    >
      <Text
        layout="multiColumn"
        text={`
### Benefit from the **power of kickstartDS**
**as we do too!**  
We strongly believe in using the best tools to bring our clients exceptional results. That's why we've integrated kickstartDS into our workflow. This code-first framework for design system creation is our secret sauce to saving time, without compromising on quality. kickstartDS allows us to fast-track the development process, ensuring you get a fully functional and polished design system in a fraction of the time it would traditionally take.

### **Maximizing Value** for Our Clients
We're not just building design systems; we're building value. By combining our expertise in design systems and headless CMS architecture, we deliver solutions that are not only visually appealing but also inherently functional. This approach ensures that your brand's identity remains consistent across platforms while your content distribution becomes more dynamic and efficient. We firmly believe that a harmonious blend of design systems and headless CMSs unlocks immense potential for businesses, propelling them ahead in the digital race.`}
      />
    </Section>

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Image
        src="/static/img/bg/bg_divder-blue.svg"
        alt="Just a divider image, makes no sense, just for deco"
      />
    </Section>

    <Section
      headline={{
        text: "About & History",
      }}
      style="accentTransition"
    >
      <Text
        text={`Founded by passionate digital enthusiasts, Systemics emerged from the desire to reshape the digital realm. With a history spanning over a decade, we've continuously evolved to stay at the forefront of design systems, headless CMSs, and cutting-edge development practices. Our journey is one of innovation, collaboration, and a relentless pursuit of excellence.`}
        highlight
      />
    </Section>

    <Section
      headline={{
        text: "Facts & Figures",
        textAlign: "center",
      }}
      backgroundColor="accent"
      width="wide"
    >
      <Stats
        stats={[
          {
            number: 33,
            title: "Years of Expertise",
            description:
              "With over 33 years in the industry, we`ve honed our craft and forged a reputation for headless excellence designed in systems.",
          },
          {
            number: 200,
            title: "Successful Projects",
            description:
              "We`re so great, that we`ve collaborated with diverse clients, across industries, delivering impactful solutions that drive results",
          },
          {
            number: 99,
            title: "Client Satisfaction",
            description:
              "Thanks to NPS, our client-centric approach ensures we meet and exceed expectations, reflected in our high satisfaction rate",
          },
        ]}
      />
    </Section>

    <Section
      headline={{
        text: "Take a look inside our super cool Agency Life yourself",
        sub: "Including, table soccer, italian coffee and all that fancy stuff",
        width: "default",
        align: "center",
      }}
      width="max"
    >
      <Gallery
        layout="largeTiles"
        lightbox
        images={[
          {
            alt: "An artificial view inside our cool Agency, here one of our smartest developer",
            src: "/static/img/aboutus/01.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/02.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/03.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/04.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/05.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/06.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/07.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/08.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/09.jpg",
          },
        ]}
      />
    </Section>

    <Section inverted style="stagelights" backgroundColor="accent">
      <Cta
        align="left"
        headline="Discover the **Systemics** difference. Join us in creating a **Digital Future** that's both functional and unforgettable."
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
