import React, { useState, useMemo } from 'react';
import { ShoppingCart, MessageCircle, Info, Phone, Package, Heart, Star, LayoutGrid, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, kits, categories } from './data/products';

const App = () => {
    const [cart, setCart] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [isCartsVisible, setIsCartVisible] = useState(false);

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'Todos') return products;
        if (activeCategory === 'Kits') return [];
        return products.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    const addToCart = (item) => {
        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
            }
            return [...prev, { ...item, qty: 1 }];
        });
    };

    const removeFromCart = (itemId) => {
        setCart(prev => prev.filter(i => i.id !== itemId));
    };

    const updateQty = (itemId, delta) => {
        setCart(prev => prev.map(i => {
            if (i.id === itemId) {
                const newQty = Math.max(1, i.qty + delta);
                return { ...i, qty: newQty };
            }
            return i;
        }));
    };

    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    const sendWhatsApp = () => {
        const message = `Olá, gostaria de fazer um pedido de papelaria personalizada para festa infantil:\n\n` +
            cart.map(i => `${i.qty}x ${i.name} - R$ ${(i.price * i.qty).toFixed(2)}`).join('\n') +
            `\n\nTotal: R$ ${total.toFixed(2)}\n\n(Tirei print do meu pedido!)`;

        // Replace with actual number if provided
        const url = `https://wa.me/5500000000000?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen relative overflow-x-hidden">
            <div className="bg-pattern fixed inset-0 z-0 pointer-events-none" />

            {/* Header */}
            <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-pink-baby/30 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img src={`${import.meta.env.BASE_URL}images/logo.jpeg`} alt="Papelê Encantado" className="h-12 w-12 rounded-full border-2 border-pink-main shadow-sm object-cover" />
                        <span className="text-2xl font-rounded font-extrabold text-pink-main tracking-tight">Papelê Encantado</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsCartVisible(true)}
                            className="relative p-2 text-pink-main hover:bg-pink-baby/10 rounded-full transition-colors"
                        >
                            <ShoppingCart size={28} />
                            {cart.length > 0 && (
                                <span className="absolute top-0 right-0 bg-orange-burnt text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-gradient-to-b from-pink-baby/10 to-transparent overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-rounded font-extrabold text-slate-800 mb-6 leading-tight">
                            Papelaria personalizada para deixar a <br className="hidden md:block" />
                            <span className="text-pink-main">festa do seu filho ainda mais especial 💕</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
                            Fazemos todos os temas com carinho, doçura e excelência.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 uppercase font-bold text-sm tracking-wider">
                            <span className="px-4 py-2 bg-green-mint/30 rounded-full text-green-800 flex items-center gap-1">
                                <CheckCircle2 size={16} /> Fazemos todos os temas
                            </span>
                            <span className="px-4 py-2 bg-purple-light/50 rounded-full text-purple-800 flex items-center gap-1">
                                <Heart size={16} fill="currentColor" /> Encantamento garantido
                            </span>
                        </div>

                        <a
                            href="#produtos"
                            className="mt-12 inline-flex items-center gap-2 px-10 py-5 bg-pink-main text-white rounded-cute text-xl font-bold shadow-xl hover:shadow-pink-main/30 hover:-translate-y-1 transition-all"
                        >
                            Ver Catálogo Completo
                        </a>
                    </motion.div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-20 left-10 text-pink-baby/20 animate-pulse"><Star size={48} fill="currentColor" /></div>
                <div className="absolute top-40 right-10 text-orange-burnt/10 animate-bounce transition-all duration-1000"><Heart size={64} fill="currentColor" /></div>
                <div className="absolute bottom-20 left-1/4 text-green-mint/20 -rotate-12"><Package size={40} /></div>
            </section>

            <main className="container mx-auto px-4 py-12 relative z-10">
                {/* Navigation Categories */}
                <div id="produtos" className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === cat
                                ? 'bg-pink-main text-white shadow-md'
                                : 'bg-white text-slate-600 hover:bg-pink-baby/10 border border-slate-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <section className="mb-20">
                    {(activeCategory === 'Todos' || activeCategory === 'Kits') && (
                        <div className="mb-16">
                            <h2 className="text-3xl font-rounded font-extrabold text-slate-800 mb-8 flex items-center gap-3">
                                <Star className="text-orange-burnt" fill="currentColor" /> Kits Promocionais
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {kits.map((kit, idx) => (
                                    <motion.div
                                        key={kit.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`p-8 rounded-cute border-2 border-transparent hover:border-pink-baby transition-all bg-white shadow-lg relative overflow-hidden`}
                                    >
                                        <div className={`absolute top-0 right-0 p-4 rounded-bl-3xl bg-pink-baby/20 text-pink-main font-bold`}>
                                            Destaque
                                        </div>
                                        <h3 className="text-2xl font-rounded font-black text-pink-main mb-4">{kit.name}</h3>
                                        <p className="text-3xl font-black text-slate-800 mb-6">R$ {kit.price.toFixed(2)}</p>
                                        <ul className="mb-8 space-y-3">
                                            {kit.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-slate-600">
                                                    <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            onClick={() => addToCart({ id: kit.id, name: kit.name, price: kit.price })}
                                            className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold hover:bg-pink-main transition-colors flex items-center justify-center gap-2"
                                        >
                                            Selecionar Kit <Package size={20} />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeCategory !== 'Kits' && (
                        <div>
                            <h2 className="text-3xl font-rounded font-extrabold text-slate-800 mb-8">
                                {activeCategory === 'Todos' ? 'Nossos Produtos' : activeCategory}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredProducts.map((product, idx) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="card-cute bg-white flex flex-col h-full"
                                    >
                                        <div className="h-56 overflow-hidden relative group">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-pink-main/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <div className="p-5 flex flex-col flex-grow">
                                            <span className="text-xs font-bold text-pink-main/60 uppercase tracking-widest mb-1">
                                                {product.category}
                                            </span>
                                            <h3 className="text-lg font-rounded font-extrabold text-slate-800 mb-2 line-clamp-2 leading-tight h-12">
                                                {product.name}
                                            </h3>
                                            <p className="text-2xl font-black text-slate-800 mb-6">R$ {product.price.toFixed(2).replace('.', ',')}</p>
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="mt-auto w-full py-3 bg-pink-baby/20 text-pink-main rounded-xl font-bold hover:bg-pink-main hover:text-white transition-all flex items-center justify-center gap-2"
                                            >
                                                Adicionar <ShoppingCart size={18} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* Como Funciona Section */}
                <section className="bg-purple-light/20 rounded-cute p-12 mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-rounded font-extrabold text-slate-800 mb-4">Como Funciona?</h2>
                        <p className="text-slate-600">Simples, rápido e encantador!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: '🎨', title: 'Escolha o Tema', desc: 'Fazemos qualquer tema que você imaginar.' },
                            { icon: '🛒', title: 'Monte o Carrinho', desc: 'Selecione os itens e quantidades no catálogo.' },
                            { icon: '📸', title: 'Tire Print', desc: 'Revise seu resumo e tire um print da tela.' },
                            { icon: '💬', title: 'Finalize no WhatsApp', desc: 'Envie para nós e iniciaremos a criação.' }
                        ].map((step, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h4 className="font-rounded font-bold text-slate-800 mb-2">{step.title}</h4>
                                <p className="text-sm text-slate-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-16 px-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img src={`${import.meta.env.BASE_URL}images/logo.jpeg`} alt="Logo" className="w-10 h-10 rounded-full grayscale opacity-50" />
                            <span className="text-xl font-rounded font-bold text-white">Papelê Encantado</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Trazendo encanto e doçura para os momentos mais importantes da vida do seu filho através da papelaria personalizada.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-rounded font-bold text-white mb-6 uppercase tracking-widest text-sm">Links rápidos</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-pink-main transition-colors">Início</a></li>
                            <li><a href="#produtos" className="hover:text-pink-main transition-colors">Produtos</a></li>
                            <li><button onClick={() => setActiveCategory('Kits')} className="hover:text-pink-main transition-colors">Kits Promocionais</button></li>
                            <li><a href="#" className="hover:text-pink-main transition-colors">Como Funciona</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-rounded font-bold text-white mb-6 uppercase tracking-widest text-sm">Atendimento</h4>
                        <div className="space-y-4">
                            <a href="#" className="flex items-center gap-2 hover:text-green-mint transition-colors">
                                <Phone size={18} /> (00) 00000-0000
                            </a>
                            <p className="text-sm flex items-start gap-2">
                                <Info size={18} className="shrink-0" /> Atendimento de Segunda a Sexta das 9h às 18h.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs">
                    &copy; {new Date().getFullYear()} Papelê Encantado. Todos os direitos reservados.
                </div>
            </footer>

            {/* Cart Modal / Drawer */}
            <AnimatePresence>
                {isCartsVisible && (
                    <div className="fixed inset-0 z-[60] flex justify-end">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsCartVisible(false)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col"
                        >
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-pink-baby/10">
                                <h2 className="text-2xl font-rounded font-extrabold text-pink-main flex items-center gap-2">
                                    <ShoppingCart /> Seu Pedido
                                </h2>
                                <button onClick={() => setIsCartVisible(false)} className="p-2 hover:bg-white rounded-full transition-colors text-slate-400">
                                    <ShoppingCart size={24} className="rotate-45" /> {/* Using ShoppingCart as X for simplicity here or could use Lucide X */}
                                </button>
                            </div>

                            <div className="flex-grow overflow-y-auto p-6 space-y-6">
                                {cart.length === 0 ? (
                                    <div className="text-center py-20">
                                        <div className="text-6xl mb-4">🎈</div>
                                        <p className="text-slate-500 font-medium">Seu carrinho está vazio.</p>
                                        <button
                                            onClick={() => setIsCartVisible(false)}
                                            className="mt-4 text-pink-main font-bold hover:underline"
                                        >
                                            Ver produtos
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-sm text-slate-500 font-medium bg-purple-light/30 p-4 rounded-xl">
                                            💡 <strong>Dica:</strong> Tire um print desta tela para nos enviar!
                                        </p>
                                        {cart.map(item => (
                                            <div key={item.id} className="flex gap-4 items-center">
                                                <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                                                    {item.image && <img src={item.image} alt="" className="w-full h-full object-cover" />}
                                                </div>
                                                <div className="flex-grow">
                                                    <h4 className="font-rounded font-bold text-slate-800 leading-tight">{item.name}</h4>
                                                    <p className="text-sm font-bold text-pink-main">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                                                </div>
                                                <div className="flex items-center border rounded-lg bg-slate-50">
                                                    <button onClick={() => updateQty(item.id, -1)} className="px-3 py-1 hover:text-pink-main transition-colors">-</button>
                                                    <span className="px-2 font-bold min-w-[20px] text-center">{item.qty}</span>
                                                    <button onClick={() => updateQty(item.id, 1)} className="px-3 py-1 hover:text-pink-main transition-colors">+</button>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)} className="text-slate-300 hover:text-red-500 transition-colors px-2">
                                                    &times;
                                                </button>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>

                            {cart.length > 0 && (
                                <div className="p-6 bg-slate-50 border-t border-slate-200">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">Total do Pedido</span>
                                        <span className="text-3xl font-black text-slate-800 tracking-tight">R$ {total.toFixed(2).replace('.', ',')}</span>
                                    </div>
                                    <button
                                        onClick={sendWhatsApp}
                                        className="w-full py-5 bg-pink-main text-white rounded-cute text-lg font-black shadow-lg shadow-pink-main/30 hover:shadow-pink-main/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                                    >
                                        Finalizar pedido no WhatsApp
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;
