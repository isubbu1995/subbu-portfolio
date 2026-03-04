export default function Skills() {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-10">Technical Expertise</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-100 rounded-xl">
                        <h3 className="font-semibold mb-3">Backend</h3>
                        <ul className="space-y-2">
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>Microservices</li>
                            <li>Kafka</li>
                            <li>MySQL</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-xl">
                        <h3 className="font-semibold mb-3">AI Integration</h3>
                        <ul className="space-y-2">
                            <li>Spring AI</li>
                            <li>RAG</li>
                            <li>Vector DB</li>
                            <li>Prompt Engineering</li>
                        </ul>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-xl">
                        <h3 className="font-semibold mb-3">Observability</h3>
                        <ul className="space-y-2">
                            <li>Docker</li>
                            <li>Prometheus</li>
                            <li>Grafana</li>
                            <li>OpenTelemetry</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}