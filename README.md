# Innova Chem Labs

Sitio web de marketing para **Innova Chem**, consultora química especializada en reformulación, desarrollo I+D, pruebas de estabilidad y documentación técnica. Desarrollado con TanStack Start sobre Vite y desplegado en Cloudflare Workers.

## Stack tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) v1 + React 19 |
| Build | Vite 7 + Bun |
| Estilos | Tailwind CSS v4 + shadcn/ui (New York) |
| Animaciones | Framer Motion 12 |
| Formularios | React Hook Form + Zod |
| Email | [Resend](https://resend.com) (server functions) |
| Despliegue | Cloudflare Workers (Wrangler) |
| Lenguaje | TypeScript 5 (strict mode) |

## Estructura del proyecto

```
src/
├── assets/          # Imágenes del laboratorio (lab-1..3.jpg)
├── components/
│   ├── ui/          # Componentes shadcn/ui (46 archivos)
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── BentoServices.tsx
│   ├── ProcessSection.tsx
│   ├── LabSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── hooks/
│   └── use-mobile.tsx
├── lib/
│   ├── constants.ts  # Contenido: textos, links, info de contacto
│   └── utils.ts
├── server/
│   └── contact.ts    # Server function: envío de email con Resend
├── routes/
│   ├── __root.tsx    # Layout raíz, meta tags SEO, 404
│   └── index.tsx     # Página principal
└── styles.css        # Tokens de diseño OKLCH + Tailwind
```

## Requisitos previos

- [Bun](https://bun.sh) >= 1.x
- Cuenta en [Resend](https://resend.com) para el formulario de contacto

## Configuración del entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

> Obtené tu API key en [resend.com/api-keys](https://resend.com/api-keys).

## Instalación y desarrollo

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo
bun run dev

# Verificar código
bun run lint
```

La app estará disponible en `http://localhost:3000`.

## Build y preview

```bash
# Build de producción
bun run build

# Preview local del build
bun run preview
```

## Despliegue en Cloudflare Workers

El proyecto está configurado para desplegarse en Cloudflare Workers mediante Wrangler.

```bash
# Instalar Wrangler globalmente (si no lo tenés)
bun add -g wrangler

# Autenticarse con Cloudflare
wrangler login

# Desplegar a producción
wrangler deploy
```

Asegurate de configurar la variable de entorno `RESEND_API_KEY` en el dashboard de Cloudflare Workers o via:

```bash
wrangler secret put RESEND_API_KEY
```

## Secciones del sitio

| Sección | Descripción |
|---------|-------------|
| **Hero** | Titular principal + CTA hacia consultoría por WhatsApp |
| **Servicios** | Grilla bento con 4 servicios: Reformulación, I+D, Estabilidad, Documentación |
| **Proceso** | Timeline de 4 pasos: Diagnóstico → Propuesta → Laboratorio → Escalado |
| **Laboratorio** | Galería de imágenes + estadísticas clave |
| **Contacto** | Formulario con validación Zod + tarjeta de información de contacto |

## Contenido editable

Todo el contenido del sitio (textos, links, info de contacto) está centralizado en [src/lib/constants.ts](src/lib/constants.ts). Para actualizar teléfonos, emails, redes sociales o textos de secciones, modificar ese archivo.

## Variables de diseño

Los tokens de color se definen en formato OKLCH en [src/styles.css](src/styles.css). El esquema de colores soporta modo claro y oscuro mediante clases CSS.

## Contacto

- **Email:** innovachemlabs@gmail.com
- **WhatsApp:** +54 9 11 31232401
- **Instagram:** [@innovachem](https://instagram.com/innovachem)
- **LinkedIn:** [Innova Chem](https://linkedin.com/company/innovachem)
- **Ubicación:** Buenos Aires, Argentina
