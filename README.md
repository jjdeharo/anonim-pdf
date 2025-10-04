# Anonimizador de PDF

Aplicación web local para anonimizar PDFs o imágenes dibujando rectángulos sobre la vista previa. Todo el procesamiento ocurre en el navegador, sin subir archivos a servidores externos.

## Características

- Carga archivos mediante arrastre y suelta o clic (PDF, PNG, JPG, WEBP...).
- Herramientas para situar rectángulos opacos y controlar tamaño, color y opacidad.
- Exportación a PDF anonimizado, imagen PNG única o ZIP con un PNG por página.
- Controles de zoom, máscara configurable y modo de vista claro/oscuro.
- Funcionamiento 100 % local con pdf.js y jsPDF incluidos en `vendor/`.

## Uso

1. Abre `index.html` en tu navegador de escritorio.
2. Arrastra un PDF o una imagen a la zona de carga, o haz clic para seleccionarlo.
3. Dibuja los rectángulos sobre cada página. Ajusta grosor, opacidad y color según necesites.
4. Usa "Aplicar el rectángulo a todas las páginas" para replicar una cobertura en todo el documento.
5. Elige el formato de exportación (PDF anonimizado, PNG único o ZIP con PNG por página) y descarga el resultado.

> ⚠️ **Aviso para el profesorado:** Esta aplicación ofrece herramientas para anonimizar manualmente un PDF o una imagen, ocultando los datos identificativos del alumnado antes de generar un nuevo documento. La inteligencia artificial puede apoyar con análisis parciales o nuevas perspectivas, pero **no sustituye la labor docente**: evaluar, juzgar pedagógicamente y calificar sigue siendo responsabilidad exclusiva del profesorado.

## Desarrollo

```bash
npm install
npx playwright install --with-deps # primera vez en un entorno nuevo
npx playwright test
```

Durante el desarrollo puedes servir el proyecto con `npx http-server .` o abrir `index.html` directamente en el navegador. La aplicación utiliza pdf.js y jsPDF desde la carpeta `vendor`, por lo que funciona sin conexión.

## Licencias

- **Código**: publicado bajo [GNU Affero General Public License v3.0](LICENSE.txt). © 2025 Juan José de Haro.
- **Contenidos educativos** (textos y recursos propios) disponibles bajo [Creative Commons Atribución 4.0 Internacional](https://creativecommons.org/licenses/by/4.0/), salvo indicación en contrario.
