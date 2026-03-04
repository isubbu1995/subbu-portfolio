export default function Hero() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-32">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Backend Engineer • AI Integration
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Scalable Backend Systems
                <br />
                Built with Precision
            </h1>

            <p className="mt-8 text-xl text-gray-600 max-w-2xl">
                Specializing in Spring Boot, Microservices, Kafka,
                and Generative AI integration using Spring AI.
            </p>

            <div className="mt-10 flex gap-6">
                <a
                    href="#project"
                    className="px-6 py-3 bg-black text-white rounded-xl"
                >
                    View Work
                </a>
                <a
                    href="#contact"
                    className="px-6 py-3 border rounded-xl"
                >
                    Contact
                </a>
                <a
                    href="/resume.pdf"
                    download
                    onClick={() => window.gtag?.("event", "resume_download")}
                    className="px-6 py-3 border rounded-xl"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
}