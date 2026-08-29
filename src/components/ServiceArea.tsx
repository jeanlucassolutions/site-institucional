'use client'

const ServiceArea = () => {
  const regions = [
    'Jardim da Granja',
    'Jardim Uirá',
    'Putim',
    'Residencial Flamboyant',
    'Jardim São José',
    'Jardim Santa Inês',
    'DCTA',
  ]

  return (
    <section id="atendimento" className="py-16 md:py-24 bg-gradient-to-br from-navy-800 to-navy-700 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Eletricista em São José dos Campos
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Atendimento realizado em São José dos Campos e principalmente nas regiões abaixo.
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {regions.map((region, index) => (
            <div
              key={index}
              className="p-4 bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg hover:bg-opacity-10 hover:border-opacity-20 transition-all duration-300 backdrop-blur-sm text-center"
            >
              <p className="font-semibold text-electric-400">{region}</p>
            </div>
          ))}
        </div>

        {/* Location Info */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <p className="text-lg font-semibold mb-2">São José dos Campos - SP</p>
            <p className="text-gray-300">
              Localizado em São José dos Campos, atendemos principalmente as regiões listadas acima.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceArea
