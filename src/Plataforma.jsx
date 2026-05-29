import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, Heart, BookOpen, Droplet, Dumbbell, ChevronLeft, ChevronRight, Search, Home, Settings, LogOut } from 'lucide-react'

function Plataforma() {
  const [selectedCategory, setSelectedCategory] = useState('todas')
  const [searchTerm, setSearchTerm] = useState('')

  // Dados das aulas de massagem
  const massagemVideos = [
    {
      id: 1,
      title: "Drenagem Linfática Manual - Pernas",
      duration: "15 min",
      thumbnail: "/assets/MassagemNasPernas.jpeg",
      description: "Aprenda a técnica de drenagem linfática para reduzir o inchaço nas pernas",
      level: "Iniciante"
    },
    {
      id: 2,
      title: "Automassagem para Braços",
      duration: "10 min",
      thumbnail: "/assets/MassagemNosBraços.jpeg",
      description: "Técnica simples para aliviar a dor e inchaço nos braços",
      level: "Iniciante"
    },
    {
      id: 3,
      title: "Massagem com Óleo Essencial",
      duration: "20 min",
      thumbnail: "/assets/MassagemComOleos.jpeg",
      description: "Combine massagem com óleos anti-inflamatórios naturais",
      level: "Intermediário"
    },
    {
      id: 4,
      title: "Protocolo Avançado de Drenagem",
      duration: "25 min",
      thumbnail: "/assets/MassagemDenagem.jpeg",
      description: "Técnicas avançadas para casos mais severos de lipedema",
      level: "Avançado"
    }
  ]

  // Dados das receitas anti-inflamatórias
  const receitas = [
    {
      id: 5,
      title: "Suco Verde Detox",
      thumbnail: "/assets/SucoVerdeDetox.jpeg",
      time: "5 min",
      ingredients: ["Couve", "Limão", "Gengibre", "Hortelã"],
      benefits: "Desintoxica e reduz inflamação"
    },
    {
      id: 6,
      title: "Chá de Cúrcuma com Pimenta",
      thumbnail: "/assets/ChaDeCurcumaComPimenta.jpeg",
      time: "10 min",
      ingredients: ["Cúrcuma", "Pimenta caiena", "Mel", "Leite de coco"],
      benefits: "Potente anti-inflamatório natural"
    },
    {
      id: 7,
      title: "Smoothie de Frutas Vermelhas",
      thumbnail: "/assets/SmoothieDeFrutasVermelhas.jpeg",
      time: "5 min",
      ingredients: ["Morangos", "Mirtilos", "Romã", "Iogurte grego"],
      benefits: "Rico em antioxidantes"
    },
    {
      id: 8,
      title: "Salada de Sementes",
      thumbnail: "/assets/SaladaDeSementes.jpeg",
      time: "10 min",
      ingredients: ["Linhaça", "Chia", "Abacate", "Espinafre"],
      benefits: "Ômega-3 e fibras"
    }
  ]

  // Dados dos cremes caseiros
  const cremes = [
    {
      id: 9,
      title: "Óleo de Arnica",
      thumbnail: "/assets/OleodeArnica.jpeg",
      difficulty: "Fácil",
      ingredients: ["Óleo de arnica", "Óleo de coco", "Vitamina E"],
      usage: "Aplicar antes da massagem"
    },
    {
      id: 10,
      title: "Creme de Gengibre",
      thumbnail: "/assets/CremedeArnica.jpeg",
      difficulty: "Média",
      ingredients: ["Gengibre fresco", "Manteiga de karité", "Óleo essencial de lavanda"],
      usage: "Para áreas doloridas"
    },
    {
      id: 11,
      title: "Gel de Babosa",
      thumbnail: "/assets/Geldebabosa.jpeg",
      difficulty: "Fácil",
      ingredients: ["Babosa fresca", "Óleo de amêndoas", "Mel"],
      usage: "Pós-massagem para hidratar"
    },
    {
      id: 12,
      title: "Mistura de Óleos Essenciais",
      thumbnail: "/assets/MisturaDeOleosEssenciais.jpeg",
      difficulty: "Fácil",
      ingredients: ["Lavanda", "Hortelã-pimenta", "Eucalipto", "Óleo transportador"],
      usage: "Diluir e aplicar suavemente"
    }
  ]

  // Dados dos exercícios
  const exercicios = [
    {
      id: 13,
      title: "Alongamento de Pernas",
      duration: "10 min",
      thumbnail: "/assets/AlongamentodasPernas.jpeg",
      level: "Iniciante",
      description: "Alongamentos suaves para melhorar circulação"
    },
    {
      id: 14,
      title: "Exercícios na Água",
      duration: "20 min",
      thumbnail: "/assets/ExerciciosnaAgua.jpeg",
      level: "Todos os níveis",
      description: "Hidroginástica adaptada para lipedema"
    },
    {
      id: 15,
      title: "Yoga Adaptado",
      duration: "15 min",
      thumbnail: "/assets/yougaAdaptado.jpeg",
      level: "Iniciante",
      description: "Posturas suaves para aliviar tensão"
    },
    {
      id: 16,
      title: "Pilates para Lipedema",
      duration: "25 min",
      thumbnail: "/assets/PilatesParaLipedema.jpeg",
      level: "Intermediário",
      description: "Fortalecimento sem impacto nas articulações"
    }
  ]

  const categories = [
    { id: 'todas', name: 'Todas', icon: Home },
    { id: 'massagem', name: 'Massagem', icon: Heart },
    { id: 'receitas', name: 'Receitas', icon: BookOpen },
    { id: 'cremes', name: 'Cremes', icon: Droplet },
    { id: 'exercicios', name: 'Exercícios', icon: Dumbbell }
  ]

  const Carousel = ({ title, items, type }) => {
    const [scrollPosition, setScrollPosition] = useState(0)

    const scroll = (direction) => {
      const container = document.getElementById(`carousel-${title.replace(/\s/g, '-')}`)
      const scrollAmount = 400
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }

    return (
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div
            id={`carousel-${title.replace(/\s/g, '-')}`}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          >
            {items.map((item) => (
              <Link
                key={item.id}
                to={`/plataforma/video/${item.id}`}
                className="flex-shrink-0 w-72 bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="relative h-40">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  {type === 'video' && (
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {item.duration}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold mb-2 line-clamp-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-400 text-sm mb-2 line-clamp-2">{item.description}</p>
                  )}
                  {item.level && (
                    <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded-full">
                      {item.level}
                    </span>
                  )}
                  {item.time && (
                    <span className="text-xs text-gray-400 ml-2">
                      ⏱️ {item.time}
                    </span>
                  )}
                  {item.difficulty && (
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                      {item.difficulty}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Heart className="w-8 h-8 text-primary-500" />
                <span className="text-xl font-bold text-white">LipedemaCare</span>
              </div>
              <nav className="hidden md:flex gap-6">
                {categories.map((cat) => {
                  const Icon = cat.icon
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-primary-500'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {cat.name}
                    </button>
                  )
                })}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-800 text-white pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 w-48"
                />
              </div>
              <button className="text-gray-300 hover:text-white">
                <Settings className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-black/80">
          <img
            src="/assets/hero-plataforma.png"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Bem-vinda à Plataforma LipedemaCare
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Acesso exclusivo a aulas, receitas e técnicas personalizadas para gerenciar o lipedema
            </p>
            <div className="flex gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors">
                <Play className="w-5 h-5" />
                Começar Agora
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors">
                <BookOpen className="w-5 h-5" />
                Ver Conteúdo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedCategory === 'todas' || selectedCategory === 'massagem' ? (
          <Carousel title="Aulas de Massagem" items={massagemVideos} type="video" />
        ) : null}
        
        {selectedCategory === 'todas' || selectedCategory === 'receitas' ? (
          <Carousel title="Receitas Anti-inflamatórias" items={receitas} type="recipe" />
        ) : null}
        
        {selectedCategory === 'todas' || selectedCategory === 'cremes' ? (
          <Carousel title="Cremes Caseiros" items={cremes} type="cream" />
        ) : null}
        
        {selectedCategory === 'todas' || selectedCategory === 'exercicios' ? (
          <Carousel title="Exercícios para Lipedema" items={exercicios} type="video" />
        ) : null}
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 LipedemaCare. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default Plataforma
