import { useParams, Link } from 'react-router-dom'
import { Play, Heart, Clock, User, Star, ThumbsUp, MessageCircle, Share2, ChevronLeft, ChevronRight } from 'lucide-react'

function VideoPlayer() {
  const { id } = useParams()

  // Dados simulados baseados no ID
  const contentData = {
    massagem: [
      {
        id: 1,
        title: "Drenagem Linfática Manual - Pernas",
        duration: "15 min",
        thumbnail: "/assets/MassagemNasPernas.jpeg",
        description: "Neste vídeo, você aprenderá a técnica completa de drenagem linfática manual para as pernas. Esta massagem é essencial para reduzir o inchaço característico do lipedema e melhorar a circulação linfática. A técnica inclui movimentos suaves e rítmicos que seguem o trajeto dos vasos linfáticos, sempre de baixo para cima, em direção aos gânglios linfáticos.\n\n**O que você vai aprender:**\n- Posicionamento correto das mãos\n- Pressão ideal para cada área\n- Sequência de movimentos para as pernas\n- Cuidados e contraindicações\n\n**Materiais necessários:**\n- Óleo de massagem (preferencialmente com propriedades anti-inflamatórias)\n- Toalha limpa\n- Ambiente tranquilo e aquecido\n\n**Frequência recomendada:** 1-2 vezes ao dia, preferencialmente pela manhã e antes de dormir.",
        level: "Iniciante",
        category: "massagem",
        videoUrl: "/assets/videos/DrenagemLinfáticaManual-Pernas.mp4"
      },
      {
        id: 2,
        title: "Automassagem para Braços",
        duration: "10 min",
        thumbnail: "/assets/MassagemNosBraços.jpeg",
        description: "Aprenda a fazer automassagem nos braços para aliviar a dor e o inchaço. Esta técnica é perfeita para fazer em casa, no trabalho ou em qualquer lugar. Os movimentos são simples e podem ser adaptados conforme sua necessidade e disponibilidade de tempo.\n\n**Benefícios:**\n- Redução do inchaço nos braços\n- Alívio da dor e sensação de peso\n- Melhora da circulação\n- Relaxamento muscular\n\n**Quando fazer:**\n- Ao acordar\n- Antes de dormir\n- Após longos períodos com os braços para baixo\n- Quando sentir desconforto",
        level: "Iniciante",
        category: "massagem",
        videoUrl: "/assets/videos/AutomassagemparaBraços.mp4"
      },
      {
        id: 3,
        title: "Massagem com Óleo Essencial",
        duration: "20 min",
        thumbnail: "/assets/MassagemComOleos.jpeg",
        description: "Combine a massagem terapêutica com os poderosos benefícios dos óleos essenciais. Neste vídeo, você aprenderá a preparar e aplicar misturas de óleos que potencializam os efeitos anti-inflamatórios e relaxantes da massagem.\n\n**Óleos utilizados:**\n- Lavanda: relaxante e calmante\n- Hortelã-pimenta: refrescante e analgésico\n- Eucalipto: anti-inflamatório\n- Gengibre: estimulante da circulação\n\n**Preparação da mistura:**\n- 3-5 gotas de óleo essencial para cada 30ml de óleo transportador\n- Óleos transportadores recomendados: coco, amêndoas, jojoba\n\n**Cuidados importantes:**\n- Teste alergia antes de usar\n- Evite áreas sensíveis\n- Não use puro na pele",
        level: "Intermediário",
        category: "massagem",
        videoUrl: "/assets/videos/MassagemcomOleoEssencial.mp4"
      },
      {
        id: 4,
        title: "Protocolo Avançado de Drenagem",
        duration: "25 min",
        thumbnail: "/assets/MassagemDenagem.jpeg",
        description: "Para casos mais severos de lipedema, este protocolo avançado combina várias técnicas de drenagem linfática para maximizar os resultados. É recomendado para quem já tem experiência com a técnica básica e busca resultados mais intensivos.\n\n**Técnicas incluídas:**\n- Drenagem linfática manual completa\n- Pressão intermitente\n- Bombeamento linfático\n- Deslizamento profundo\n\n**Indicações:**\n- Lipedema em estágios mais avançados\n- Inchaço persistente\n- Após procedimentos cirúrgicos\n- Como complemento ao tratamento profissional\n\n**Contraindicações:**\n- Infecções ativas\n- Trombose venosa profunda\n- Câncer ativo\n- Insuficiência cardíaca descompensada",
        level: "Avançado",
        category: "massagem",
        videoUrl: "/assets/videos/ProtocoloAvançadodeDenagem.mp4"
      }
    ],
    receitas: [
      {
        id: 5,
        title: "Suco Verde Detox",
        thumbnail: "/assets/SucoVerdeDetox.jpeg",
        time: "5 min",
        description: "Este suco verde é poderoso para desintoxicar o organismo e reduzir a inflamação. Rico em clorofila, antioxidantes e fibras, ajuda a eliminar toxinas e melhora o funcionamento do sistema linfático.\n\n**Ingredientes:**\n- 2 folhas de couve\n- 1/2 limão (suco)\n- 1 pedaço pequeno de gengibre (2cm)\n- 5 folhas de hortelã\n- 200ml de água de coco\n- 1 maçã verde (opcional)\n\n**Modo de preparo:**\n1. Lave bem todos os ingredientes\n2. Bata tudo no liquidificador\n3. Coe se preferir\n4. Beba imediatamente\n\n**Dicas:**\n- Beba em jejum para melhor absorção\n- Varie os ingredientes conforme disponibilidade\n- Adicione mel se necessário para adoçar",
        ingredients: ["Couve", "Limão", "Gengibre", "Hortelã"],
        benefits: "Desintoxica e reduz inflamação",
        category: "receitas",
        videoUrl: "/assets/videos/SucoVerdeDetox.mp4"
      },
      {
        id: 6,
        title: "Chá de Cúrcuma com Pimenta",
        thumbnail: "/assets/ChaDeCurcumaComPimenta.jpeg",
        time: "10 min",
        description: "A cúrcuma (açafrão-da-terra) é um dos anti-inflamatórios naturais mais potentes. Combinada com pimenta caiena, que contém piperina, sua absorção aumenta em até 2000%. Este chá é excelente para reduzir a dor e o inchaço do lipedema.\n\n**Ingredientes:**\n- 1 colher de chá de cúrcuma em pó\n- 1 pitada de pimenta caiena\n- 1 colher de chá de mel\n- 200ml de leite de coco ou leite vegetal\n- Canela a gosto\n\n**Modo de preparo:**\n1. Aqueça o leite\n2. Adicione a cúrcuma e a pimenta\n3. Mexa bem por 2-3 minutos\n4. Adicione o mel e canela\n5. Sirva quente\n\n**Frequência:**\n- 1-2 xícaras por dia\n- Preferencialmente pela manhã e à noite",
        ingredients: ["Cúrcuma", "Pimenta caiena", "Mel", "Leite de coco"],
        benefits: "Potente anti-inflamatório natural",
        category: "receitas",
        videoUrl: "/assets/videos/ChádeCúrcumacomPimenta.mp4"
      },
      {
        id: 7,
        title: "Smoothie de Frutas Vermelhas",
        thumbnail: "/assets/SmoothieDeFrutasVermelhas.jpeg",
        time: "5 min",
        description: "As frutas vermelhas são ricas em antocianinas, poderosos antioxidantes que combatem a inflamação e protegem os vasos sanguíneos. Este smoothie é delicioso e nutritivo.\n\n**Ingredientes:**\n- 1 xícara de morangos\n- 1/2 xícara de mirtilos (blueberries)\n- 1/4 de xícara de romã\n- 200ml de iogurte grego\n- 1 colher de mel\n- Gelo a gosto\n\n**Modo de preparo:**\n1. Lave as frutas\n2. Bata tudo no liquidificador\n3. Adicione gelo se preferir mais cremoso\n4. Sirva imediatamente\n\n**Benefícios:**\n- Alto teor de antioxidantes\n- Proteção cardiovascular\n- Melhora da circulação\n- Baixo índice glicêmico",
        ingredients: ["Morangos", "Mirtilos", "Romã", "Iogurte grego"],
        benefits: "Rico em antioxidantes",
        category: "receitas",
        videoUrl: "/assets/videos/SmoothiedeFrutasVermelhas.mp4"
      },
      {
        id: 8,
        title: "Salada de Sementes",
        thumbnail: "/assets/SaladaDeSementes.jpeg",
        time: "10 min",
        description: "Esta salada é rica em ômega-3 e fibras, essenciais para reduzir a inflamação e melhorar o funcionamento do sistema linfático. As sementes também fornecem proteínas e gorduras saudáveis.\n\n**Ingredientes:**\n- 2 colheres de sopa de linhaça\n- 1 colher de sopa de chia\n- 1/2 abacate\n- 2 xícaras de espinafre\n- 1 colher de sopa de azeite\n- Limão a gosto\n- Sal marinho a gosto\n\n**Modo de preparo:**\n1. Deixe as sementes de molho por 10 minutos\n2. Lave o espinafre\n3. Corte o abacate em fatias\n4. Misture tudo\n5. Tempere com azeite, limão e sal\n\n**Dica:**\n- Use sementes trituradas para melhor absorção\n- Adicione nozes ou amêndoas se desejar",
        ingredients: ["Linhaça", "Chia", "Abacate", "Espinafre"],
        benefits: "Ômega-3 e fibras",
        category: "receitas",
        videoUrl: "/assets/videos/SaladadeSementes.mp4"
      }
    ],
    cremes: [
      {
        id: 9,
        title: "Óleo de Arnica",
        thumbnail: "/assets/OleodeArnica.jpeg",
        difficulty: "Fácil",
        description: "A arnica é conhecida por suas propriedades anti-inflamatórias e analgésicas. Este óleo caseiro é excelente para aliviar a dor e o inchaço, especialmente quando usado antes da massagem.\n\n**Ingredientes:**\n- 30ml de óleo de arnica\n- 30ml de óleo de coco\n- 5 gotas de vitamina E\n\n**Modo de preparo:**\n1. Misture os óleos em um frasco escuro\n2. Adicione a vitamina E\n3. Agite bem\n4. Deixe descansar por 24 horas\n\n**Como usar:**\n- Aplique antes da massagem\n- Massageie suavemente\n- Use 1-2 vezes ao dia\n\n**Cuidados:**\n- Não use em feridas abertas\n- Evite contato com os olhos\n- Teste antes de usar",
        ingredients: ["Óleo de arnica", "Óleo de coco", "Vitamina E"],
        usage: "Aplicar antes da massagem",
        category: "cremes",
        videoUrl: "/assets/videos/OleoDeArnica.mp4"
      },
      {
        id: 10,
        title: "Creme de Gengibre",
        thumbnail: "/assets/CremedeArnica.jpeg",
        difficulty: "Média",
        description: "O gengibre é um potente anti-inflamatório natural que aquece a área, melhorando a circulação. Este creme é ideal para áreas doloridas e com sensação de peso.\n\n**Ingredientes:**\n- 50g de gengibre fresco\n- 100g de manteiga de karité\n- 10 gotas de óleo essencial de lavanda\n\n**Modo de preparo:**\n1. Rale o gengibre\n2. Derreta a manteiga de karité\n3. Misture o gengibre\n4. Coe para remover pedaços\n5. Adicione o óleo essencial\n6. Deixe esfriar e solidificar\n\n**Como usar:**\n- Aplique em áreas doloridas\n- Massageie em movimentos circulares\n- Use à noite para melhor absorção",
        ingredients: ["Gengibre fresco", "Manteiga de karité", "Óleo essencial de lavanda"],
        usage: "Para áreas doloridas",
        category: "cremes",
        videoUrl: "/assets/videos/CremedeGengibre.mp4"
      },
      {
        id: 11,
        title: "Gel de Babosa",
        thumbnail: "/assets/Geldebabosa.jpeg",
        difficulty: "Fácil",
        description: "A babosa (aloe vera) é hidratante, cicatrizante e anti-inflamatória. Este gel é perfeito para usar após a massagem, hidratando a pele e prolongando os benefícios.\n\n**Ingredientes:**\n- 1 folha de babosa fresca\n- 30ml de óleo de amêndoas\n- 1 colher de mel\n\n**Modo de preparo:**\n1. Corte a folha de babosa\n2. Extraia o gel (evitando a parte amarela)\n3. Misture com o óleo e mel\n4. Bata no liquidificador\n5. Armazene na geladeira\n\n**Como usar:**\n- Aplicar após a massagem\n- Deixar agir por 10-15 minutos\n- Enxaguar se desejar\n\n**Validade:**\n- 5-7 dias na geladeira",
        ingredients: ["Babosa fresca", "Óleo de amêndoas", "Mel"],
        usage: "Pós-massagem para hidratar",
        category: "cremes",
        videoUrl: "/assets/videos/GeldeBabosa.mp4"
      },
      {
        id: 12,
        title: "Mistura de Óleos Essenciais",
        thumbnail: "/assets/MisturaDeOleosEssenciais.jpeg",
        difficulty: "Fácil",
        description: "Esta mistura combina óleos essenciais com propriedades anti-inflamatórias, analgésicas e relaxantes. É versátil e pode ser usada em diferentes situações.\n\n**Ingredientes:**\n- 5 gotas de lavanda\n- 3 gotas de hortelã-pimenta\n- 3 gotas de eucalipto\n- 30ml de óleo transportador (amêndoas ou coco)\n\n**Modo de preparo:**\n1. Misture os óleos essenciais\n2. Adicione ao óleo transportador\n3. Agite bem\n4. Armazene em frasco escuro\n\n**Como usar:**\n- Diluir antes de aplicar\n- Massagear suavemente\n- Usar 1-2 vezes ao dia\n\n**Cuidados:**\n- Nunca use puro na pele\n- Evite durante a gravidez\n- Teste alergia antes",
        ingredients: ["Lavanda", "Hortelã-pimenta", "Eucalipto", "Óleo transportador"],
        usage: "Diluir e aplicar suavemente",
        category: "cremes",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ],
    exercicios: [
      {
        id: 13,
        title: "Alongamento de Pernas",
        duration: "10 min",
        thumbnail: "/assets/AlongamentodasPernas.jpeg",
        level: "Iniciante",
        description: "Alongamentos suaves são essenciais para melhorar a circulação e reduzir a sensação de peso nas pernas. Este programa de 10 minutos pode ser feito diariamente.\n\n**Exercícios incluídos:**\n- Alongamento de panturrilha\n- Alongamento de quadríceps\n- Alongamento de isquiotibiais\n- Rotação de tornozelos\n- Elevação de pernas\n\n**Benefícios:**\n- Melhora da circulação\n- Redução do inchaço\n- Alívio da sensação de peso\n- Prevenção de contraturas\n\n**Frequência:**\n- 1-2 vezes ao dia\n- Preferencialmente pela manhã e à noite",
        category: "exercicios",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 14,
        title: "Exercícios na Água",
        duration: "20 min",
        thumbnail: "/assets/ExerciciosnaAgua.jpeg",
        level: "Todos os níveis",
        description: "A hidroginástica é ideal para quem tem lipedema porque a água reduz o impacto nas articulações e proporciona resistência suave. Este programa é adaptado especificamente para lipedema.\n\n**Exercícios incluídos:**\n- Caminhada na água\n- Elevação lateral de pernas\n- Bicicleta aquática\n- Agito de braços\n- Flutuação relaxante\n\n**Benefícios:**\n- Sem impacto nas articulações\n- Resistência natural da água\n- Melhora da circulação\n- Relaxamento muscular\n\n**Onde fazer:**\n- Piscina aquecida (28-30°C)\n- Profundidade até o peito\n- 2-3 vezes por semana",
        category: "exercicios",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 15,
        title: "Yoga Adaptado",
        duration: "15 min",
        thumbnail: "/assets/yougaAdaptado.jpeg",
        level: "Iniciante",
        description: "O yoga adaptedo para lipedema foca em posturas suaves que melhoram a circulação, reduzem o estresse e aliviam a dor. Não requer flexibilidade avançada.\n\n**Posturas incluídas:**\n- Tadasana (postura da montanha)\n- Vrksasana (postura da árvore)\n- Balasana (postura da criança)\n- Savasana (postura do cadáver)\n- Alongamentos suaves\n\n**Benefícios:**\n- Redução do estresse\n- Melhora da circulação\n- Alívio da dor\n- Conexão mente-corpo\n\n**Equipamento:**\n- Tapete de yoga\n- Roupas confortáveis\n- Ambiente tranquilo",
        category: "exercicios",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 16,
        title: "Pilates para Lipedema",
        duration: "25 min",
        thumbnail: "/assets/PilatesParaLipedema.jpeg",
        level: "Intermediário",
        description: "O Pilates fortalece o core e melhora a postura sem impacto nas articulações. Este programa é adaptado para proporcionar benefícios específicos para quem tem lipedema.\n\n**Exercícios incluídos:**\n- Hundreds\n- Ponte (Bridge)\n- Leg circles\n- Clamshells\n- Alongamentos de Pilates\n\n**Benefícios:**\n- Fortalecimento do core\n- Melhora da postura\n- Sem impacto nas articulações\n- Estabilidade pélvica\n\n**Equipamento:**\n- Tapete de Pilates\n- Opcional: bola suíça, faixas elásticas\n\n**Frequência:**\n- 2-3 vezes por semana\n- Com dias de descanso entre sessões",
        category: "exercicios",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  }

  // Encontrar o conteúdo baseado no ID
  const allContent = [...contentData.massagem, ...contentData.receitas, ...contentData.cremes, ...contentData.exercicios]
  const content = allContent.find(item => item.id === parseInt(id))

  // Comentários simulados
  const comments = [
    {
      id: 1,
      user: "Maria Clara",
      avatar: "/assets/1.png",
      text: "Fiz essa receita hoje e ficou maravilhosa! Muito saborosa e senti que ajudou com o inchaço. Super recomendo!",
      likes: 24,
      time: "2 horas atrás"
    },
    {
      id: 2,
      user: "Ana Silva",
      avatar: "/assets/3.jpg",
      text: "A técnica de massagem é excelente. Tenho feito toda manhã e já sinto diferença no inchaço das pernas. Obrigada por compartilhar!",
      likes: 18,
      time: "5 horas atrás"
    },
    {
      id: 3,
      user: "Patricia Oliveira",
      avatar: "/assets/5.jfif",
      text: "O creme de gengibre é incrível! Aquece a área e alivia a dor. Faço toda noite antes de dormir.",
      likes: 15,
      time: "1 dia atrás"
    },
    {
      id: 4,
      user: "Carla Mendes",
      avatar: "/assets/6.jfif",
      text: "Os exercícios na água são perfeitos! Sinto que posso me mover sem dor. Vou continuar fazendo 3x por semana.",
      likes: 12,
      time: "2 dias atrás"
    },
    {
      id: 5,
      user: "Fernanda Costa",
      avatar: "/assets/1.png",
      text: "O suco verde virou rotina minha. Bebo todas as manhãs em jejum e minha energia melhorou muito!",
      likes: 9,
      time: "3 dias atrás"
    }
  ]

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Conteúdo não encontrado</h1>
          <Link to="/plataforma" className="text-primary-500 hover:underline">
            Voltar para a plataforma
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/plataforma" className="flex items-center gap-2 text-white hover:text-primary-500 transition-colors">
              <ChevronLeft className="w-5 h-5" />
              <span>Voltar</span>
            </Link>
            <div className="flex items-center gap-4">
              <button className="text-gray-300 hover:text-white">
                <ThumbsUp className="w-5 h-5" />
              </button>
              <button className="text-gray-300 hover:text-white">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Video Player */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Container */}
            <div className="bg-black rounded-xl overflow-hidden aspect-video mb-4">
              {content.videoUrl.startsWith('https://www.youtube.com') ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 text-center">
                  <Video className="w-16 h-16 text-primary-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Vídeo em Produção</h3>
                  <p className="text-gray-300 mb-4">Este conteúdo está sendo produzido e será publicado assim que possível.</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Em breve disponível</span>
                  </div>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={content.videoUrl}
                  title={content.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>

            {/* Video Info */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white mb-2">{content.title}</h1>
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                {content.duration && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {content.duration}
                  </span>
                )}
                {content.level && (
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {content.level}
                  </span>
                )}
                {content.time && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {content.time}
                  </span>
                )}
                {content.difficulty && (
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {content.difficulty}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  Curtir
                </button>
                <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition-colors">
                  <Share2 className="w-4 h-4" />
                  Compartilhar
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4">Descrição</h2>
              <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                {content.description}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Comentários ({comments.length})
              </h2>
              
              {/* Add Comment */}
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Escreva seu comentário..."
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                    rows="3"
                  />
                  <button className="mt-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors">
                    Publicar comentário
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <img
                      src={comment.avatar}
                      alt={comment.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white">{comment.user}</span>
                        <span className="text-gray-500 text-sm">{comment.time}</span>
                      </div>
                      <p className="text-gray-300 mb-2">{comment.text}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          {comment.likes}
                        </button>
                        <button className="text-gray-400 hover:text-white transition-colors">
                          Responder
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Conteúdo relacionado</h3>
            <div className="space-y-4">
              {allContent.slice(0, 5).map((item) => (
                <Link
                  key={item.id}
                  to={`/plataforma/video/${item.id}`}
                  className="flex gap-3 bg-gray-800 rounded-xl p-3 hover:bg-gray-700 transition-colors"
                >
                  <div className="relative w-32 h-20 flex-shrink-0">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {item.duration && (
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                        {item.duration}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium text-sm line-clamp-2 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {item.level || item.difficulty || item.time}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
