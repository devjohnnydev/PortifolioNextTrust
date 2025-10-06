# 🚀 Instruções para Deploy no Localweb

## 📋 Pré-requisitos

- Node.js instalado
- Cliente FTP (FileZilla, WinSCP ou File Manager da Localweb)
- Credenciais FTP da Localweb

---

## 🔨 Passo 1: Fazer Build da Aplicação

Execute o script de build:

```bash
bash build-localweb.sh
```

Ou manualmente:

```bash
npx vite build --config vite.config.localweb.ts
cp public/.htaccess dist-localweb/
```

Isso criará uma pasta `dist-localweb/` com todos os arquivos otimizados.

---

## 📤 Passo 2: Upload via FTP

### Opção A: Via FileZilla (Recomendado)

1. Abra o FileZilla
2. Conecte usando suas credenciais FTP da Localweb:
   - **Host:** ftp.seudominio.com.br
   - **Usuário:** seu_usuario
   - **Senha:** sua_senha
   - **Porta:** 21

3. No painel direito, navegue até: `public_html/`

4. No painel esquerdo, abra a pasta: `dist-localweb/`

5. Selecione TODOS os arquivos dentro de `dist-localweb/` e arraste para `public_html/`

### Opção B: Via File Manager da Localweb

1. Acesse o painel da Localweb
2. Vá em "Gerenciador de Arquivos"
3. Entre na pasta `public_html/`
4. Faça upload de todos os arquivos da pasta `dist-localweb/`

---

## ✅ Passo 3: Verificar Estrutura

Após o upload, sua pasta `public_html/` deve estar assim:

```
public_html/
├── index.html           ← Página principal
├── .htaccess            ← IMPORTANTE! Redirecionamento de rotas
├── assets/              ← CSS, JS e imagens
│   ├── index-[hash].js
│   ├── index-[hash].css
│   ├── vendor-[hash].js
│   └── ...
└── vite.svg
```

---

## 🔍 Passo 4: Testar

1. Acesse seu domínio: `https://seudominio.com.br`
2. Navegue entre as páginas (Início, Quem Somos, Serviços, etc)
3. Atualize a página (F5) em diferentes seções
4. Verifique se as imagens e estilos carregaram

---

## 🐛 Solução de Problemas

### Página em branco

**Problema:** Página carrega mas fica em branco  
**Solução:** 
- Abra o Console do Navegador (F12)
- Veja se há erros de carregamento de assets
- Verifique se TODOS os arquivos foram enviados

### Erro 404 ao navegar

**Problema:** Ao acessar `/servicos` diretamente, dá erro 404  
**Solução:** 
- Certifique-se de que o arquivo `.htaccess` foi enviado
- Verifique se ele está na mesma pasta que `index.html`
- Confirme que o arquivo não está oculto (ative "mostrar arquivos ocultos" no FTP)

### CSS/JS não carrega

**Problema:** Site carrega mas sem estilos  
**Solução:** 
- Verifique se a pasta `assets/` foi enviada completamente
- Confirme que o arquivo `.htaccess` está presente
- Limpe o cache do navegador (Ctrl + Shift + Del)

### Imagens não aparecem

**Problema:** Logos e imagens não carregam  
**Solução:** 
- Verifique se os arquivos de imagem estão na pasta `assets/`
- Confirme que todos os arquivos .png foram enviados
- Teste acessar a imagem diretamente: `seudominio.com.br/assets/logo.png`

---

## 🔄 Atualizações Futuras

Quando precisar atualizar o site:

1. Faça as alterações no código
2. Execute novamente: `bash build-localweb.sh`
3. Substitua os arquivos em `public_html/` pelos novos de `dist-localweb/`

**Dica:** Mantenha backup dos arquivos antigos antes de substituir!

---

## 📱 Hospedagem em Subpasta

Se você quiser hospedar em uma subpasta (ex: `seudominio.com.br/nexttrust`):

1. Edite `vite.config.localweb.ts` e altere:
   ```ts
   base: "/nexttrust/",
   ```

2. Edite `public/.htaccess` e altere:
   ```apache
   RewriteBase /nexttrust/
   RewriteRule . /nexttrust/index.html [L]
   ```

3. Refaça o build: `bash build-localweb.sh`

4. Envie os arquivos para `public_html/nexttrust/`

---

## 🌐 Domínio Personalizado

Se você tiver um domínio próprio (ex: nexttrust.com.br):

1. Configure o DNS no painel da Localweb
2. Aponte para o seu servidor
3. Aguarde propagação (até 48h)
4. Acesse via seu domínio

---

## 📞 Suporte

- **Localweb:** https://www.locaweb.com.br/suporte/
- **FileZilla:** https://filezilla-project.org/
- **Documentação Vite:** https://vite.dev/guide/static-deploy

---

## ✨ Otimizações Incluídas

✅ Build minificado e otimizado  
✅ Code splitting automático  
✅ GZIP habilitado via .htaccess  
✅ Cache de assets configurado  
✅ Roteamento SPA funcionando  
✅ Compatível com hospedagem compartilhada  

**Boa sorte com seu deploy! 🚀**
