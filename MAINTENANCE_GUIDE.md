# 🛠️ Guia de Manutenção e Edição

Este guia é para você ou sua cliente alterarem o site sem medo!

## 🏷️ Como alterar Produtos e Preços
Toda a "inteligência" do catálogo está no arquivo:
👉 `src/data/products.js`

### Exemplo de um Produto:
```javascript
{
    id: 1,
    category: 'Convites',
    name: 'Convite Interativo',
    price: 60.00,
    image: '/images/WhatsApp%20Image...jpeg',
}
```

- **Para mudar o preço**: Altere o número após `price:`. Ex: `60.00` para `65.50`.
- **Para mudar o nome**: Altere o texto entre aspas em `name:`.
- **Para Adicionar um novo**: Copie um bloco inteiro (do `{` ao `},`), cole logo abaixo e mude o `id` para o próximo número disponível.

---

## 📸 Como trocar ou adicionar Fotos
1. Salve a foto nova dentro da pasta: `public/images/`.
2. **Dica**: Tente usar nomes simples sem espaços, como `festa-azul.jpg`.
3. No arquivo `src/data/products.js`, atualize o campo `image` com o nome exato do arquivo:
   - Ex: `image: '/images/festa-azul.jpg',`

---

## 📦 Como aplicar as mudanças no site (Build)
Sempre que você mudar algo e quiser ver no site "oficial":

1. Rode o comando no terminal:
   ```bash
   npm run build
   ```
2. Se estiver usando o **GitHub Actions**:
   ```bash
   git add .
   git commit -m "Atualizando preços"
   git push origin main
   ```
   *O GitHub fará o resto sozinho!*

---

> [!IMPORTANT]
> **Atenção**: Nunca apague as vírgulas ou chaves `{ }` ao editar, elas são essenciais para o código funcionar!
