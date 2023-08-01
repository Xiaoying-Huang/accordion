import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <>
      <div>
        <Accordion />
      </div>
    </>
  );
}

function Accordion() {
  const [isSelected, setSelected] = useState(null);
  return (<>
    <div className="accordion">
      {faqs.map(item => (
        <AccordionItem
          num={faqs.indexOf(item) + 1}
          title={item.title}
          text={item.text}
          key={item.title}
          onClick={setSelected}
          isSelected={isSelected} />))}
    </div >
  </>);
}

function AccordionItem({ num, title, text, onClick, isSelected }) {
  const isOpen = (num === isSelected);
  function handleToggle() {
    onClick(isOpen ? null : num);
  }
  return (<>
    <div className={isOpen ? "item open" : "item"} onClick={handleToggle} id={num}>
      <p className={isOpen ? "number" : "number"} id={num}>{num > 9 ? num : `0${num}`}</p>
      <p className="title" id={num}>{title}</p>
      <p className="icon" id={num}>{isOpen ? "-" : "+"} </p>
      {isOpen ? <div className="content-box text" id={num}>{text}</div> : null}
    </div >
  </>);
}