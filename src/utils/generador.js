import { PREGUNTAS_OFICIALES } from '../data/preguntasOfficiales';
import { estadisticas } from './estadisticas';

export async function generarPreguntasEnsayo({ materias, cantidad, usedIds = [] }) {
  const preguntas = [];
  const idsPreguntasUsadas = new Set(usedIds);

  for (const materia of materias) {
    const preguntasMateria = PREGUNTAS_OFICIALES[materia] || [];
    for (const preg of preguntasMateria) {
      if (!idsPreguntasUsadas.has(preg.id) && preguntas.length < cantidad) {
        preguntas.push({ ...preg, materia });
        idsPreguntasUsadas.add(preg.id);
      }
    }
  }

  estadisticas.registrarPreguntasUsadas(Array.from(idsPreguntasUsadas));
  return preguntas.sort(() => Math.random() - 0.5).slice(0, cantidad);
}

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