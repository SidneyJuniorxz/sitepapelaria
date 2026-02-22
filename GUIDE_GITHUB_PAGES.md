# 🐙 Guia de Publicação: GitHub Pages

Este guia ensina como colocar o site da **Papelê Encantado** no ar usando o GitHub Pages e a automação que configuramos.

## 1. Criar o Repositório no GitHub
1. Vá em [github.com/new](https://github.com/new).
2. Dê um nome ao projeto (ex: `papele-encantado`).
3. **⚠️ IMPORTANTE**: Escolha a opção **Public** (Público). O GitHub Pages só é gratuito para repositórios públicos. Se ele estiver como *Private*, o menu de publicação não aparecerá.
4. **Não** adicione README ou licença agora, pois já temos os arquivos aqui.

## 2. Enviar o Código (Primeira Vez)
No seu terminal, dentro da pasta do projeto, execute:
```bash
git init
git add .
git commit -m "Primeira versão do site"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

## 3. Ativar a Automação (GitHub Actions)
Após enviar o código:
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações).
2. No menu lateral, clique em **Pages**.
3. Em **Build and deployment** > **Source**, mude para **GitHub Actions**.
4. Pronto! O Action que eu criei (`.github/workflows/deploy.yml`) vai começar a trabalhar.

## 4. Acompanhar e Visualizar
- Vá na aba **Actions** para ver o progresso do "Deploy".
- Quando terminar (ficar verde), o link do seu site aparecerá na aba **Pages**.

---

## ✅ Por que usar esse método?
- **Grátis**: Hospedagem vitalícia sem custo.
- **Automático**: Você altera um preço no código, faz um `git push`, e o site se atualiza sozinho em 1 minuto.
- **Seguro**: HTTPS (cadeado verde) incluso.
