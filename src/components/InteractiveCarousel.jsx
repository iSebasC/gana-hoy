import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const InteractiveCarousel = () => {
  return (
    <Carousel className="w-full max-w-2xl mx-auto">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="p-4">
              <Card className="!bg-white text-black shadow-lg rounded-lg">
                <CardContent className="flex flex-col items-center text-center">
                  {/* Imagen del Usuario */}
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mb-4 mt-4">
                    <img
                      src={`/user${index + 1}.png`}
                      alt={`Cliente ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Contenido del Testimonio */}
                  <h3 className="text-lg font-semibold text-black mb-2">
                    Cliente {index + 1}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {`"Muy agradecido con el equipo por la creación de Gana hoy, una herramienta muy útil para poder ahorrar."`}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 !bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 !bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700 transition" />
    </Carousel>
  );
};

export default InteractiveCarousel;
