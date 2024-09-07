import React, { useState, useContext, createContext } from "react";

// Create a context to manage state across subcomponents
const AccordionContext = createContext();

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, children }) {
  const { openIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;
  
  return <div className={`accordion-item ${isOpen ? "open" : ""}`}>{children}</div>;
}

function AccordionHeader({ children, index }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div
      className={`accordion-header ${isOpen ? "active" : ""}`}
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      {children}
    </div>
  );
}

function AccordionPanel({ children, index }) {
  const { openIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return isOpen ? <div className="accordion-panel">{children}</div> : null;
}

// Usage of compound components
function App() {
  return (
    <Accordion>
      <AccordionItem index={0}>
        <AccordionHeader index={0}>Header 1</AccordionHeader>
        <AccordionPanel index={0}>Panel 1 Content</AccordionPanel>
      </AccordionItem>
      <AccordionItem index={1}>
        <AccordionHeader index={1}>Header 2</AccordionHeader>
        <AccordionPanel index={1}>Panel 2 Content</AccordionPanel>
      </AccordionItem>
      <AccordionItem index={2}>
        <AccordionHeader index={2}>Header 3</AccordionHeader>
        <AccordionPanel index={2}>Panel 3 Content</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default App;
