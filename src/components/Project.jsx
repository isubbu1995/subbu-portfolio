export default function Project() {
    return (
        <section id="project" className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-8">Featured Project</h2>

                <div className="p-8 bg-gray-50 rounded-xl shadow">
                    <h3 className="text-2xl font-bold mb-4">
                        AI-Powered Enterprise Analytics Assistant
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Built using Spring Boot and Spring AI with RAG and vector-based
                        document retrieval. Implemented conversational memory and
                        tool invocation for dynamic enterprise queries.
                    </p>
                </div>
            </div>
        </section>
    );
}