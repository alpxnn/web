import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaRegCheckCircle } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

// Helper for animations
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Data objects for cleaner mapping
const servicesData = [
  { icon: "CustomApp", title: "Gen AI Custom App Development", description: "We build custom generative AI applications that solve real-world business challenges—automating workflows, boosting engagement, and driving innovation." },
  { icon: "FineTuning", title: "Gen AI Model Fine-Tuning", description: "Our domain-specific large language model fine-tuning solutions reduce hallucinations and improve accuracy while generating contextually intelligent, business-ready results." },
  { icon: "Multimodal", title: "Gen AI Multimodal Solutions", description: "Our AI developers build next-gen multimodal generative AI services to help organizations gain advanced automation, richer insights, and more seamless user experiences." },
  { icon: "Integration", title: "Generative AI Model Integration", description: "Our seamless generative AI integration services help you integrate AI into your existing systems—breaking down silos and improving efficiency without disrupting workflows." },
  { icon: "Deployment", title: "Gen AI Infrastructure & Deployment", description: "We build robust, scalable AI infrastructure and deployment, ensuring your generative AI applications are secure, high-performing, and production-ready." },
  { icon: "Support", title: "Gen AI Support & Optimization", description: "We provide continuous support to keep your GenAI systems optimized, compliant, and effective—addressing drift, amplifying output, and maximizing long-term value." },
];

const whyChooseUsData = [
  { icon: "Architecture", title: "Adaptive, Future-Proof Architecture", description: "Our solutions are designed to adapt. As your business pivots, your systems don’t break. Your AI stays agile, scalable, and ready for what's next." },
  { icon: "Collaboration", title: "Cross-functional Collaboration Support", description: "We engineer alignment. Our delivery model connects siloed business, product, and engineering teams, ensuring quicker rollouts and easier buy-in." },
  { icon: "Risk", title: "Minimized AI Implementation Risk", description: "Our step-by-step process minimizes missteps and provides clarity at every stage. You get enterprise-grade execution with no surprises and total peace of mind." },
  { icon: "Security", title: "Built-In Security & Compliance", description: "Security isn't an afterthought. Every solution is built with enterprise controls, audibility, and compliance as table stakes, ready for any industry." },
];

const faqData = [
    { question: "What is Generative AI, and how does it work?", answer: "Generative AI applies machine learning models—such as LLMs—to generate new content based on patterns from training data. Data is used to design Intelligent Adaptive systems that automate, personalize, and most importantly, scale digital experiences." },
    { question: "What are the top business use cases for Generative AI?", answer: "The top use cases are AI copilots, content generation, intelligent chatbots, document summarization, and personalization engines. Our generative AI development services help you discover and execute high-value use cases to accelerate speed and accuracy, increase engagement, and drive business growth." },
    { question: "Which industries can benefit the most from Generative AI solutions?", answer: "Generative AI delivers strong ROI in finance, healthcare, retail, logistics, and education. As a generative AI services company spanning industry domains, we craft end-to-end, industry-specific solutions customized for each sector's compliance, data, and operational needs." },
    { question: "How much does it cost to develop a Generative AI solution?", answer: "Pricing depends on the scope, complexity of data, and integration needs. Depending on your budget and schedule, we provide the flexibility to engage with you over varying tenure — from pilot to full-scale rollout — thereby delivering high-value AI development scenes." },
    { question: "Why should businesses choose Jellyfish Technologies for Generative AI development?", answer: "We’re a full-cycle generative AI development company providing strategic consulting, custom builds, and scalable deployment. We help you minimize risk and maximize the outcomes of GenAI adoption with proven experience and enterprise-grade delivery." },
];

const trustedLogos = [
  '/path/to/Nasscom-color-logo-1.png',
  '/path/to/patra-color-1.png',
  '/path/to/patronum-color-1.png',
  '/path/to/payleadr-color-1.png',
  '/path/to/redquanta-color-logo-1.png',
];

// Reusable Components
const Section = ({ children, className = '' }) => (
  <motion.section
    className={`w-full py-16 lg:py-24 ${className}`}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <div className="container mx-auto px-4 md:px-6">
      {children}
    </div>
  </motion.section>
);

const SectionTitle = ({ children }) => (
  <motion.h2
    className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4"
    variants={fadeInUp}
  >
    {children}
  </motion.h2>
);

const SectionSubtitle = ({ children }) => (
  <motion.p
    className="max-w-3xl mx-auto text-center text-lg text-gray-600 dark:text-gray-400 mb-12"
    variants={fadeInUp}
  >
    {children}
  </motion.p>
);

