# 🚀 Despliegue en Railway - Unicca Moda

## Configuración inicial

### 1. Preparar el repositorio
```bash
# Asegúrate de tener Git inicializado
git init
git add .
git commit -m "Initial commit - Unicca Moda website"

# Crear repositorio en GitHub
# Subir el código al repositorio
```

### 2. Variables de entorno
Copia `.env.example` a `.env.local` y configura las variables:

```bash
# Google Analytics 4 (opcional)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Meta Pixel (opcional)
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXXX

# URLs de Google Reviews (pendientes)
GOOGLE_REVIEWS_VIEW_URL=https://www.google.com/maps/...
GOOGLE_REVIEWS_WRITE_URL=https://www.google.com/maps/...
```

### 3. Despliegue en Railway

#### Opción A: Desde GitHub (Recomendado)
1. Ve a [Railway.app](https://railway.app) y crea una cuenta
2. Haz clic en "New Project" → "Deploy from GitHub repo"
3. Selecciona tu repositorio de Unicca Moda
4. Railway detectará automáticamente que es un proyecto Next.js

#### Opción B: Desde CLI
```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Crear proyecto
railway init unicca-moda-web

# Desplegar
railway up
```

### 4. Configuración de dominio
1. En el dashboard de Railway, ve a "Settings" → "Domains"
2. Añade tu dominio personalizado (ej: uniccamoda.com)
3. Configura los DNS según las instrucciones de Railway

### 5. Variables de entorno en Railway
En el dashboard de Railway:
1. Ve a "Variables" en tu proyecto
2. Añade las variables del `.env.example`
3. Redeploy para aplicar los cambios

## Optimizaciones de Railway

### Build Settings
- **Builder**: Nixpacks (automático)
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

### Environment Variables
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

## Monitoreo y mantenimiento

### Logs
```bash
# Ver logs en tiempo real
railway logs

# Ver logs de una deployment específica
railway logs --deployment <deployment-id>
```

### Redeploy
```bash
# Redeploy manual
railway up

# O desde el dashboard: "Deploy" → "Redeploy"
```

## Checklist pre-despliegue

- [ ] Todas las páginas funcionan correctamente
- [ ] Imágenes optimizadas y con alt texts
- [ ] Schema JSON-LD presente
- [ ] Meta tags y Open Graph configurados
- [ ] Analytics configurados (opcional)
- [ ] Sitemap.xml y robots.txt generados
- [ ] Variables de entorno configuradas
- [ ] Dominio configurado
- [ ] SSL habilitado (automático en Railway)

## Troubleshooting

### Error de build
- Verifica que todas las dependencias estén en `package.json`
- Asegúrate de que `next.config.ts` esté correctamente configurado
- Revisa los logs de Railway

### Problemas de performance
- Habilita la compresión en Railway
- Optimiza imágenes con Next.js Image component
- Configura el caching apropiado

### Analytics no funcionan
- Verifica que las variables `NEXT_PUBLIC_GA4_ID` y `NEXT_PUBLIC_META_PIXEL_ID` estén configuradas
- Asegúrate de que los IDs sean válidos

## URLs importantes

- **Sitio web**: https://unicca-moda.com
- **Analytics**: Google Analytics 4
- **Meta**: Meta Business Manager
- **Railway Dashboard**: https://railway.app

## Contacto

Para soporte técnico del despliegue, contacta con el desarrollador o consulta la documentación de Railway.