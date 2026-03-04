import { motion } from "framer-motion";

const metrics = [
    { label: "Microservices Designed", value: "10+" },
    { label: "AI RAG Pipelines Built", value: "Multiple" },
    { label: "Event-Driven Integrations", value: "Kafka-Based" },
    { label: "Production Systems Supported", value: "Enterprise Grade" },
];

export default function Metrics() {
    return (
        <section className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-16">
                    Engineering Highlights
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {metrics.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-2xl text-center shadow-sm"
                        >
                            <div className="text-3xl font-bold mb-3">
                                {item.value}
                            </div>
                            <div className="text-gray-600 text-sm">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}