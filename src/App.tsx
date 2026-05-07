import { motion } from "motion/react";
import { Cake, ShoppingBag, MapPin, Phone, Instagram, Clock, ChevronRight, Star } from "lucide-react";

export default function App() {
  const NINETY_NINE_FOOD_LINK = "https://www.instagram.com/nk_rotisseria"; // Substitua pelo seu link real

  const products = [
    {
      id: "p1",
      title: "Bolo de Cenoura",
      description: "O clássico brasileiro com cobertura generosa de brigadeiro gourmet.",
      price: "R$ 45,00",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "p2",
      title: "Red Velvet",
      description: "Massa aveludada com recheio cremoso de cream cheese.",
      price: "R$ 85,00",
      image: "https://images.unsplash.com/photo-1586788680434-30d324631ffc?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "p3",
      title: "Bolo de Nozes",
      description: "Massa leve e crocante com o toque sofisticado das nozes selecionadas.",
      price: "R$ 75,00",
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "p4",
      title: "Empadão de Frango",
      description: "Nossa rotisseria também brilha com massas artesanais e recheios suculentos.",
      price: "R$ 60,00",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-[#D35400] selection:text-white">
      {/* Navigation */}
      <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF5]/80 backdrop-blur-md border-b border-[#2D1B13]/5">
        <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#D35400] rounded-full flex items-center justify-center p-2">
              <Cake className="w-full h-full text-white" />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase text-[#2D1B13]">NK ROTISSERIA</span>
          </div>
          <div className="hidden md:flex items-center gap-10 font-bold text-xs uppercase tracking-widest text-[#2D1B13]">
            <a href="#inicio" className="text-[#D35400]">Início</a>
            <a href="#produtos" className="hover:text-[#D35400] transition-colors">Bolos</a>
            <a href="#rotisseria" className="hover:text-[#D35400] transition-colors">Rotisseria</a>
            <a href="#contato" className="hover:text-[#D35400] transition-colors">Contato</a>
          </div>
          <a 
            href={NINETY_NINE_FOOD_LINK} 
            id="nav-cta"
            className="hidden sm:flex items-center gap-2 bg-[#D35400] text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-[#A04000] transition-all shadow-lg shadow-orange-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Pedir no 99Food</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-40 pb-24 px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-[#FAD7A0] text-[#D35400] rounded-full text-xs font-bold uppercase tracking-widest w-fit">
                Artesanal & Fresquinho
              </div>
              <h1 className="text-8xl font-black leading-[0.85] tracking-tight text-[#2D1B13]">
                Sabor que <br />
                <span className="text-[#D35400]">Encanta.</span>
              </h1>
              <p className="max-w-md text-lg text-[#5D4037] leading-relaxed">
                Na NK ROTISSERIA, cada fatia é preparada com ingredientes selecionados e o afeto de uma receita de família. Da nossa cozinha para sua mesa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <a 
                href={NINETY_NINE_FOOD_LINK}
                id="hero-primary-cta"
                className="bg-[#D35400] hover:bg-[#A04000] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-orange-200 flex items-center justify-center gap-4 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Comprar no 99food</span>
                <ChevronRight className="w-6 h-6" />
              </a>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-bold opacity-40 uppercase tracking-widest">Entrega Rápida</span>
                <span className="font-black text-xl">30 - 45 min</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-[#FFFBF5] bg-gray-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <div className="flex text-[#F1C40F]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-[#2D1B13] opacity-40">+500 avaliações</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-[500px] h-[500px] bg-[#FAD7A0] rounded-full opacity-30 blur-3xl -z-10"></div>
            <div className="aspect-square w-full max-w-md rounded-[50px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop" 
                alt="Bolo Principal" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F1C40F] rounded-full flex items-center justify-center p-4 border-8 border-[#FFFBF5] rotate-12 z-20 shadow-xl">
              <span className="text-center font-black text-sm uppercase leading-tight text-[#2D1B13]">Melhor da Região</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D35400] rounded-tl-[200px] opacity-5 -z-0 translate-x-20 translate-y-20"></div>
      </section>

      {/* Featured Products */}
      <section id="produtos" className="py-24 bg-white px-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
            <h2 className="text-5xl font-black tracking-tighter uppercase text-[#2D1B13]">O Cardápio</h2>
            <div className="w-20 h-2 bg-[#D35400] rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="space-y-6">
                  <div className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl relative bg-[#F9F6F1]">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-6 left-6 right-6">
                       <div className="bg-white px-4 py-2 rounded-2xl text-lg font-black text-[#D35400] w-fit shadow-lg">
                        {product.price}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight group-hover:text-[#D35400] transition-colors">{product.title}</h3>
                    <p className="text-sm font-medium text-[#5D4037] leading-relaxed line-clamp-2">{product.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24 px-10 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="group p-12 bg-white rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-[#2D1B13]/5 space-y-6">
            <div className="w-16 h-16 bg-[#D35400] rounded-2xl flex items-center justify-center p-4 text-white rotate-3 group-hover:rotate-0 transition-transform">
              <Clock className="w-full h-full" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tighter">Horário</h4>
            <div className="font-bold text-[#5D4037] space-y-2">
              <p className="opacity-40 text-xs uppercase tracking-widest">Aberto todos os dias</p>
              <p>Seg a Sáb: 09h às 19h</p>
              <p>Domingo: 10h às 17h</p>
            </div>
          </div>
          
          <div className="group p-12 bg-[#2D1B13] text-white rounded-[40px] shadow-2xl space-y-6 relative overflow-hidden">
            <div className="w-16 h-16 bg-[#F1C40F] rounded-2xl flex items-center justify-center p-4 text-[#2D1B13] -rotate-3 group-hover:rotate-0 transition-transform">
              <MapPin className="w-full h-full" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tighter">Localização</h4>
            <p className="font-bold text-white/70 leading-relaxed">
              Av. das Rosas, 402 <br />
              Vila Gourmet, São Paulo - SP
            </p>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
          </div>

          <div id="contato" className="group p-12 bg-[#FAD7A0]/20 border-4 border-dashed border-[#FAD7A0] rounded-[40px] space-y-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-4 text-[#D35400] shadow-sm">
              <Instagram className="w-full h-full" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tighter">Siga-nos</h4>
            <p className="font-bold text-[#5D4037]">
              Acompanhe nossas novidades e promoções diárias.
            </p>
            <a href="#" className="text-2xl font-black text-[#D35400] hover:underline underline-offset-8 block">@nkrotisseria</a>
          </div>
        </div>
      </section>

      {/* 99Food Banner */}
      <section className="py-12 px-10">
        <div className="max-w-7xl mx-auto bg-[#D35400] rounded-[60px] p-16 text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl shadow-orange-200">
          <div className="space-y-6 relative z-10 text-center md:text-left">
            <h2 className="text-6xl font-black leading-none tracking-tighter uppercase">
              Peça Já o <br className="hidden md:block" /> Seu Favorito
            </h2>
            <p className="text-white/80 text-xl font-bold italic">Entrega super rápida pelo 99food.</p>
          </div>
          <a 
            href={NINETY_NINE_FOOD_LINK} 
            className="bg-white text-[#D35400] px-12 py-6 rounded-3xl text-2xl font-black uppercase tracking-tighter hover:scale-105 transition-all shadow-2xl shadow-black/20 relative z-10"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir para o APP
          </a>
          {/* Abstract decorative circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full -ml-20 -mb-20 blur-2xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12 border-t-2 border-[#2D1B13]/5 pt-12">
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#2D1B13] rounded-full flex items-center justify-center p-2 text-white">
                <Cake className="w-full h-full" />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase text-[#2D1B13]">NK Rotisseria</span>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2D1B13]/40">© 2024 NK Rotisseria • SP</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 border-4 border-[#D35400]/20 rounded-full flex items-center justify-center transition-colors hover:border-[#D35400]">
              <div className="w-3 h-3 bg-[#D35400] rounded-full"></div>
            </div>
            <div className="w-14 h-14 border-4 border-[#D35400]/20 rounded-full flex items-center justify-center transition-colors hover:border-[#D35400]">
              <div className="w-3 h-3 bg-[#D35400] rounded-full opacity-20"></div>
            </div>
            <div className="w-14 h-14 border-4 border-[#D35400]/20 rounded-full flex items-center justify-center transition-colors hover:border-[#D35400]">
              <div className="w-3 h-3 bg-[#D35400] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
