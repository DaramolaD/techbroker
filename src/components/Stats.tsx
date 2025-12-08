// CountUp import removed to avoid dependency error
// const stats = [

const stats = [
    { label: "Successful Projects", value: "250", suffix: "+" },
    { label: "Years of Experience", value: "12", suffix: "+" },
    { label: "Expert Consultants", value: "50", suffix: "+" },
    { label: "Countries Served", value: "5", suffix: "+" },
];

export default function Stats() {
    return (
        <section className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-12 ">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 divide-x-0 md:divide-x divide-gray-100">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center px-4">
                        <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-mono tracking-tighter">
                            {stat.value}{stat.suffix}
                        </div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
