export default function Timeline() {
    const timeline = [
        { year: "2020", event: "Started Backend Career" },
        { year: "2021", event: "Enterprise Microservices Exposure" },
        { year: "2022", event: "Large-scale Analytics Systems" },
        { year: "2023", event: "Distributed Fulfillment Systems" },
        { year: "2024", event: "AI Integration with Spring AI" },
        { year: "2025", event: "Advanced RAG & LLM Architectures" },
    ];

    return (
        <section className="py-28 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-16">
                    Professional Evolution
                </h2>

                <div className="relative border-l-2 border-gray-200 pl-8 space-y-12">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="relative border-l border-gray-300 pl-8 space-y-12" />
                            <p className="font-semibold">{item.year}</p>
                            <p className="text-gray-600">{item.event}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}