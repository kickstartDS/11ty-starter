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
    key: "Post 1",
    order: 5,
  },
};

export default (props) => (
  <PageWrapper>
    <Section
      width="wide"
      buttons={[
        {
          label: "Back to overview",
          target: "/blog",
        },
        {
          label: "Next article",
          target: "/blog-post3",
          icon: "chevron-left",
        },
        {
          label: "Previous article",
          target: "/blog-post2",
          icon: "chevron-right",
        },
      ]}
    >
      <Split layout="sidebarRight">
        <div>
          <BlogHead
            date="02/02/2024"
            tags={["Headless", "CMS"]}
            headline="Unleashing Innovation with Headless Websites: The Future of Digital Experiences"
            image="/static/img/blog/2150710000.jpg"
          />
          <Text
            text={`

__ #tldr: Investing in your digital team's growth is crucial for sustainable success. In this article, we highlight Systemics' Design System Trainings, designed to equip your team with the skills they need to harness your design system effectively. Understand how our trainings promote collaboration, shared understanding, and continuous learning, ensuring your design system remains an evolving cornerstone of your digital success. __

## Behead the Old, Say Hello to Headless!
Are you tired of being shackled to traditional content management systems (CMS)? Well, chop off the constraints and prepare for a decapitation revolution – welcome to the era of Headless Websites! With our Headless CMS service, brands can enjoy top-notch innovation and creativity. If you're ready to redefine your digital journey, we're just the guys with the right tech-sword. So, buckle up! Just like a great fantasy novel, the world of headless CMS architecture can be both daunting and exhilarating. But don't worry, we promise no dragons...just a lot of awesome design coding!

### Headless CMS: The Power Behind Dynamic Content Distribution
Do you want to deliver a rich, dynamic, and super responsive content experience? No, we're not talking Harry Potter-level magic, we're talking Headless CMS! With our headless CMS architecture, we break down the barriers between content and display, giving you the unparalleled flexibility to deliver your content how, when, and where your users want it. It's like a made-to-order pizza, but for digital content!

### Redefining the Digital Journey: The Future is Headless...and Fearless!
**Are you ready to get a head...uhm...*ahead* (gee, we love our puns) in the digital world?** Don't just get ahead, become a trendsetter!

Imagine the Internet as a giant hill. Now, think of your website as an otter, yes, an otter! Without headless CMS, your otter is just...well, an otter. It can move alright, but hills? They're a bit tricky. Now envision smearing your otter with the most luxurious, organic, buttery tech in the game - a headless CMS. Suddenly, that hill doesn't look so daunting. Your otter confidently dives, slides, and glides its way down, offering a ride that is about as smooth as... well, a buttered-up otter sliding down a hill!

Through headless CMS, it's not just about movement, it's about adaptability. No matter the device, be it a hulking desktop or the slimmest smartphone, your content will adapt and morph faster than a chameleon on a tie-dye shirt! We don't stop there; we ensure your content caters to your users’ preferences, tailoring every pixel, every word to their unique expectations. So, whether your user is a millennial artist who likes a little quirkiness or a serious CEO who appreciates conciseness and clarity, their experience is individually tailored, creating a seamless, personalized journey through your digital landscape.

Ready to take that plunge and slide on to a smoother digital experience? Embrace the headless future with us and set new standards in customer experience. Because at Systemics, we're not just about getting you ahead, we’re about helping you become the butter on the hill in your industry's digital journey!

## Maintaining Design Integrity in the Headless Universe
#### Design Systems: The Unsung Hero in the Headless Universe
In the realm of Headless CMS, sometimes design and frontend components can feel a bit lost, like a ship adrift in space. That's where our Design Systems come in! They're the unsung heroes, the North Star guiding your frontend safely through the headless universe.

With Design Systems, we ensure your brand's design consistency across the digital vastness of the headless landscape. Think of Design Systems like a detailed blueprint; they catalogue all the components, define their structure, and dictate how they should function and interact across different platforms and devices. It's like having a cosmic rulebook for your frontend components - maintaining their integrity, ensuring their predictability, and promoting scalability in the headless cosmos.

Our experts, equipped with the mastery of Design Systems, are like skilled architects and engineers. They not only construct, but also consistently uphold the visual and functional integrity of your frontend components. They're not just chopping off heads; they're meticulously carving out the future of digital design without compromising on your vision or aesthetics.

So, leap into the headless universe, confident that your design coherence and frontend component harmony are securely anchored by our Design Systems. You might be going headless, but with us, you'll never lose sight of your design identity.

### Breaking Chains, Building Bridges
So, if you're tired of being held back by traditional CMS and are ready to take your digital presence to the next level, join us at Systemics. It’s time to break the chains and build bridges to a more innovative and flexible digital future. It's time to go headless!

P.S. Still not convinced? Why not check out some of our [Use Cases](/showcases) for some brain-awakening insight? Or give us a call, we promise we won't bite (unlike the dragons in those fantasy novels). **Trust us, we know our headless stuff!**
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
          date="02/02/2024"
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
