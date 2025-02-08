import React from 'react'

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Juan Pérez",
      role: "CTO, TechCorp",
      content:
        "Un desarrollador excepcional. Su atención al detalle y habilidades técnicas son impresionantes.",
    },
    {
      name: "María García",
      role: "Project Manager, InnovaSoft",
      content:
        "Trabajar con este desarrollador ha sido una experiencia fantástica. Altamente recomendado.",
    },
  ];
  return (
    <section className="py-10 bg-gradient-to-b from-background to-primary">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {
        testimonials.map((testimonial,i) => (
          <div key={i} className="bg-dark p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">"{testimonial.content}"</p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</section>
  )
}
