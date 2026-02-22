export const products = [
    // CONVITES
    {
        id: 1,
        category: 'Convites',
        name: 'Convite Interativo',
        price: 60.00,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.41%20AM%20(3).jpeg', // Exemplo
    },
    {
        id: 2,
        category: 'Convites',
        name: 'Convite Digital',
        price: 20.00,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.41%20AM%20(1).jpeg',
    },
    // CARD DE MESA
    {
        id: 3,
        category: 'Card de Mesa',
        name: 'Recado de mesa médio (dupla face)',
        price: 7.00,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.41%20AM.jpeg',
    },
    {
        id: 4,
        category: 'Card de Mesa',
        name: 'Recadinho de mesa',
        price: 5.00,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.41%20AM.jpeg',
    },
    // LEMBRANCINHAS
    {
        id: 5,
        category: 'Lembrancinhas',
        name: 'Caixa Milk',
        price: 4.80,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.41%20AM%20(2).jpeg',
    },
    {
        id: 6,
        category: 'Lembrancinhas',
        name: 'Caixa Cubo',
        price: 4.80,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.42%20AM%20(1).jpeg',
    },
    {
        id: 7,
        category: 'Lembrancinhas',
        name: 'Caixa Pirâmide',
        price: 4.80,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.40%20AM.jpeg',
    },
    {
        id: 8,
        category: 'Lembrancinhas',
        name: 'Caixa Canudo',
        price: 4.80,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.42%20AM%20(2).jpeg',
    },
    {
        id: 9,
        category: 'Lembrancinhas',
        name: 'Caixa Maletinha',
        price: 4.80,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.42%20AM%20(3).jpeg',
    },
    {
        id: 10,
        category: 'Lembrancinhas',
        name: 'Sacolinha (10x10x3 aprox.)',
        price: 5.00,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.42%20AM.jpeg',
    },
    {
        id: 11,
        category: 'Lembrancinhas',
        name: 'Sacolinha Kraft personalizada',
        price: 7.00,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.42%20AM%20(4).jpeg',
    },
    {
        id: 12,
        category: 'Lembrancinhas',
        name: 'Sacola Ondulada (19x20 cm)',
        price: 12.00,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.43%20AM%20(1).jpeg',
    },
    {
        id: 13,
        category: 'Lembrancinhas',
        name: 'Kit de Colorir (livro + giz de cera)',
        price: 8.50,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.43%20AM.jpeg',
    },
    {
        id: 14,
        category: 'Lembrancinhas',
        name: 'Folha de atividades lembrancinha',
        price: 1.99,
        image: '/images/WhatsApp%20Image%202026-02-22%20at%206.07.43%20AM%20(2).jpeg',
    },
];

export const kits = [
    {
        id: 'k1',
        name: 'KIT PEQUENO',
        price: 135.00,
        description: '10 Caixas Milk, 10 Caixas Cubo, 10 Caixas Pirâmide',
        items: ['10 Caixas Milk', '10 Caixas Cubo', '10 Caixas Pirâmide'],
        color: 'pink-baby',
    },
    {
        id: 'k2',
        name: 'KIT MÉDIO',
        price: 275.00,
        description: '15 Caixas Milk, 15 Caixas Cubo, 15 Caixas Pirâmide, 15 Sacolinhas PP personalizadas',
        items: ['15 Caixas Milk', '15 Caixas Cubo', '15 Caixas Pirâmide', '15 Sacolinhas PP personalizadas'],
        color: 'pink-main',
    },
    {
        id: 'k3',
        name: 'KIT GRANDE',
        price: 470.00,
        description: '20 Caixas Milk, 20 Caixas Cubo, 20 Caixas Pirâmide, 20 Sacolinhas G personalizadas',
        items: ['20 Caixas Milk', '20 Caixas Cubo', '20 Caixas Pirâmide', '20 Sacolinhas G personalizadas'],
        color: 'orange-burnt',
    }
];

export const categories = ['Todos', 'Convites', 'Card de Mesa', 'Lembrancinhas', 'Kits'];
