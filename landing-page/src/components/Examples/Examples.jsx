import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButton/TabButton.jsx";
import Section from "../Section/Section.jsx";
import { useState } from "react";
import "./Examples.css";

export default function Examples() {
      const [selectedTopic, setSelectedTopic] = useState();
    
      function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
      }
    return (
        <Section title="Examples" id="examples">
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}  onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}  onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}  onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </Section>
    )
}