# Repository Guidelines

## Project Structure & Module Organization
El núcleo de la aplicación vive en `index.html`, que combina marcado, estilos y lógica JavaScript para el visor y editor de rectángulos. Los recursos estáticos de terceros (pdf.js y jsPDF) residen en `vendor/`; mantenlos versionados junto al código porque la app debe poder funcionar sin conexión. Las pruebas end-to-end se agrupan en `tests/`, usando Playwright; añade nuevos escenarios creando archivos `*.spec.ts` en esa carpeta. La carpeta `node_modules/` es generada y no debe editarse manualmente.

## Build, Test, and Development Commands
Ejecuta `npm install` tras clonar o actualizar dependencias. Para preparar Playwright en un entorno nuevo, corre `npx playwright install --with-deps`. Las pruebas automatizadas se lanzan con `npx playwright test` (usa `npx playwright test tests/anonim.spec.ts --headed` cuando necesites depurar visualmente). Durante el desarrollo abre `index.html` directamente en el navegador o sirve la raíz con `npx http-server .` para habilitar recarga y controles de zoom.

## Coding Style & Naming Conventions
Sigue el estilo existente: indentación de dos espacios en HTML, CSS embebido y JavaScript. Prefiere `const` y funciones flecha para nuevas utilidades, y encapsula bloques auxiliares como funciones internas en lugar de añadir variables globales. Mantén identificadores y textos visibles en español, usando camelCase para variables JavaScript (`setFileDropStatus`) y kebab-case para atributos o clases CSS (`.panelToggle`). Antes de subir cambios, pasa `npx playwright test` y formatea manualmente si introduces bloques extensos; no hay formateadores automáticos configurados.

## Testing Guidelines
Las pruebas usan `@playwright/test` con expectativas `expect`. Añade escenarios orientados a la interfaz, reutilizando el PDF embebido en `tests/anonim.spec.ts` o generando fixtures en memoria. Nombra cada prueba con el comportamiento observable (`renders user-provided PDF...`) y evita dependencias de red. Si cubres regresiones críticas, documenta el ticket en un comentario breve dentro del spec y valida tanto errores de consola como estados de los botones.

## Commit & Pull Request Guidelines
Los commits siguen el patrón `tipo: resumen` en minúsculas (por ejemplo, `ui: refina panel y selector de archivo` o `feat: soportar imágenes`). Agrupa cambios lógicamente y usa descripciones breves en español. En cada pull request describe el contexto, enlaza incidencias relevantes y añade capturas cuando modifiques la interfaz. Confirma que `npx playwright test` pasa y que la app continúa funcionando sin conexión; menciona cualquier limitación conocida en la sección de notas de la PR.
