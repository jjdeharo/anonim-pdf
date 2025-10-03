# Anonimizador de PDF

Aplicación web local para anonimizar documentos PDF dibujando rectángulos sobre la vista previa. Todo el procesamiento ocurre en el navegador, sin subir archivos a servidores externos.

## Características

- Carga documentos mediante arrastre y suelta o clic.
- Herramientas para colocar rectángulos opacos sobre las páginas.
- Exportación a un PDF rasterizado con las áreas cubiertas.
- Controles de zoom y máscara configurables.
- Compatible con modos claro y oscuro.

## Uso

1. Abre `index.html` en tu navegador de escritorio.
2. Arrastra un archivo PDF a la zona de carga o haz clic para seleccionarlo.
3. Dibuja los rectángulos sobre cada página. Puedes ajustar grosor, opacidad y color.
4. Activa "Aplicar el rectángulo a todas las páginas" si necesitas repetir la misma cobertura.
5. Pulsa **Exportar PDF anonimizado** para descargar el nuevo archivo.

## Desarrollo

```bash
npm install
npm test
```

La aplicación utiliza pdf.js y jsPDF desde la carpeta `vendor`, por lo que funciona sin conexión.
