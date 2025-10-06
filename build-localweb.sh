#!/bin/bash

echo "🚀 Iniciando build para Localweb..."

# Limpar pasta de build anterior
if [ -d "dist-localweb" ]; then
  echo "🗑️  Limpando build anterior..."
  rm -rf dist-localweb
fi

# Build do frontend
echo "📦 Fazendo build do frontend..."
npx vite build --config vite.config.localweb.ts

# Copiar .htaccess para a pasta de build
echo "📋 Copiando .htaccess..."
cp public/.htaccess dist-localweb/

echo "✅ Build concluído!"
echo ""
echo "📁 Arquivos prontos em: dist-localweb/"
echo ""
echo "📤 PRÓXIMOS PASSOS:"
echo "1. Acesse o painel da Localweb via FTP (FileZilla ou similar)"
echo "2. Navegue até a pasta: public_html/"
echo "3. Envie TODOS os arquivos da pasta 'dist-localweb/' para 'public_html/'"
echo "4. Certifique-se de que o arquivo .htaccess foi enviado"
echo ""
echo "🌐 Seu site estará disponível em: seudominio.com.br"
