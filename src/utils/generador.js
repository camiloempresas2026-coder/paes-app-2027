import { PREGUNTAS_OFICIALES } from '../data/preguntasOfficiales';
import { estadisticas } from './estadisticas';

// Preguntas adicionales (fallback si no hay suficientes)
const PREGUNTAS_FALLBACK = {
  M1_NUM: [
    { id: "M1_NUM_006", eje: "Números", tema: "Porcentajes y variaciones", dificultad: "difícil", enunciado: "El precio de un producto aumenta de $80 a $100. ¿Cuál es el porcentaje de aumento?", alternativas: ["A) 20%", "B) 25%", "C) 30%", "D) 15%"], correcta: 1, explicacion: "Aumento = (100-80)/80 × 100 = 20/80 × 100 = 25%", fuente: "DEMRE" },
    { id: "M1_NUM_007", eje: "Números", tema: "Números reales y subconjuntos", dificultad: "difícil", enunciado: "¿Cuál es el valor de √(16 + 9)?", alternativas: ["A) 5", "B) 4", "C) 7", "D) 3"], correcta: 0, explicacion: "√(16 + 9) = √25 = 5", fuente: "DEMRE" }
  ]
};

// Generar preguntas para ensayo
export async function generarPreguntasEnsayo({ materias, cantidad, usedIds = [] }) {
  const preguntas = [];
  const idsPreguntasUsadas = new Set(usedIds);

  // Primero: usar preguntas oficiales PAES
  for (const materia of materias) {
    const preguntasMateria = PREGUNTAS_OFICIALES[materia] || [];
    for (const preg of preguntasMateria) {
      if (!idsPreguntasUsadas.has(preg.id) && preguntas.length < cantidad) {
        preguntas.push({ ...preg, materia });
        idsPreguntasUsadas.add(preg.id);
      }
    }
  }

  // Si faltan preguntas, agregar fallback
  if (preguntas.length < cantidad) {
    for (const clave in PREGUNTAS_FALLBACK) {
      if (preguntas.length >= cantidad) break;
      PREGUNTAS_FALLBACK[clave].forEach(preg => {
        if (!idsPreguntasUsadas.has(preg.id) && preguntas.length < cantidad) {
          preguntas.push(preg);
          idsPreguntasUsadas.add(preg.id);
        }
      });
    }
  }

  // Registrar IDs usados
  estadisticas.registrarPreguntasUsadas(Array.from(idsPreguntasUsadas));

  // Mezclar aleatoriamente
  return preguntas.sort(() => Math.random() - 0.5).slice(0, cantidad);
}

// Generar ensayo enfocado en ejes débiles
export async function generarEnsayoFocalizado({ ejesDebiles, cantidad = 20 }) {
  const preguntas = [];
  const idsPreguntasUsadas = new Set(estadisticas.obtenerIdsPreguntasUsadas());

  for (const { materia, eje } of ejesDebiles) {
    const preguntasMateria = PREGUNTAS_OFICIALES[materia] || [];
    const preguntasEje = preguntasMateria.filter(p => p.eje === eje && !idsPreguntasUsadas.has(p.id));

    const cantidadPorEje = Math.ceil(cantidad / Math.max(ejesDebiles.length, 1));
    preguntasEje.slice(0, cantidadPorEje).forEach(preg => {
      if (preguntas.length < cantidad) {
        preguntas.push({ ...preg, materia });
        idsPreguntasUsadas.add(preg.id);
      }
    });
  }

  estadisticas.registrarPreguntasUsadas(Array.from(idsPreguntasUsadas));
  return preguntas.slice(0, cantidad).sort(() => Math.random() - 0.5);
}
