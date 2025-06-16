import { CORE_CONCEPTS } from "../../data.js";
import CoreConcept from "../CoreConcept/CoreConcept.jsx";
import "./CoreConcepts.css";
import Section from "../Section/Section.jsx";

export default function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.key} {...concept} />
        ))}
      </ul>
    </Section>
  );
}
