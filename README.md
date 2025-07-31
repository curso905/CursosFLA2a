# 🤖 Fuerza Laboral Artificial - Landing Page

Una landing page moderna y atractiva para cursos de automatización de procesos utilizando agentes y herramientas de inteligencia artificial. Diseñada específicamente para emprendedores que quieren explorar el mundo de la IA.

## ✨ Características

### 🎨 Diseño Moderno
- **Estilos inspirados en Tailwind CSS** con gradientes y sombras modernas
- **Diseño completamente responsivo** que se adapta a todos los dispositivos
- **Animaciones suaves** y efectos visuales atractivos
- **Tipografía Inter** para una lectura clara y profesional

### 🚀 Funcionalidades Interactivas
- **Navegación suave** entre secciones
- **Menú móvil** con animaciones
- **Modales interactivos** para demo y contacto
- **Formulario de contacto** funcional
- **Animaciones de contador** para estadísticas
- **Efectos parallax** en elementos flotantes
- **Efecto de escritura** en el título principal

### 📱 Responsive Design
- **Mobile-first approach**
- **Breakpoints optimizados** para tablets y desktop
- **Navegación adaptativa** para dispositivos móviles
- **Imágenes y elementos escalables**

### 🎯 Secciones Principales

1. **Hero Section** - Presentación impactante con robot animado
2. **Características** - Ventajas de los cursos
3. **Cursos** - Tres niveles de formación
4. **Beneficios** - Transformación empresarial con IA
5. **Testimonios** - Experiencias de estudiantes
6. **Call-to-Action** - Llamada a la acción
7. **Footer** - Información de contacto y enlaces

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript ES6+** - Interactividad y animaciones
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografía Inter

## 📁 Estructura del Proyecto

```
FLA 2 Cursor WebPage/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación
```

## 🚀 Cómo Usar

### Instalación Local
1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador web
3. ¡Listo! La página está completamente funcional

### Personalización
- **Colores**: Modifica las variables CSS en `:root` dentro de `styles.css`
- **Contenido**: Edita el texto en `index.html`
- **Funcionalidad**: Ajusta el comportamiento en `script.js`

## 🎨 Personalización de Colores

Las variables CSS principales están definidas en `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Color principal */
    --secondary-color: #8b5cf6;    /* Color secundario */
    --accent-color: #06b6d4;       /* Color de acento */
    --success-color: #10b981;      /* Color de éxito */
    --text-primary: #1f2937;       /* Texto principal */
    --text-secondary: #6b7280;     /* Texto secundario */
    --bg-primary: #ffffff;         /* Fondo principal */
    --bg-secondary: #f9fafb;       /* Fondo secundario */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Funcionalidades JavaScript

### Navegación
- Menú hamburguesa para móviles
- Scroll suave entre secciones
- Efectos de navbar al hacer scroll

### Modales
- Modal de demo con video placeholder
- Formulario de contacto funcional
- Validación de campos
- Simulación de envío

### Animaciones
- Contadores animados para estadísticas
- Efectos de aparición al hacer scroll
- Animaciones de hover en tarjetas
- Efecto de escritura en el título

### Performance
- Debouncing en eventos de scroll
- Lazy loading de animaciones
- Optimización de reflows

## 🎨 Componentes CSS

### Botones
- `.btn-primary` - Botón principal con gradiente
- `.btn-secondary` - Botón secundario con borde
- `.btn-outline` - Botón con contorno
- `.btn-large` - Botón de tamaño grande

### Tarjetas
- `.feature-card` - Tarjetas de características
- `.course-card` - Tarjetas de cursos
- `.testimonial-card` - Tarjetas de testimonios

### Secciones
- `.hero` - Sección principal
- `.features` - Sección de características
- `.courses` - Sección de cursos
- `.benefits` - Sección de beneficios
- `.testimonials` - Sección de testimonios
- `.cta` - Call-to-action
- `.footer` - Pie de página

## 🔧 Configuración Avanzada

### Agregar Nuevos Cursos
Edita la sección de cursos en `index.html`:

```html
<div class="course-card">
    <div class="course-badge">Nuevo</div>
    <div class="course-icon">
        <i class="fas fa-star"></i>
    </div>
    <h3>Nuevo Curso</h3>
    <p>Descripción del curso...</p>
    <ul class="course-features">
        <li><i class="fas fa-check"></i> Característica 1</li>
        <li><i class="fas fa-check"></i> Característica 2</li>
    </ul>
    <button class="btn btn-primary">Inscribirse</button>
</div>
```

### Modificar Animaciones
Ajusta las animaciones en `styles.css`:

```css
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
```

## 🌟 Características Destacadas

### Robot Animado
- Cabeza con ojos que parpadean
- Cuerpo con líneas de circuito animadas
- Efecto de pulso continuo

### Tarjetas Flotantes
- Animación de flotación
- Efecto parallax al hacer scroll
- Diseño glassmorphism

### Estadísticas Animadas
- Contadores que se animan al entrar en vista
- Números con gradiente
- Animación suave y profesional

## 📞 Soporte

Para soporte técnico o personalizaciones adicionales:
- Email: info@fla.com
- Teléfono: +1 (555) 123-4567

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para proyectos comerciales y personales.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**¿Listo para transformar tu negocio con IA?** 🚀

*Desarrollado con ❤️ para emprendedores que quieren liderar el futuro de la automatización.* 