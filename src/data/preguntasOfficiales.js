export const PREGUNTAS_OFICIALES = {
  M1: [
    { id: 'M1_NUM_001', eje: 'Números', tema: 'Porcentajes y variaciones', dificultad: 'medio', enunciado: 'Un producto cuesta $50.000 y tiene un descuento del 20%. ¿Cuál es el precio final?', alternativas: ['A) $40.000', 'B) $10.000', 'C) $30.000', 'D) $35.000'], correcta: 0, explicacion: 'Descuento = 50.000 × 0.20 = 10.000. Precio final = 50.000 - 10.000 = $40.000', fuente: 'DEMRE 2024' },
    { id: 'M1_NUM_002', eje: 'Números', tema: 'Potencias y raíces', dificultad: 'medio', enunciado: '¿Cuál es el valor de (2³ × 2²) ÷ 2⁴?', alternativas: ['A) 2', 'B) 4', 'C) 8', 'D) 16'], correcta: 0, explicacion: '(2³ × 2²) ÷ 2⁴ = 2⁵ ÷ 2⁴ = 2¹ = 2', fuente: 'DEMRE 2024' },
    { id: 'M1_NUM_003', eje: 'Números', tema: 'Notación científica', dificultad: 'difícil', enunciado: 'La distancia del sol a la tierra es aproximadamente 150.000.000 km. ¿Cuál es esta distancia en notación científica?', alternativas: ['A) 1.5 × 10⁷', 'B) 1.5 × 10⁸', 'C) 15 × 10⁷', 'D) 0.15 × 10⁹'], correcta: 1, explicacion: '150.000.000 = 1.5 × 10⁸ (movemos el punto 8 lugares a la izquierda)', fuente: 'DEMRE 2024' },
    { id: 'M1_NUM_004', eje: 'Números', tema: 'Proporcionalidad directa e inversa', dificultad: 'medio', enunciado: 'Si 3 trabajadores construyen una casa en 60 días, ¿cuántos días tardará 5 trabajadores en construir una casa similar?', alternativas: ['A) 36 días', 'B) 100 días', 'C) 30 días', 'D) 45 días'], correcta: 0, explicacion: 'Proporcionalidad inversa: 3 × 60 = 5 × x → x = 180/5 = 36 días', fuente: 'DEMRE 2024' },
    { id: 'M1_ALG_001', eje: 'Álgebra y Funciones', tema: 'Ecuaciones e inecuaciones de 1° y 2° grado', dificultad: 'medio', enunciado: '¿Cuál es la solución de la ecuación 2x + 5 = 13?', alternativas: ['A) x = 4', 'B) x = 6', 'C) x = 9', 'D) x = 3'], correcta: 0, explicacion: '2x + 5 = 13 → 2x = 8 → x = 4', fuente: 'DEMRE 2024' },
    { id: 'M1_ALG_002', eje: 'Álgebra y Funciones', tema: 'Función lineal y cuadrática', dificultad: 'difícil', enunciado: 'La función f(x) = x² - 4x + 3 representa una parábola. ¿Cuál es el vértice de esta parábola?', alternativas: ['A) (2, -1)', 'B) (2, -3)', 'C) (-2, 7)', 'D) (1, 0)'], correcta: 0, explicacion: 'x = -b/2a = 4/2 = 2. f(2) = 4 - 8 + 3 = -1. Vértice: (2, -1)', fuente: 'DEMRE 2024' },
    { id: 'M1_GEO_001', eje: 'Geometría', tema: 'Triángulos: propiedades y congruencia', dificultad: 'medio', enunciado: 'Un triángulo tiene ángulos de 60°, 60° y 60°. ¿Qué tipo de triángulo es?', alternativas: ['A) Isósceles', 'B) Equilátero', 'C) Escaleno', 'D) Rectángulo'], correcta: 1, explicacion: 'Todos los ángulos son iguales (60°), por lo tanto todos los lados son iguales. Es equilátero.', fuente: 'DEMRE 2024' },
    { id: 'M1_GEO_002', eje: 'Geometría', tema: 'Teorema de Pitágoras', dificultad: 'medio', enunciado: 'Un triángulo rectángulo tiene catetos de 3 y 4 cm. ¿Cuál es la hipotenusa?', alternativas: ['A) 5 cm', 'B) 6 cm', 'C) 7 cm', 'D) 8 cm'], correcta: 0, explicacion: 'c² = 3² + 4² = 9 + 16 = 25 → c = 5 cm', fuente: 'DEMRE 2024' },
    { id: 'M1_PRB_001', eje: 'Probabilidad y Estadística', tema: 'Medidas de tendencia central', dificultad: 'medio', enunciado: '¿Cuál es la media de los números: 2, 4, 6, 8?', alternativas: ['A) 4', 'B) 5', 'C) 6', 'D) 7'], correcta: 1, explicacion: 'Media = (2 + 4 + 6 + 8) / 4 = 20 / 4 = 5', fuente: 'DEMRE 2024' }
  ],
  M2: [
    { id: 'M2_COM_001', eje: 'Álgebra', tema: 'Números complejos', dificultad: 'difícil', enunciado: '¿Cuál es el resultado de (2 + 3i)(1 - i)?', alternativas: ['A) 5 + i', 'B) 5 - i', 'C) 2 - 3i', 'D) 2 + 3i'], correcta: 0, explicacion: '(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i² = 2 + i + 3 = 5 + i', fuente: 'DEMRE 2024' },
    { id: 'M2_GAN_001', eje: 'Geometría Analítica', tema: 'Rectas en el plano y posiciones relativas', dificultad: 'medio', enunciado: '¿Cuál es la pendiente de la recta que pasa por los puntos (1, 2) y (3, 6)?', alternativas: ['A) 2', 'B) 1', 'C) 3', 'D) 4'], correcta: 0, explicacion: 'm = (6 - 2) / (3 - 1) = 4 / 2 = 2', fuente: 'DEMRE 2024' },
    { id: 'M2_TRI_001', eje: 'Funciones Trigonométricas', tema: 'Sen, cos, tan: definición y gráficas', dificultad: 'medio', enunciado: '¿Cuál es el valor de sen(90°)?', alternativas: ['A) 0', 'B) 1', 'C) -1', 'D) √2/2'], correcta: 1, explicacion: 'sen(90°) = 1 (valor máximo de la función seno)', fuente: 'DEMRE 2024' }
  ],
  QUIMICA: [
    { id: 'QUI_EST_001', eje: 'Estructura de la Materia', tema: 'Modelo atómico (mecánica cuántica)', dificultad: 'medio', enunciado: '¿Cuál es el número de protones en un átomo de oxígeno (O)?', alternativas: ['A) 6', 'B) 7', 'C) 8', 'D) 16'], correcta: 2, explicacion: 'El número atómico del oxígeno es 8, lo que significa 8 protones', fuente: 'DEMRE 2024' },
    { id: 'QUI_EST_002', eje: 'Estructura de la Materia', tema: 'Tabla periódica y propiedades', dificultad: 'medio', enunciado: '¿Cuál elemento es más electronegativo?', alternativas: ['A) Sodio', 'B) Cloro', 'C) Azufre', 'D) Fósforo'], correcta: 1, explicacion: 'El cloro es el más electronegativo de estas opciones (electronegatividad aumenta hacia la derecha y arriba)', fuente: 'DEMRE 2024' },
    { id: 'QUI_RXN_001', eje: 'Reacciones Químicas', tema: 'Estequiometría', dificultad: 'difícil', enunciado: 'En la reacción: 2H₂ + O₂ → 2H₂O, ¿cuántos moles de H₂O se forman a partir de 4 moles de H₂?', alternativas: ['A) 2 moles', 'B) 4 moles', 'C) 8 moles', 'D) 6 moles'], correcta: 1, explicacion: 'Según la estequiometría: 2 mol H₂ produce 2 mol H₂O. Entonces 4 mol H₂ produce 4 mol H₂O', fuente: 'DEMRE 2024' },
    { id: 'QUI_SOL_001', eje: 'Soluciones', tema: 'Concentración: M, %m/m, %v/v', dificultad: 'medio', enunciado: '¿Cuál es la molaridad de una solución que contiene 58,5 g de NaCl en 1 litro de solución?', alternativas: ['A) 0,5 M', 'B) 1 M', 'C) 2 M', 'D) 5 M'], correcta: 1, explicacion: 'M = moles / L. Moles de NaCl = 58,5 / 58,5 = 1 mol. M = 1 / 1 = 1 M', fuente: 'DEMRE 2024' }
  ],
  FISICA: [
    { id: 'FIS_MEC_001', eje: 'Mecánica', tema: 'MRU y MRUA', dificultad: 'medio', enunciado: 'Un auto viaja a 100 km/h constantemente. ¿Cuánto tiempo tarda en recorrer 200 km?', alternativas: ['A) 1 hora', 'B) 2 horas', 'C) 3 horas', 'D) 4 horas'], correcta: 1, explicacion: 't = distancia / velocidad = 200 / 100 = 2 horas', fuente: 'DEMRE 2024' },
    { id: 'FIS_MEC_002', eje: 'Mecánica', tema: 'Leyes de Newton', dificultad: 'medio', enunciado: 'Una fuerza de 10 N actúa sobre una masa de 2 kg. ¿Cuál es la aceleración resultante?', alternativas: ['A) 2 m/s²', 'B) 5 m/s²', 'C) 10 m/s²', 'D) 20 m/s²'], correcta: 1, explicacion: 'F = ma → a = F / m = 10 / 2 = 5 m/s²', fuente: 'DEMRE 2024' },
    { id: 'FIS_TER_001', eje: 'Termodinámica', tema: 'Temperatura y calor', dificultad: 'medio', enunciado: '¿A cuántos grados Kelvin equivale 0°C?', alternativas: ['A) 273 K', 'B) 373 K', 'C) 173 K', 'D) 473 K'], correcta: 0, explicacion: 'K = °C + 273. 0 + 273 = 273 K', fuente: 'DEMRE 2024' },
    { id: 'FIS_OND_001', eje: 'Ondas y Óptica', tema: 'Movimiento ondulatorio', dificultad: 'medio', enunciado: '¿Cuál es la velocidad de una onda con frecuencia 50 Hz y longitud de onda 2 m?', alternativas: ['A) 50 m/s', 'B) 100 m/s', 'C) 25 m/s', 'D) 200 m/s'], correcta: 1, explicacion: 'v = f × λ = 50 × 2 = 100 m/s', fuente: 'DEMRE 2024' }
  ],
  BIOLOGIA: [
    { id: 'BIO_CEL_001', eje: 'Biología Celular', tema: 'Célula procariota y eucariota', dificultad: 'medio', enunciado: '¿Cuál es la principal diferencia entre una célula procariota y una eucariota?', alternativas: ['A) Las procariotas tienen núcleo', 'B) Las eucariotas tienen mitocondrias', 'C) Las procariotas carecen de membrana', 'D) Las eucariotas no tienen ADN'], correcta: 1, explicacion: 'Las eucariotas tienen mitocondrias (y otros organelos), mientras las procariotas no', fuente: 'DEMRE 2024' },
    { id: 'BIO_CEL_002', eje: 'Biología Celular', tema: 'Organelos', dificultad: 'medio', enunciado: '¿Cuál es la función principal de las mitocondrias?', alternativas: ['A) Fotosíntesis', 'B) Producción de energía (ATP)', 'C) Síntesis de proteínas', 'D) Almacenamiento de agua'], correcta: 1, explicacion: 'Las mitocondrias son responsables de la respiración celular y producción de ATP', fuente: 'DEMRE 2024' },
    { id: 'BIO_GEN_001', eje: 'Genética y Evolución', tema: 'Leyes de Mendel', dificultad: 'medio', enunciado: 'Si una planta heterocigota (Aa) se cruza consigo misma, ¿cuál es la probabilidad de que la descendencia sea homocigota dominante (AA)?', alternativas: ['A) 25%', 'B) 50%', 'C) 75%', 'D) 100%'], correcta: 0, explicacion: 'Aa × Aa → AA (25%), Aa (50%), aa (25%). Probabilidad de AA es 25%', fuente: 'DEMRE 2024' },
    { id: 'BIO_ECO_001', eje: 'Ecología', tema: 'Cadenas tróficas', dificultad: 'medio', enunciado: 'En una cadena trófica: productor → herbívoro → carnívoro, ¿dónde hay más energía?', alternativas: ['A) En el carnívoro', 'B) En el herbívoro', 'C) En el productor', 'D) La energía es igual en todos'], correcta: 2, explicacion: 'Los productores (plantas) capturan la mayor cantidad de energía solar. Decrece en cada nivel trófico', fuente: 'DEMRE 2024' }
  ]
};

