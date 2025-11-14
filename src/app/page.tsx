"use client";

import { Star, ChefHat, Globe, Video, MessageSquare, TrendingUp, Check, CreditCard, Smartphone } from "lucide-react";
import { useState } from "react";

export default function GlobalGourmetPage() {
  const [selectedPlan, setSelectedPlan] = useState<"free" | "premium">("free");

  const recipes = [
    {
      id: 1,
      title: "Paella Valenciana",
      region: "Europa - Espanha",
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=600&h=400&fit=crop",
      rating: 4.9,
      reviews: 234,
    },
    {
      id: 2,
      title: "Feijoada Brasileira",
      region: "América do Sul - Brasil",
      image: "https://images.unsplash.com/photo-1628191081676-8f40d4ce6c44?w=600&h=400&fit=crop",
      rating: 4.8,
      reviews: 189,
    },
    {
      id: 3,
      title: "Tacos al Pastor",
      region: "América Latina - México",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&fit=crop",
      rating: 4.9,
      reviews: 312,
    },
    {
      id: 4,
      title: "Risotto alla Milanese",
      region: "Europa - Itália",
      image: "https://images.unsplash.com/photo-1476124369491-c4b3c2b7f72c?w=600&h=400&fit=crop",
      rating: 4.7,
      reviews: 156,
    },
    {
      id: 5,
      title: "Empanadas Argentinas",
      region: "América do Sul - Argentina",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop",
      rating: 4.8,
      reviews: 201,
    },
    {
      id: 6,
      title: "Ceviche Peruano",
      region: "América do Sul - Peru",
      image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=400&fit=crop",
      rating: 4.9,
      reviews: 278,
    },
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "500+ Receitas Globais",
      description: "Explore pratos autênticos da Europa, América Latina e América do Sul",
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Chefs Experientes",
      description: "Receitas testadas e aprovadas por profissionais da culinária",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Vídeos Passo a Passo",
      description: "Aprenda com tutoriais detalhados em vídeo e fotos",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Avaliações da Comunidade",
      description: "Leia comentários e dicas de outros cozinheiros",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Tendências Culinárias",
      description: "Fique por dentro das últimas novidades gastronômicas",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Todas as Dietas",
      description: "Opções vegetarianas, veganas, sem glúten e muito mais",
    },
  ];

  const freePlanFeatures = [
    "Acesso a 200+ receitas gratuitas",
    "Fotos passo a passo",
    "Avaliações da comunidade",
    "Newsletter semanal",
  ];

  const premiumPlanFeatures = [
    "Acesso ilimitado a 500+ receitas",
    "Vídeos exclusivos em HD",
    "Receitas premium de chefs renomados",
    "Download de receitas em PDF",
    "Suporte prioritário",
    "Sem anúncios",
    "Acesso antecipado a novos conteúdos",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChefHat className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Global Gourmet
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#receitas" className="text-gray-700 hover:text-orange-600 transition-colors">
                Receitas
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-orange-600 transition-colors">
                Sobre
              </a>
              <a href="#planos" className="text-gray-700 hover:text-orange-600 transition-colors">
                Planos
              </a>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Começar Agora
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                Avaliação 5/5 estrelas
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
                Sabores do Mundo na Sua{" "}
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Cozinha
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Descubra mais de 500 receitas autênticas da Europa, América Latina e América do Sul. 
                Ingredientes frescos, instruções claras e resultados incríveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Explorar Receitas
                </button>
                <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300">
                  Ver Planos
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Receitas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50k+</div>
                  <div className="text-gray-600">Usuários</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.9</div>
                  <div className="text-gray-600">Avaliação</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                  alt="Pratos deliciosos"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <ChefHat className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Chefs Profissionais</div>
                    <div className="text-sm text-gray-600">Receitas testadas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher o Global Gourmet?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tudo que você precisa para se tornar um chef em casa
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section id="receitas" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Receitas Populares
            </h2>
            <p className="text-xl text-gray-600">
              Explore nossos pratos mais amados pela comunidade
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                    <span className="font-semibold text-gray-900">{recipe.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-orange-600 font-medium mb-2">{recipe.region}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{recipe.reviews} avaliações</span>
                    <span className="text-orange-600 font-medium hover:underline">Ver receita →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Ver Todas as Receitas
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-gray-600">
              Comece grátis ou desbloqueie todo o potencial com o Premium
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Gratuito</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">R$ 0</div>
                <div className="text-gray-600">Para sempre</div>
              </div>
              <ul className="space-y-4 mb-8">
                {freePlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full border-2 border-orange-500 text-orange-600 px-6 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300">
                Começar Grátis
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Plano Premium</h3>
                <div className="text-5xl font-bold text-white mb-2">R$ 29,90</div>
                <div className="text-orange-100">por mês</div>
              </div>
              <ul className="space-y-4 mb-8">
                {premiumPlanFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-orange-600 px-6 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Assinar Premium
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">Formas de pagamento aceitas:</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-gray-700">
                <CreditCard className="w-6 h-6 text-orange-600" />
                <span>Cartão de Crédito</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Smartphone className="w-6 h-6 text-orange-600" />
                <span>PIX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CreditCard className="w-6 h-6 text-orange-600" />
                <span>Transferência Bancária</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Pronto Para Começar Sua Jornada Culinária?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Junte-se a mais de 50.000 cozinheiros apaixonados e descubra receitas incríveis hoje mesmo!
          </p>
          <button className="bg-white text-orange-600 px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Criar Conta Gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="w-8 h-8 text-orange-500" />
                <span className="text-xl font-bold">Global Gourmet</span>
              </div>
              <p className="text-gray-400">
                Sabores autênticos do mundo na sua cozinha.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Receitas</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Europa</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">América Latina</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">América do Sul</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Todas as Receitas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Global Gourmet. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
