import { Section } from "@kickstartds/ds-agency/section";
import { Text } from "@kickstartds/ds-agency/text";
import { ButtonGroup } from "@kickstartds/ds-agency/button-group";
import { Headline } from "@kickstartds/ds-agency/headline";
import "./disclaimer.scss";
import "./Disclaimer.client";

export const Disclaimer = () => (
  <div className="dsa-disclaimer" ks-component="dsa.disclaimer">
    <Section width="wide" spaceBefore="none" spaceAfter="none" inverted hidden>
      <div className="dsa-disclaimer__box">
        <Headline
          text="Read me!"
          level="h2"
          className="dsa-disclaimer__banner"
          sub=" "
          renderSubheadline={(t) => (
            <img
              src="/img/cool-cat.webp"
              alt="A relaxed looking cat with sun glasses and cap"
            />
          )}
        />

        <Text
          text={`
#### Message from the makers

This is just a simplified showcase demo website!
Please check out the background story and why we created Systemics.`}
          className="dsa-disclaimer__content"
        />

        <ButtonGroup
          buttons={[
            {
              label: "Explore",
              icon: "chevron-right",
              target: "https://about.design-system.agency/",
            },
            { label: "Dismiss", icon: "close" },
          ]}
          arrangement="center"
        />
      </div>
    </Section>
    <button className="dsa-disclaimer__show-button" title="Show disclaimer">
      <img
        src="/img/cool-cat.webp"
        alt="A relaxed looking cat with sun glasses and cap"
      />
    </button>
  </div>
);