const StatCard = ({ value, label }) => (
  <motion.div variants={fadeInUp} className="text-center">
    <p className="text-4xl lg:text-5xl font-bold text-blue-500 dark:text-blue-400">
      {value}
    </p>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</p>
  </motion.div>
);

// Main Component
const GenAIDevelopmentPage = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200 font-sans">
        <Header />
      <main>
        {/* Hero Section */}
        <Section className="pt-24 lg:pt-32">
          <motion.div variants={fadeInUp} className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Generative AI Development Company
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              As a leading generative AI development company, we build advanced, production-ready AI solutions that empower your business intelligence beyond mere automation. We offer end-to-end GenAI services focused on model fine-tuning, LLM integration, and multi-modal application development.
            </p>
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
              Book a Free Consultation
            </button>
          </motion.div>
        </Section>

        {/* Stats Bar */}
        <Section>
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <StatCard value="14+" label="Years of Experience" />
            <StatCard value="150+" label="Full Time Experts" />
            <StatCard value="98%" label="Projects Delivered On Time" />
            <StatCard value="4.9/5" label="Customer Ratings" />
          </motion.div>
        </Section>

        {/* Services Section */}
        <Section>
          <SectionTitle>Generative AI Development Services We Offer</SectionTitle>
          <SectionSubtitle>
            We develop purpose-built, high-impact generative AI applications and solutions to solve business challenges, accelerate speed-to-market, and generate significant new revenue streams.
          </SectionSubtitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* You can replace these with actual icons */}
                <div className="text-blue-500 text-4xl mb-4">❖</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </Section>
        
        {/* Why Businesses Choose Us Section */}
        <Section className="bg-white dark:bg-gray-800">
            <SectionTitle>Why Businesses Choose Our Services</SectionTitle>
            <SectionSubtitle>
                We offer generative AI development services focused on driving core business goals. From improving operational efficiency to enhancing next-level product capabilities, these are the benefits our solutions consistently deliver.
            </SectionSubtitle>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {whyChooseUsData.map((item, index) => (
                    <motion.div key={index} variants={fadeInUp} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 text-blue-500 mt-1">
                            <FaRegCheckCircle size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>

        {/* Engagement Models Section */}
        <Section>
            <SectionTitle>Engagement Models</SectionTitle>
            <SectionSubtitle>
                We offer flexible engagement models based on your project scope, execution style, and growth strategy. Whether you need a long-term partner, targeted support, or delivery on a fixed scope—we have a model to match.
            </SectionSubtitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {['Offshore Dedicated Team', 'Staff Augmentation', 'Project-Based'].map((model, index) => (
                     <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{model}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                            { model === 'Offshore Dedicated Team' && "Scale quickly while retaining complete control. We provide a team of dedicated generative AI developers exclusively for your project." }
                            { model === 'Staff Augmentation' && "Augment your internal AI team without a full hiring cycle. Get the generative AI consultants you need, when you need them." }
                            { model === 'Project-Based' && "For well-defined AI initiatives with a clear scope. We provide end-to-end execution with complete ownership and milestone-driven delivery." }
                        </p>
                        <a href="#" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                            Learn More <FiArrowRight className="ml-2" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-white dark:bg-gray-800">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
             <div className="max-w-3xl mx-auto">
                {faqData.map((faq, index) => (
                    <motion.div key={index} variants={fadeInUp} className="border-b border-gray-200 dark:border-gray-700 py-6">
                        <button
                            className="w-full flex justify-between items-center text-left"
                            onClick={() => toggleFaq(index)}
                        >
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                            <span className="text-blue-500">
                                {activeFaq === index ? <FaMinus /> : <FaPlus />}
                            </span>
                        </button>
                        <AnimatePresence>
                            {activeFaq === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <p className="pt-4 text-gray-600 dark:text-gray-400">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </Section>
        
        {/* Contact Form Section */}
        <Section>
            <div className="max-w-2xl mx-auto text-center">
                <SectionTitle>Speak to Our Generative AI Consultants</SectionTitle>
                <SectionSubtitle>
                    Know where generative AI fits in your strategy. Get expert guided direction for your industry, infrastructure, and business goals.
                </SectionSubtitle>
                <motion.form variants={fadeInUp} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-left space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                            <input type="tel" id="phone" placeholder="Your Phone" className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
                            <input type="text" id="company" placeholder="Your Company" className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                        <textarea id="message" rows="5" placeholder="Tell us about your project" className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
                        Start a Conversation
                    </button>
                </motion.form>
            </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default GenAIDevelopmentPage;