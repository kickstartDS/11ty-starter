import { Section } from "@kickstartds/ds-agency/section";
import { Cta } from "@kickstartds/ds-agency/cta";
import { BlogHead } from "@kickstartds/ds-agency/blog-head";
import { BlogAside } from "@kickstartds/ds-agency/blog-aside";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Text } from "@kickstartds/ds-agency/text";
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
      <BlogHead
        date="11/05/2023"
        headline="The Future of Digital Experiences"
        image="/static/img/agency.png"
        tags={["Headless", "CMS"]}
      />
    </Section>

    <Section
      width="wide"
      headline={{
        text: "Unleashing Innovation with Headless Websites: The Future of Digital Experiences",
      }}
    >
      <Text
        text={`
**#tldr** *Dive into the exciting world of headless architecture with Systemics. This article explores our Headless Websites service, a playground of innovation and creativity for brands seeking to redefine their digital journey. Discover how our experts leverage headless CMS architecture to provide unparalleled flexibility while maintaining design integrity. We make content distribution dynamic and responsive, tailoring it to users' preferences for a seamless journey across devices and platforms.*

## Behead the Old, Say Hello to Headless!
Are you tired of being shackled to traditional content management systems (CMS)? Well, chop off the constraints and prepare for a decapitation revolution – welcome to the era of Headless Websites! With our Headless CMS service, brands can enjoy top-notch innovation and creativity. If you're ready to redefine your digital journey, we're just the guys with the right tech-sword. So, buckle up! Just like a great fantasy novel, the world of headless CMS architecture can be both daunting and exhilarating. But don't worry, we promise no dragons...just a lot of awesome design coding!

## Headless CMS: The Power Behind Dynamic Content Distribution
Do you want to deliver a rich, dynamic, and super responsive content experience? No, we're not talking Harry Potter-level magic, we're talking Headless CMS! With our headless CMS architecture, we break down the barriers between content and display, giving you the unparalleled flexibility to deliver your content how, when, and where your users want it. It's like a made-to-order pizza, but for digital content!

## Redefining the Digital Journey: The Future is Headless...and Fearless!
Are you ready to get a head...uhm...*ahead* (gee, we love our puns) in the digital world? Don't just get ahead, become a trendsetter!

Imagine the Internet as a giant hill. Now, think of your website as an otter, yes, an otter! Without headless CMS, your otter is just...well, an otter. It can move alright, but hills? They're a bit tricky. Now envision smearing your otter with the most luxurious, organic, buttery tech in the game - a headless CMS. Suddenly, that hill doesn't look so daunting. Your otter confidently dives, slides, and glides its way down, offering a ride that is about as smooth as... well, a buttered-up otter sliding down a hill!

Through headless CMS, it's not just about movement, it's about adaptability. No matter the device, be it a hulking desktop or the slimmest smartphone, your content will adapt and morph faster than a chameleon on a tie-dye shirt! We don't stop there; we ensure your content caters to your users’ preferences, tailoring every pixel, every word to their unique expectations. So, whether your user is a millennial artist who likes a little quirkiness or a serious CEO who appreciates conciseness and clarity, their experience is individually tailored, creating a seamless, personalized journey through your digital landscape.

Ready to take that plunge and slide on to a smoother digital experience? Embrace the headless future with us and set new standards in customer experience. Because at Systemics, we're not just about getting you ahead, we'#'re about helping you become the butter on the hill in your industry's digital journey!


## Maintaining Design Integrity in the Headless Universe
### Design Systems: The Unsung Hero in the Headless Universe
In the realm of Headless CMS, sometimes design and frontend components can feel a bit lost, like a ship adrift in space. That's where our Design Systems come in! They're the unsung heroes, the North Star guiding your frontend safely through the headless universe.

With Design Systems, we ensure your brand's design consistency across the digital vastness of the headless landscape. Think of Design Systems like a detailed blueprint; they catalogue all the components, define their structure, and dictate how they should function and interact across different platforms and devices. It's like having a cosmic rulebook for your frontend components - maintaining their integrity, ensuring their predictability, and promoting scalability in the headless cosmos.

Our experts, equipped with the mastery of Design Systems, are like skilled architects and engineers. They not only construct, but also consistently uphold the visual and functional integrity of your frontend components. They're not just chopping off heads; they're meticulously carving out the future of digital design without compromising on your vision or aesthetics.

So, leap into the headless universe, confident that your design coherence and frontend component harmony are securely anchored by our Design Systems. You might be going headless, but with us, you'll never lose sight of your design identity.


## Breaking Chains, Building Bridges
So, if you're tired of being held back by traditional CMS and are ready to take your digital presence to the next level, join us at Systemics. It's time to break the chains and build bridges to a more innovative and flexible digital future. It's time to go headless!

**P.S. Still not convinced? Why not check out some of our [Use Cases](/showcases) for some brain-awakening insight? Or give us a call, we promise we won't bite (unlike the dragons in those fantasy novels). Trust us, we know our headless stuff!**
        `}
      />
      <BlogAside
        author={{
          byline: "CEO at Company",
          email: "jane.smith@example.com",
          image: "/static/img/customer-1.png",
          name: "Jane Smith",
          twitter: "jane_smith",
        }}
        date="12/30/2022"
        readingTime="5 min read"
        socialSharing={[
          {
            href: "https://twitter.com/share?text=The%20Future%20of%20AI&url=https://example.com/blog/the-future-of-ai",
            icon: "twitter",
            title: "Share on Twitter",
          },
          {
            href: "https://www.linkedin.com/shareArticle?mini=true&url=https://example.com/blog/the-future-of-ai&title=The%20Future%20of%20AI&summary=The%20Future%20of%20AI&source=LinkedIn",
            icon: "linkedin",
            title: "Share on LinkedIn",
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      headline={{
        text: "Matching Showcases",
      }}
    >
      <TeaserCard
        target="/showcase-launchpad"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        target="/showcase-eco"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
      />
    </Section>

    <Section backgroundColor="accent">
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
