import { Planet } from './types';

export const PLANETS: Planet[] = [
  {
    name: "Mercurio",
    description: "El planeta más pequeño y cercano al Sol. ¡Hace mucho calor aquí de día!",
    color: "bg-gray-400",
    size: "w-12 h-12",
    icon: "🪨",
    gravity: 0.38,
    rotationSpeed: 0.01
  },
  {
    name: "Venus",
    description: "El planeta más brillante. Está cubierto de nubes espesas que atrapan el calor.",
    color: "bg-yellow-200",
    size: "w-16 h-16",
    icon: "✨",
    gravity: 0.9,
    rotationSpeed: 0.005
  },
  {
    name: "Tierra",
    description: "¡Nuestro hogar! El único lugar conocido con vida y mucha agua líquida.",
    color: "bg-blue-500",
    size: "w-20 h-20",
    icon: "🌍",
    gravity: 1.0,
    rotationSpeed: 0.02
  },
  {
    name: "Marte",
    description: "El planeta rojo. Tiene montañas gigantes y tormentas de polvo enormes.",
    color: "bg-red-500",
    size: "w-14 h-14",
    icon: "🔴",
    gravity: 0.38,
    rotationSpeed: 0.02
  },
  {
    name: "Júpiter",
    description: "El rey de los planetas. Es un gigante gaseoso con una gran mancha roja.",
    color: "bg-orange-300",
    size: "w-32 h-32",
    icon: "🟠",
    gravity: 2.5,
    rotationSpeed: 0.05
  },
  {
    name: "Saturno",
    description: "Famoso por sus hermosos anillos hechos de hielo y roca.",
    color: "bg-yellow-600",
    size: "w-28 h-28",
    icon: "🪐",
    gravity: 1.07,
    rotationSpeed: 0.04
  },
  {
    name: "Urano",
    description: "Un gigante de hielo que gira de lado. Tiene un color azul verdoso.",
    color: "bg-cyan-300",
    size: "w-24 h-24",
    icon: "❄️",
    gravity: 0.89,
    rotationSpeed: 0.03
  },
  {
    name: "Neptuno",
    description: "El planeta más ventoso. Está muy lejos y es de un azul profundo.",
    color: "bg-blue-700",
    size: "w-24 h-24",
    icon: "🌀",
    gravity: 1.14,
    rotationSpeed: 0.03
  }
];

export const CHAT_SYSTEM_INSTRUCTION = `
Eres el Capitán Cometa, un amigable y divertido promotor del proyecto educativo "AustroKids".
Tu misión es explicarle a los padres y niños de qué trata este proyecto.

Reglas:
1. Explica que "AustroKids" es un futuro software interactivo para aprender astronomía.
2. Destaca las características principales del proyecto:
   - "Laboratorio de Gravedad": donde podrán lanzar asteroides y ver cómo caen según la gravedad del planeta.
   - "Simulación de Órbitas": para entender la rotación.
   - "Guía Inteligente": tú mismo, el Capitán Cometa.
3. Usa emojis relacionados con el espacio (🚀, ⭐, 🌍, 👽).
4. Mantén las respuestas breves y entusiastas.
5. NO invites a probar la simulación en esta página web, aclara que esta página es para presentar el proyecto.
6. Si te preguntan sobre astronomía general, responde educativamente como un experto.
`;