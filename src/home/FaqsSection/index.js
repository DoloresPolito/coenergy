"use client";

import { useState } from "react";

import AccordionItem from "@/components/AccordionItem";

export default function FaqsSection() {
  const [active, setActive] = useState("");

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  const questions1 = [
    {
      id: 1,
      title: "¿Cómo funciona un sistema solar Off Grid?",
      content:
        "Un sistema Off Grid funciona de manera independiente a la red eléctrica. Genera energía a través de paneles solares, la almacena en baterías y la suministra a través de un inversor. Es ideal para zonas sin acceso a la red.",
    },
    {
      id: 2,
      title: "¿Qué incluye una instalación típica Off Grid?",
      content:
        "Generalmente incluye paneles solares, inversor, baterías, regulador de carga y estructura de montaje. También se puede incluir monitoreo remoto y protecciones eléctricas.",
    },
    {
      id: 3,
      title: "¿Cuánto mantenimiento requiere el sistema?",
      content:
        "Muy poco. Solo se recomienda una limpieza periódica de los paneles y chequeos visuales del estado de los cables y conexiones.",
    },
    {
      id: 4,
      title: "¿Cuánto dura una batería en este tipo de sistemas?",
      content:
        "Depende del uso y del tipo de batería. Con un uso racional, las de plomo ácido suelen durar alrededor de 3 años.",
    },
  ];

  return (
    <>
      <div>
        {questions1.map((question, index) => (
          <AccordionItem
            key={index}
            active={active}
            handleToggle={() => handleToggle(question.id)}
            id={question.id}
            header={question.title}
            content={question.content}
          />
        ))}
      </div>
    </>
  );
}