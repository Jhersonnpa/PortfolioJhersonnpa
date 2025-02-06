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
    <section class="py-10 bg-gradient-to-t from-primary from- via-background via-">
  <div class="container mx-auto px-6">
    <h2 class="text-3xl font-bold text-center mb-8">Testimonios</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {
        testimonials.map((testimonial,i) => (
          <div key={i} class="bg-background p-6 rounded-lg shadow-md">
            <p class="mb-4 italic">"{testimonial.content}"</p>
            <div class="flex items-center">
              <div class="ml-4">
                <p class="font-semibold">{testimonial.name}</p>
                <p class="text-sm text-gray-400">
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
