export const COLORES_MATERIA = {
  M1: '#2563EB',
  M2: '#7C3AED',
  QUIMICA: '#059669',
  FISICA: '#DC2626',
  BIOLOGIA: '#D97706'
};

export const ICONOS_MATERIA = {
  M1: '📐',
  M2: '∫',
  QUIMICA: '⚗️',
  FISICA: '⚡',
  BIOLOGIA: '🧬'
};

export function getColorMateria(materia) {
  return COLORES_MATERIA[materia] || '#64748b';
}

export function getIconoMateria(materia) {
  return ICONOS_MATERIA[materia] || '📚';
}