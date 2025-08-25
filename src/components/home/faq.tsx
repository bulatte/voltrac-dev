import Container from "@/components/common/container";
import Accordion from "../common/accordion";

const faqItems = [
  {
    title: "What is Voltrac?",
    content:
      "Voltrac is a cutting-edge platform designed to streamline your workflow and enhance productivity.",
  },
  {
    title: "How does Voltrac work?",
    content:
      "Voltrac uses advanced algorithms and machine learning to optimize your tasks and improve efficiency.",
  },
  {
    title: "What are the benefits of using Voltrac?",
    content:
      "Voltrac offers numerous benefits, including increased productivity, better task management, and enhanced collaboration.",
  },
  {
    title: "How can I get started with Voltrac?",
    content:
      "Getting started with Voltrac is easy! Simply sign up for an account, and you'll be guided through the setup process.",
  },
  {
    title: "Is there a free trial available?",
    content:
      "Yes, Voltrac offers a free trial for new users. Sign up today to get started!",
  },
];

const Faq = () => (
  <div className="border-t border-t-white-25">
    <Container>
      <div className="flex flex-col lg:flex-row gap-20 items-start justify-between px-[var(--cxp)] py-20 ">
        <h2 className="text-subtitle-l">FAQ</h2>
        <Accordion items={faqItems} />
      </div>
    </Container>
  </div>
);

export default Faq;
