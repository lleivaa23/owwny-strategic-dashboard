// API Configuration
const API_CONFIG = {
  baseURL: 'http://localhost:3001',
  endpoints: {
    dashboard: '/api/dashboard',
    metrics: '/api/metrics',
    vrio: '/api/vrio',
    porter: '/api/porter',
    roadmap: '/api/roadmap',
    trends: '/api/trends',
    kpis: '/api/kpis',
    recommendations: '/api/recommendations'
  }
};

function App() {
  const [activeSection, setActiveSection] = React.useState('executive');
  const [showHelp, setShowHelp] = React.useState({});

  const toggleHelp = (id) => setShowHelp(prev => ({ ...prev, [id]: !prev[id] }));

  const HelpTooltip = ({ id, content }) => (
    <div className="relative inline-block ml-2">
      <button onClick={() => toggleHelp(id)} className="w-4 h-4 bg-blue-500 text-white rounded-full text-xs">?</button>
      {showHelp[id] && (
        <div className="absolute z-10 w-72 p-3 bg-white border rounded-lg shadow-lg top-5 left-0">
          <p className="text-xs text-gray-600">{content}</p>
          <button onClick={() => toggleHelp(id)} className="mt-1 text-xs text-blue-500">Cerrar</button>
        </div>
      )}
    </div>
  );

  const sections = [
    { id: 'executive', name: 'Resumen', icon: '📊' },
    { id: 'vrio', name: 'VRIO', icon: '💎' },
    { id: 'porter', name: 'Porter', icon: '⚔️' },
    { id: 'roadmap', name: 'Roadmap', icon: '🛣️' },
    { id: 'trends', name: 'Tendencias', icon: '🚀' },
    { id: 'kpis', name: 'KPIs', icon: '📈' },
    { id: 'recommendations', name: 'Acciones', icon: '💡' }
  ];

  const ExecutiveSection = () => (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-3 flex items-center">
          📊 Resumen Ejecutivo
          <HelpTooltip id="exec" content="Posición estratégica de Owwny en PropTech LATAM con fortalezas, oportunidades y desafíos clave" />
        </h2>
        <div className="grid md:grid-cols-3 gap-3 text-sm">
          <div className="bg-white/10 p-3 rounded">
            <div className="font-semibold">🎯 Posición</div>
            <div>Líder PropTech LATAM con finanzas embebidas</div>
          </div>
          <div className="bg-white/10 p-3 rounded">
            <div className="font-semibold">💰 Mercado</div>
            <div>$2.8B, crecimiento 25% anual</div>
          </div>
          <div className="bg-white/10 p-3 rounded">
            <div className="font-semibold">🚀 Ventaja</div>
            <div>Ecosistema integrado + datos únicos</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2 flex items-center">
            ✅ Fortalezas
            <HelpTooltip id="strengths" content="Capacidades únicas que posicionan a Owwny por encima de la competencia" />
          </h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>🏗️ Plataforma integral desarrolladores</li>
            <li>💳 Finanzas embebidas únicas</li>
            <li>📊 Datos propietarios sector</li>
            <li>🌎 Presencia LATAM establecida</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
            ⚠️ Desafíos
            <HelpTooltip id="challenges" content="Áreas que requieren atención para mantener posición competitiva" />
          </h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>🏦 Competencia fintechs tradicionales</li>
            <li>📋 Regulaciones en evolución</li>
            <li>⚡ Escalabilidad tecnológica</li>
            <li>🎯 Diversificación productos</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const VRIOSection = () => {
    const vrioData = [
      { resource: "Plataforma Integrada", icon: "🏗️", v: true, r: true, i: false, o: true, result: "Ventaja Temporal", desc: "Integra gestión + finanzas + analytics" },
      { resource: "Finanzas Embebidas", icon: "💳", v: true, r: true, i: true, o: true, result: "Ventaja Sostenible", desc: "Servicios financieros especializados PropTech" },
      { resource: "Base de Datos", icon: "📊", v: true, r: true, i: true, o: false, result: "Infrautilizado", desc: "Datos únicos sector inmobiliario" },
      { resource: "Red Desarrolladores", icon: "🤝", v: true, r: false, i: false, o: true, result: "Paridad", desc: "Relaciones establecidas LATAM" }
    ];

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center text-gray-800">
          💎 Análisis VRIO
          <HelpTooltip id="vrio" content="Evalúa recursos en 4 dimensiones: Valioso, Raro, Inimitable, Organizado para determinar ventaja competitiva" />
        </h2>
        
        <div className="grid gap-3">
          {vrioData.map((item, i) => (
            <div key={i} className="border p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.resource}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {['V', 'R', 'I', 'O'].map((letter, idx) => {
                    const values = [item.v, item.r, item.i, item.o];
                    return (
                      <div key={idx} className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${values[idx] ? 'bg-green-500' : 'bg-red-500'}`}>
                        {values[idx] ? '✓' : '✗'}
                      </div>
                    );
                  })}
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  item.result.includes('Sostenible') ? 'bg-green-100 text-green-800' :
                  item.result.includes('Temporal') ? 'bg-yellow-100 text-yellow-800' :
                  item.result.includes('Infrautilizado') ? 'bg-orange-100 text-orange-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {item.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const PorterSection = () => {
    const forces = [
      { name: "Rivalidad", icon: "🥊", intensity: "ALTA", score: 4, color: "red", desc: "Múltiples players, guerra precios" },
      { name: "Nuevos Entrantes", icon: "🚪", intensity: "MEDIA-ALTA", score: 3.5, color: "orange", desc: "Barreras regulatorias vs facilidad tech" },
      { name: "Poder Compradores", icon: "🏢", intensity: "MEDIA", score: 3, color: "yellow", desc: "Desarrolladores grandes con poder" },
      { name: "Poder Proveedores", icon: "🔧", intensity: "BAJA", score: 2, color: "green", desc: "Múltiples opciones tecnológicas" },
      { name: "Sustitutos", icon: "🔄", intensity: "MEDIA-ALTA", score: 3.5, color: "orange", desc: "Métodos tradicionales + fintechs" }
    ];

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center text-gray-800">
          ⚔️ Cinco Fuerzas Porter
          <HelpTooltip id="porter" content="Evalúa intensidad competitiva mediante 5 fuerzas: rivalidad, nuevos entrantes, poder proveedores/compradores, sustitutos" />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {forces.map((force, i) => (
            <div key={i} className="border p-3 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">{force.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{force.name}</h3>
                  <p className="text-xs text-gray-600">{force.desc}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  force.color === 'red' ? 'bg-red-100 text-red-800' :
                  force.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                  force.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {force.intensity}
                </span>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full ${
                    force.color === 'red' ? 'bg-red-500' :
                    force.color === 'orange' ? 'bg-orange-500' :
                    force.color === 'yellow' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`} style={{ width: `${(force.score / 5) * 100}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">📊 Resumen: Atractivo MEDIO-ALTO</h3>
          <div className="text-sm text-gray-600">
            <p className="mb-2">Alta competencia compensada por barreras regulatorias y crecimiento del mercado.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">🎯 Diferenciación finanzas embebidas</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">🛡️ Construir barreras entrada</span>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">📊 Aprovechar datos únicos</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const RoadmapSection = () => {
    const phases = [
      { phase: "2025: Consolidación", icon: "🏗️", focus: "Optimización Plataforma", techs: ["Cloud Infrastructure", "Data Analytics", "API Management"], kpis: ["40% menos tiempo respuesta", "99.9% uptime"] },
      { phase: "2026-27: Inteligencia", icon: "🧠", focus: "IA y Machine Learning", techs: ["ML Models", "Predictive Analytics", "Automated Decisions"], kpis: ["25% menos default", "70% aprobaciones auto"] },
      { phase: "2028-29: Ecosistema", icon: "🌐", focus: "Plataforma Abierta", techs: ["Open APIs", "Marketplace", "IoT Integration"], kpis: ["50+ partners", "30% revenue marketplace"] },
      { phase: "2030+: Innovación", icon: "🚀", focus: "Tecnologías Emergentes", techs: ["Blockchain", "VR/AR", "Digital Twins"], kpis: ["2+ tech emergentes", "10% revenue nuevos"] }
    ];

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center text-gray-800">
          🛣️ Roadmap Tecnológico
          <HelpTooltip id="roadmap" content="Evolución tecnológica 5 años priorizando inversiones por impacto y madurez del mercado" />
        </h2>
        
        <div className="grid gap-3">
          {phases.map((phase, i) => (
            <div key={i} className="border p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">{phase.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold">{phase.phase}</h3>
                  <p className="text-sm text-gray-600">{phase.focus}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-medium mb-1">🔧 Tecnologías</div>
                  <div className="flex flex-wrap gap-1">
                    {phase.techs.map((tech, j) => (
                      <span key={j} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-1">📊 KPIs</div>
                  <div className="flex flex-wrap gap-1">
                    {phase.kpis.map((kpi, j) => (
                      <span key={j} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">{kpi}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const TrendsSection = () => {
    const trends = [
      { name: "IA Generativa", icon: "🤖", impact: "ALTO", time: "1-2 años", priority: "Alta", desc: "Automatización contratos, chatbots, análisis predictivo" },
      { name: "Blockchain/DeFi", icon: "⛓️", impact: "MEDIO", time: "3-5 años", priority: "Media", desc: "Contratos inteligentes, tokenización propiedades" },
      { name: "IoT Inmobiliario", icon: "🏠", impact: "ALTO", time: "2-3 años", priority: "Alta", desc: "Sensores ocupación, gestión energética, mantenimiento predictivo" }
    ];

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center text-gray-800">
          🚀 Tendencias Tecnológicas
          <HelpTooltip id="trends" content="Tecnologías emergentes para anticipar cambios, identificar oportunidades y mantener ventaja competitiva" />
        </h2>
        
        <div className="grid gap-3">
          {trends.map((trend, i) => (
            <div key={i} className="border p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{trend.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold">{trend.name}</h3>
                  <p className="text-sm text-gray-600">{trend.desc}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    trend.impact === 'ALTO' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {trend.impact}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{trend.time}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  trend.priority === 'Alta' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {trend.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 bg-purple-50 rounded-lg">
          <h3 className="font-semibold mb-2">🎯 Matriz Priorización</h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div>
              <div className="font-medium text-red-800">🚀 Alta Prioridad</div>
              <div className="text-gray-600">IA Generativa, IoT Inmobiliario</div>
            </div>
            <div>
              <div className="font-medium text-yellow-800">⏳ Media Prioridad</div>
              <div className="text-gray-600">Blockchain/DeFi, VR/AR</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const KPIsSection = () => {
    const kpiCategories = [
      {
        name: "Crecimiento", icon: "📊", color: "blue",
        metrics: [
          { name: "ARR", current: "$12.5M", target: "$25M", growth: "+85%" },
          { name: "Desarrolladores Activos", current: "450", target: "800", growth: "+78%" }
        ]
      },
      {
        name: "Eficiencia", icon: "⚙️", color: "green",
        metrics: [
          { name: "Tiempo Aprobación", current: "48h", target: "24h", growth: "-50%" },
          { name: "Automatización", current: "65%", target: "85%", growth: "+31%" }
        ]
      },
      {
        name: "Cliente", icon: "😊", color: "purple",
        metrics: [
          { name: "NPS", current: "42", target: "60", growth: "+43%" },
          { name: "Retención", current: "88%", target: "92%", growth: "+5%" }
        ]
      }
    ];

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center text-gray-800">
          📈 KPIs Estratégicos
          <HelpTooltip id="kpis" content="Indicadores clave para medir progreso hacia objetivos, identificar mejoras y optimizar rendimiento" />
        </h2>
        
        <div className="grid gap-3">
          {kpiCategories.map((cat, i) => (
            <div key={i} className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-3 flex items-center">
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-3">
                {cat.metrics.map((metric, j) => (
                  <div key={j} className="p-3 bg-gray-50 rounded">
                    <div className="font-medium mb-2">{metric.name}</div>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Actual</div>
                        <div className="font-bold">{metric.current}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Objetivo</div>
                        <div className="font-bold text-blue-600">{metric.target}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500">Crecimiento</div>
                        <div className="font-bold text-green-600">{metric.growth}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const RecommendationsSection = () => {
    const recommendations = [
      {
        title: "Fortalecer Finanzas Embebidas", icon: "💳", priority: "ALTA", time: "3-6 meses",
        desc: "Expandir servicios financieros integrados", 
        actions: ["Nuevos productos financieros", "Mejorar scoring crediticio", "APIs robustas"],
        kpis: ["40% más revenue finanzas", "25% menos churn"]
      },
      {
        title: "Analytics Predictivos", icon: "🔮", priority: "ALTA", time: "6-12 meses",
        desc: "Aprovechar datos para análisis predictivo",
        actions: ["Equipo data science", "Infraestructura ML", "Modelos predictivos"],
        kpis: ["3 productos analytics", "$2M revenue adicional"]
      },
      {
        title: "Ecosistema Partners", icon: "🤝", priority: "MEDIA", time: "12-18 meses",
        desc: "Crear marketplace y programa partners",
        actions: ["APIs abiertas", "Certificación partners", "Revenue sharing"],
        kpis: ["50+ partners", "20% revenue marketplace"]
      }
    ];

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold flex items-center text-gray-800">
          💡 Recomendaciones Estratégicas
          <HelpTooltip id="recs" content="Acciones priorizadas por impacto y factibilidad. Implementar alta prioridad primero" />
        </h2>
        
        <div className="grid gap-3">
          {recommendations.map((rec, i) => (
            <div key={i} className="border p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">{rec.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <h3 className="font-semibold mr-2">{rec.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      rec.priority === 'ALTA' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {rec.priority}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs ml-2">{rec.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">{rec.desc}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="font-medium mb-1">🎯 Acciones</div>
                  <ul className="text-gray-600 space-y-1">
                    {rec.actions.map((action, j) => (
                      <li key={j} className="flex items-start">
                        <span className="mr-1">•</span>{action}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-medium mb-1">📊 KPIs</div>
                  <div className="flex flex-wrap gap-1">
                    {rec.kpis.map((kpi, j) => (
                      <span key={j} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">{kpi}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'executive': return <ExecutiveSection />;
      case 'vrio': return <VRIOSection />;
      case 'porter': return <PorterSection />;
      case 'roadmap': return <RoadmapSection />;
      case 'trends': return <TrendsSection />;
      case 'kpis': return <KPIsSection />;
      case 'recommendations': return <RecommendationsSection />;
      default: return <ExecutiveSection />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-lg font-bold text-gray-800">Owwny Strategic Dashboard</h1>
        </div>
        <nav className="p-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left p-3 rounded-lg mb-1 flex items-center transition-colors ${
                activeSection === section.id 
                  ? 'bg-blue-100 text-blue-800 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3">{section.icon}</span>
              {section.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}