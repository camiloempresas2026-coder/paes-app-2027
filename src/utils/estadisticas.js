export class EstadisticasManager {
  constructor() {
    this.ensayosHistorico = JSON.parse(localStorage.getItem('paes_ensayos_historico')) || [];
    this.idsPreguntasUsadas = JSON.parse(localStorage.getItem('paes_ids_preguntas_usadas')) || [];
  }

  guardarEnsayo(ensayoCompleto) {
    const ensayo = {
      id: Date.now(),
      fecha: new Date().toLocaleDateString('es-CL'),
      materias: ensayoCompleto.materias,
      totalPreguntas: ensayoCompleto.preguntas.length,
      correctas: ensayoCompleto.totalCorrectas,
      porcentaje: ensayoCompleto.porcentaje,
      tiempoUsado: ensayoCompleto.tiempoUsado,
      puntajeEstimado: this.estimarPuntajePAES(ensayoCompleto.porcentaje),
      ejeStats: ensayoCompleto.ejeStats,
      ejesDebiles: ensayoCompleto.ejesDebiles
    };

    this.ensayosHistorico.push(ensayo);
    localStorage.setItem('paes_ensayos_historico', JSON.stringify(this.ensayosHistorico));
    return ensayo;
  }

  estimarPuntajePAES(porcentaje) {
    const puntajeBase = 150;
    const puntajeMax = 1000;
    const rango = puntajeMax - puntajeBase;
    return Math.round(puntajeBase + (porcentaje / 100) * rango);
  }

  obtenerProgreso() {
    if (this.ensayosHistorico.length === 0) return null;
    const ultimos5 = this.ensayosHistorico.slice(-5);
    const promedio = ultimos5.reduce((a, b) => a + b.porcentaje, 0) / ultimos5.length;
    const tendencia = ultimos5.length >= 2 ? ultimos5[ultimos5.length - 1].porcentaje - ultimos5[0].porcentaje : 0;
    return {
      totalEnsayos: this.ensayosHistorico.length,
      ultimos5,
      promediaUltimos5: Math.round(promedio),
      mejorPuntaje: Math.max(...this.ensayosHistorico.map(e => e.puntajeEstimado)),
      peorPuntaje: Math.min(...this.ensayosHistorico.map(e => e.puntajeEstimado)),
      tendencia,
      ultimaFecha: this.ensayosHistorico[this.ensayosHistorico.length - 1]?.fecha
    };
  }

  detectarEjesDebiles(porcentajeMinimo = 65) {
    if (this.ensayosHistorico.length === 0) return [];
    const ejeStats = {};
    this.ensayosHistorico.forEach(ensayo => {
      ensayo.ejeStats?.forEach(stat => {
        const key = `${stat.materia}::${stat.eje}`;
        if (!ejeStats[key]) {
          ejeStats[key] = { materia: stat.materia, eje: stat.eje, totalCorrectas: 0, totalPreguntas: 0 };
        }
        ejeStats[key].totalCorrectas += stat.correctas;
        ejeStats[key].totalPreguntas += stat.total;
      });
    });
    return Object.values(ejeStats)
      .filter(e => (e.totalCorrectas / e.totalPreguntas) * 100 < porcentajeMinimo)
      .map(e => ({ ...e, porcentaje: Math.round((e.totalCorrectas / e.totalPreguntas) * 100) }))
      .sort((a, b) => a.porcentaje - b.porcentaje)
      .slice(0, 6);
  }

  registrarPreguntasUsadas(ids) {
    this.idsPreguntasUsadas = [...new Set([...this.idsPreguntasUsadas, ...ids])];
    localStorage.setItem('paes_ids_preguntas_usadas', JSON.stringify(this.idsPreguntasUsadas));
  }

  obtenerIdsPreguntasUsadas() {
    return this.idsPreguntasUsadas;
  }

  obtenerTodosEnsayos() {
    return this.ensayosHistorico;
  }

  limpiarHistorico() {
    localStorage.removeItem('paes_ensayos_historico');
    localStorage.removeItem('paes_ids_preguntas_usadas');
    this.ensayosHistorico = [];
    this.idsPreguntasUsadas = [];
  }
}

export const estadisticas = new EstadisticasManager();