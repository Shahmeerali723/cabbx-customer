import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Devis Ford",
    image: "/images/MVPCar.png", // replace with actual image paths
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    name: "Devis Ford",
    image: "/images/MVPCar.png", // replace with actual image paths
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
  },
  {
    name: "Devis Ford",
    image: "/images/MVPCar.png", // replace with actual image paths
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    name: "Devis Ford",
    image: "/images/MVPCar.png", // replace with actual image paths
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
  },
  {
    name: "Devis Ford",
    image: "/images/MVPCar.png", // replace with actual image paths
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    name: "Devis Ford",
    image: "/images/MVPCar.png", // replace with actual image paths
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
  },
  {
    name: "Devis Ford",
    image: "/images/MVPCar.png", // replace with actual image paths
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },

  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <div className="mt-8 font-plus-jakarta">
      <h2 className="text-center text-3xl font-bold mb-8">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-2">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className={`shadow-lg flex border-[#CACACA] p-1 px-4 ${
              testimonial.text.length > 200
                ? "shadow-[0px_0px_22.9px_rgba(226,_197,_41,_0.3)_inset]"
                : "shadow-[0px_0px_22.9px_rgba(95,_131,_59,_0.3)_inset]"
            }`}
          >
            <CardHeader className="flex items-center space-x-4 p-4">
              <Avatar className="bg-black w-[80px] h-[80px]">
                <AvatarImage src={testimonial.image} alt={testimonial.name} />
              </Avatar>
            </CardHeader>

            <CardContent className="p-4">
              <div>
                
                <div className="flex items-center">
                <h6 className="font-bold mr-3">{testimonial.name}</h6>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.32 2.161 10.68 2.161 10.951 2.927l1.21 3.73a1 1 0 00.95.69h3.92c.967 0 1.371 1.24.588 1.81l-3.14 2.28a1 1 0 00-.364 1.118l1.21 3.73c.27.766-.682 1.4-1.398.94l-3.14-2.28a1 1 0 00-1.176 0l-3.14 2.28c-.716.46-1.668-.174-1.398-.94l1.21-3.73a1 1 0 00-.364-1.118l-3.14-2.28c-.783-.57-.379-1.81.588-1.81h3.92a1 1 0 00.95-.69l1.21-3.73z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-[#787878]">{testimonial.text}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
