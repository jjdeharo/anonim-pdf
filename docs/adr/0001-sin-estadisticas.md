# 1. El anonimizador no recoge estadísticas de uso

Fecha: 2026-10-30 · Estado: aceptado

## Contexto

Desde marzo de 2026 el anonimizador avisaba de cada carga de la página a un contador propio en bilateria.org (`track.php`, por JSONP), que contaba como mucho una visita por navegador cada 30 minutos. Con cada aviso iba la página de procedencia. No usaba cookies ni guardaba la IP, y el aviso «Privacidad» de los créditos lo explicaba. Los documentos nunca salían del navegador.

La evaluación con la rúbrica VCER de la guía «Vibe coding responsable» puntúa con 0 el punto de datos personales si el recurso lleva analítica, sea propia o ajena. Además, la página de procedencia puede delatar el aula virtual o la plataforma desde la que el docente abre la herramienta, y una aplicación pensada para proteger datos del alumnado no debe comunicar nada que no necesite.

## Decisión

En la versión 1.6.0 se retira toda la analítica de `index.html`: las constantes del contador, la llamada al cargar la página y las funciones que preparaban y enviaban la petición. El aviso «Privacidad» de los créditos se mantiene y dice ahora, en los cinco idiomas, que la aplicación no recoge estadísticas de uso ni envía archivos ni datos a ningún servidor. El README describe lo mismo.

## Alternativas descartadas

- **Mantener el contador propio con el aviso de privacidad.** Aunque no usaba cookies ni guardaba la IP, seguía enviando la página de procedencia, y la rúbrica VCER puntúa con 0 cualquier analítica.

## Consecuencias

- Ya no hay cifras de uso del anonimizador.
- La aplicación no hace ninguna petición fuera de su propio sitio: pdf.js, jsPDF y JSZip están en `vendor/`.
- Los datos del contador en el alojamiento de IONOS (`/app/estadistica/anonim-pdf/`) se archivan y se borran del servidor aparte.
- En los navegadores que ya la usaban queda la clave `analytics:last-visit:anonim-pdf` en `localStorage`, que ya no se lee ni se envía.
