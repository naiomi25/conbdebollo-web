

export const tamaños = [
    { id: "15", nombre: "15 cm (aprox. 8-10 raciones)" },
    { id: "18", nombre: "18 cm (aprox. 12-15 raciones)" },
    { id: "22", nombre: "22 cm (aprox. 20-25 raciones)" },
    { id: "no-se", nombre: "Aún no lo sé" }
];

export const bizcochos = ["Vainilla", "Chocolate", "Red Velvet", "Oreo", "Zanahoria", "Aún no lo sé"];

export const rellenos = [
    "Choco Blanco", "Choco Negro", "Crema Queso", "Dinosaurio",
    "Kinder Bueno", "Kit Kat", "Lotus", "Merengue Suizo",
    "Nata", "Nutella", "Oreo", "Pantera Rosa",
    "Pistacho", "Raffaello", "Trufa", "Aún no lo sé"
];

// Lógica de exclusión para coberturas
const coberturasExcluidas = ["Dinosaurio", "Kit Kat", "Oreo", "Pantera Rosa", "Raffaello"];
export const coberturas = [...rellenos.filter(sabor => !coberturasExcluidas.includes(sabor))];

