import { useState } from "react";
import { motion } from "framer-motion";
import randstadLogo from "../assets/logos/randstad.svg";
import epamLogo from "../assets/logos/epam.svg";
import sagarsoftLogo from "../assets/logos/sagarsoft.svg";
import publicisLogo from "../assets/logos/publicis.svg";
import xoriantLogo from "../assets/logos/xoriant.svg";
import ratnaLogo from "../assets/logos/ratna.svg";

const companies = [
    {
        name: "Randstad Digital",
        logo: randstadLogo,
        role: "Senior Software Engineer",
        project: "Walmart Spatial Platform",
        details:
            "Built backend APIs for enterprise spatial analytics. Integrated Spring AI for AI-driven query assistance using RAG and vector search.",
    },
    {
        name: "EPAM Systems",
        logo: epamLogo,
        role: "Senior Software Engineer",
        project: "Enterprise Backend Modernization",
        details:
            "Contributed to microservices-based backend systems with event-driven integration and secure REST APIs.",
    },
    {
        name: "Sagarsoft",
        logo: sagarsoftLogo,
        role: "Software Engineer",
        project: "Walmart Fulfillment Services",
        details:
            "Designed distributed microservices handling order workflows. Implemented Kafka-based asynchronous communication.",
    },
    {
        name: "Publicis Sapient",
        logo: publicisLogo,
        role: "Senior Associate, Technology",
        project: "Smart Agent Analytics Platform",
        details:
            "Built backend services for user behavior analytics with secure authentication and scalable data processing.",
    },
    {
        name: "Xoriant Solutions",
        logo: xoriantLogo,
        role: "Software Engineer",
        project: "Enterprise Workflow Automation",
        details:
            "Developed REST APIs and backend logic supporting workflow management systems.",
    },
    {
        name: "RatnaGlobalTech",
        logo: ratnaLogo,
        role: "Software Engineer",
        project: "Backend System Development",
        details:
            "Worked on core backend modules using Java and Spring Boot, focusing on API design and database integration.",
    },
];

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="experience" className="py-28 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-16">
                    Enterprise Engagements
                </h2>

                <div className="space-y-6">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-sm cursor-pointer"
                            onClick={() =>
                                setActiveIndex(activeIndex === index ? null : index)
                            }
                        >
                            <div className="p-6 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-8 object-contain"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            {company.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {company.role}
                                        </p>
                                    </div>
                                </div>
                                <span>
                                    {activeIndex === index ? "−" : "+"}
                                </span>
                            </div>

                            {activeIndex === index && (
                                <div className="px-6 pb-6">
                                    <p className="font-medium mb-2">
                                        Project: {company.project}
                                    </p>
                                    <p className="text-gray-600">
                                        {company.details}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}