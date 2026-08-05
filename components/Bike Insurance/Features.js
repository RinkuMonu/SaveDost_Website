export default function Features({ data }) {
  const { sectionTitle, sectionDesc, features } = data;

  return (
    <section className="border-t border-gray-300 bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-[#0d3b4f] sm:text-4xl">{sectionTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{sectionDesc}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#00b4d8] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#00b4d8] to-[#0d3b4f] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0d3b4f] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