export const ESTRUCTURA_PAES = {
  M1: {
    nombre: 'Matemática M1',
    totalPreguntas: 65,
    tiempoMinutos: 140,
    color: '#2563EB',
    icon: '📐',
    ejes: ['Números', 'Álgebra y Funciones', 'Geometría', 'Probabilidad y Estadística']
  },
  M2: {
    nombre: 'Matemática M2',
    totalPreguntas: 55,
    tiempoMinutos: 140,
    color: '#7C3AED',
    icon: '∫',
    ejes: ['Álgebra', 'Geometría Analítica', 'Funciones Trigonométricas', 'Geometría Espacial', 'Probabilidad y Conteo']
  },
  QUIMICA: {
    nombre: 'Química Mención + Común',
    totalPreguntas: 75,
    tiempoMinutos: 160,
    color: '#059669',
    icon: '⚗️',
    ejes: ['Estructura de la Materia', 'Reacciones Químicas', 'Soluciones', 'Termoquímica y Cinética', 'Química Orgánica']
  },
  FISICA: {
    nombre: 'Física Común',
    totalPreguntas: 75,
    tiempoMinutos: 160,
    color: '#DC2626',
    icon: '⚡',
    ejes: ['Mecánica', 'Termodinámica', 'Ondas y Óptica', 'Electricidad y Magnetismo', 'Cosmología']
  },
  BIOLOGIA: {
    nombre: 'Biología Común',
    totalPreguntas: 75,
    tiempoMinutos: 160,
    color: '#D97706',
    icon: '🧬',
    ejes: ['Biología Celular', 'Genética y Evolución', 'Funciones Biológicas', 'Ecología']
  }
};