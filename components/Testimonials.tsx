import { Star } from 'lucide-react'
import React from 'react'
type props = {

}

const Testimonial = () => {
  return (
    <>
      <section className="container mx-auto py-16 bg-secondary/10">
         <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What your Guest Say</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                     Don't just take our word for it - hear from our satisfied customers
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
            {
              name: "Sarah Johnson",
              comment:
                "The best dining experience I've had this year! The truffle pasta is to die for.",
              rating: 5,
            },
            {
              name: "Michael Chen",
              comment:
                "Consistently excellent food and service. Our go-to spot for special occasions.",
              rating: 5,
            },
            {
              name: "Emily Rodriguez",
              comment:
                "The ambiance is perfect and every dish we tried was flavorful and beautifully presented.",
              rating: 3,
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
             </div>
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.comment}"
              </p>
              <p className="font-medium">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonial