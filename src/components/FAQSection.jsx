import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-10 px-8">

      {/* Acordeón */}
      <Accordion type="single" collapsible className="space-y-4">
        {/* Pregunta 1 */}
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left text-blue-900 text-lg font-semibold hover:underline">
            ¿Dónde puedo ver mis ahorros?
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-gray-700 space-y-2">
              <p>1. Inicia sesión en Banca Móvil.</p>
              <p>2. Ingresa a “Mis productos” y luego “Ver todos”.</p>
              <p>3. Entra en “Ahorra en tus Gana hoy”.</p>
              <p>4. Ingresa a tu wardadito y revisa tu ahorro, así como tus últimos movimientos.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Pregunta 2 */}
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left text-blue-900 text-lg font-semibold hover:underline">
            ¿Puedo retirar mi dinero de Gana hoy?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Sí, puedes retirar tu dinero en cualquier momento desde la sección "Retiro" en la app.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Pregunta 3 */}
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left text-blue-900 text-lg font-semibold hover:underline">
            ¿Qué pasa si ya no quiero ahorrar en Gana hoy?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Puedes cerrar tu wardadito desde la configuración de la app sin costos adicionales.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Pregunta 4 */}
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left text-blue-900 text-lg font-semibold hover:underline">
            ¿Gana hoy me da intereses?
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Sí, tu wardadito genera intereses dependiendo del plan seleccionado.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* Pregunta 5 */}
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left text-blue-900 text-lg font-semibold hover:underline">
            Términos y condiciones de las campañas vigentes
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              Consulta los términos y condiciones de nuestras campañas en la sección de Ayuda en la app.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FAQSection;
