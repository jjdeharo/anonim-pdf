import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

const fileUrl = pathToFileURL(path.resolve(__dirname, '..', 'index.html')).href;
const SAMPLE_PDF_BASE64 = `JVBERi0xLjMKJbrfrOAKMyAwIG9iago8PC9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL1Jlc291cmNlcyAyIDAgUgovTWVkaWFCb3ggWzAgMCA1OTUuMjc5OTk5OTk5OTk5OTcyNyA4NDEuODg5OTk5OTk5OTk5OTg2NF0KL0NvbnRlbnRzIDQgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9MZW5ndGggMjA4Cj4+CnN0cmVhbQowLjIwMDAyNSB3CjAgRwpCVAovRjEgMTQgVGYKMTYuMDk5OTk5OTk5OTk5OTk3OSBUTAowIGcKNDAuIDc2MS44ODk5OTk5OTk5OTk5ODY0IFRkCihUcmFiYWpvIGRlIHBydWViYSkgVGoKRVQKQlQKL0YxIDE0IFRmCjE2LjA5OTk5OTk5OTk5OTk5NzkgVEwKMCBnCjQwLiA3MzEuODg5OTk5OTk5OTk5OTg2NCBUZAooQWx1bW5vOiBOb21icmUgQXBlbGxpZG8pIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKNSAwIG9iago8PC9UeXBlIC9QYWdlCi9QYXJlbnQgMSAwIFIKL1Jlc291cmNlcyAyIDAgUgovTWVkaWFCb3ggWzAgMCA1OTUuMjc5OTk5OTk5OTk5OTcyNyA4NDEuODg5OTk5OTk5OTk5OTg2NF0KL0NvbnRlbnRzIDYgMCBSCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9MZW5ndGggMTE1Cj4+CnN0cmVhbQowLjIwMDAyNSB3CjAgRwpCVAovRjEgMTQgVGYKMTYuMDk5OTk5OTk5OTk5OTk3OSBUTAowIGcKNDAuIDc2MS44ODk5OTk5OTk5OTk5ODY0IFRkCihTZWd1bmRhIHDhZ2luYSBkZSBwcnVlYmEpIFRqCkVUCmVuZHN0cmVhbQplbmRvYmoKMSAwIG9iago8PC9UeXBlIC9QYWdlcwovS2lkcyBbMyAwIFIgNSAwIFIgXQovQ291bnQgMgo+PgplbmRvYmoKNyAwIG9iago8PAovVHlwZSAvRm9udAovQmFzZUZvbnQgL0hlbHZldGljYQovU3VidHlwZSAvVHlwZTEKL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcKL0ZpcnN0Q2hhciAzMgovTGFzdENoYXIgMjU1Cj4+CmVuZG9iago4IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9CYXNlRm9udCAvSGVsdmV0aWNhLUJvbGQKL1N1YnR5cGUgL1R5cGUxCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCi9GaXJzdENoYXIgMzIKL0xhc3RDaGFyIDI1NQo+PgplbmRvYmoKOSAwIG9iago8PAovVHlwZSAvRm9udAovQmFzZUZvbnQgL0hlbHZldGljYS1PYmxpcXVlCi9TdWJ0eXBlIC9UeXBlMQovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwovRmlyc3RDaGFyIDMyCi9MYXN0Q2hhciAyNTUKPj4KZW5kb2JqCjEwIDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9CYXNlRm9udCAvSGVsdmV0aWNhLUJvbGRPYmxpcXVlCi9TdWJ0eXBlIC9UeXBlMQovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwovRmlyc3RDaGFyIDMyCi9MYXN0Q2hhciAyNTUKPj4KZW5kb2JqCjExIDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9CYXNlRm9udCAvQ291cmllcgovU3VidHlwZSAvVHlwZTEKL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcKL0ZpcnN0Q2hhciAzMgovTGFzdENoYXIgMjU1Cj4+CmVuZG9iagoxMiAwIG9iago8PAovVHlwZSAvRm9udAovQmFzZUZvbnQgL0NvdXJpZXItQm9sZAovU3VidHlwZSAvVHlwZTEKL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcKL0ZpcnN0Q2hhciAzMgovTGFzdENoYXIgMjU1Cj4+CmVuZG9iagoxMyAwIG9iago8PAovVHlwZSAvRm9udAovQmFzZUZvbnQgL0NvdXJpZXItT2JsaXF1ZQovU3VidHlwZSAvVHlwZTEKL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcKL0ZpcnN0Q2hhciAzMgovTGFzdENoYXIgMjU1Cj4+CmVuZG9iagoxNCAwIG9iago8PAovVHlwZSAvRm9udAovQmFzZUZvbnQgL0NvdXJpZXItQm9sZE9ibGlxdWUKL1N1YnR5cGUgL1R5cGUxCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCi9GaXJzdENoYXIgMzIKL0xhc3RDaGFyIDI1NQo+PgplbmRvYmoKMTUgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0Jhc2VGb250IC9UaW1lcy1Sb21hbgovU3VidHlwZSAvVHlwZTEKL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcKL0ZpcnN0Q2hhciAzMgovTGFzdENoYXIgMjU1Cj4+CmVuZG9iagoxNiAwIG9iago8PAovVHlwZSAvRm9udAovQmFzZUZvbnQgL1RpbWVzLUJvbGQKL1N1YnR5cGUgL1R5cGUxCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCi9GaXJzdENoYXIgMzIKL0xhc3RDaGFyIDI1NQo+PgplbmRvYmoKMTcgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0Jhc2VGb250IC9UaW1lcy1JdGFsaWMKL1N1YnR5cGUgL1R5cGUxCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCi9GaXJzdENoYXIgMzIKL0xhc3RDaGFyIDI1NQo+PgplbmRvYmoKMTggMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0Jhc2VGb250IC9UaW1lcy1Cb2xkSXRhbGljCi9TdWJ0eXBlIC9UeXBlMQovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwovRmlyc3RDaGFyIDMyCi9MYXN0Q2hhciAyNTUKPj4KZW5kb2JqCjE5IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9CYXNlRm9udCAvWmFwZkRpbmdiYXRzCi9TdWJ0eXBlIC9UeXBlMQovRmlyc3RDaGFyIDMyCi9MYXN0Q2hhciAyNTUKPj4KZW5kb2JqCjIwIDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9CYXNlRm9udCAvU3ltYm9sCi9TdWJ0eXBlIC9UeXBlMQovRmlyc3RDaGFyIDMyCi9MYXN0Q2hhciAyNTUKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9Gb250IDw8Ci9GMSA3IDAgUgovRjIgOCAwIFIKL0YzIDkgMCBSCi9GNCAxMCAwIFIKL0Y1IDExIDAgUgovRjYgMTIgMCBSCi9GNyAxMyAwIFIKL0Y4IDE0IDAgUgovRjkgMTUgMCBSCi9GMTAgMTYgMCBSCi9GMTEgMTcgMCBSCi9GMTIgMTggMCBSCi9GMTMgMTkgMCBSCi9GMTQgMjAgMCBSCj4+Ci9YT2JqZWN0IDw8Cj4+Cj4+CmVuZG9iagoyMSAwIG9iago8PAovUHJvZHVjZXIgKGpzUERGIDIuNS4xKQovQ3JlYXRpb25EYXRlIChEOjIwMjUxMDAzMDcyNTIyKzAyJzAwJykKPj4KZW5kb2JqCjIyIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAxIDAgUgovT3BlbkFjdGlvbiBbMyAwIFIgL0ZpdEggbnVsbF0KL1BhZ2VMYXlvdXQgL09uZUNvbHVtbgo+PgplbmRvYmoKeHJlZgowIDIzCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDcxNCAwMDAwMCBuIAowMDAwMDAyNTM5IDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDE1MiAwMDAwMCBuIAowMDAwMDAwNDExIDAwMDAwIG4gCjAwMDAwMDA1NDggMDAwMDAgbiAKMDAwMDAwMDc3NyAwMDAwMCBuIAowMDAwMDAwOTAyIDAwMDAwIG4gCjAwMDAwMDEwMzIgMDAwMDAgbiAKMDAwMDAwMTE2NSAwMDAwMCBuIAowMDAwMDAxMzAzIDAwMDAwIG4gCjAwMDAwMDE0MjcgMDAwMDAgbiAKMDAwMDAwMTU1NiAwMDAwMCBuIAowMDAwMDAxNjg4IDAwMDAwIG4gCjAwMDAwMDE4MjQgMDAwMDAgbiAKMDAwMDAwMTk1MiAwMDAwMCBuIAowMDAwMDAyMDc5IDAwMDAwIG4gCjAwMDAwMDIyMDggMDAwMDAgbiAKMDAwMDAwMjM0MSAwMDAwMCBuIAowMDAwMDAyNDQzIDAwMDAwIG4gCjAwMDAwMDI3ODkgMDAwMDAgbiAKMDAwMDAwMjg3NSAwMDAwMCBuIAp0cmFpbGVyCjw8Ci9TaXplIDIzCi9Sb290IDIyIDAgUgovSW5mbyAyMSAwIFIKL0lEIFsgPEQ3Rjk2RTc2Q0U0N0U2QjkwMUI5NkRBRUU0QTk3MERCPiA8RDdGOTZFNzZDRTQ3RTZCOTAxQjk2REFFRTRBOTcwREI+IF0KPj4Kc3RhcnR4cmVmCjI5NzkKJSVFT0Y=`;
const SAMPLE_PDF_BUFFER = Buffer.from(SAMPLE_PDF_BASE64, 'base64');

test('loads without console errors and enables export upon sample load', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(`[console] ${msg.text()}`);
  });
  page.on('pageerror', err => {
    errors.push(`[pageerror] ${err.message}`);
  });

  await page.goto(fileUrl);
  await page.waitForFunction(() => window.pdfjsLib !== undefined, null, { timeout: 5000 });

  const input = await page.$('#file');
  if (!input) throw new Error('file input not found');
  await input.setInputFiles({
    name: 'demo.pdf',
    mimeType: 'application/pdf',
    buffer: SAMPLE_PDF_BUFFER,
  });

  await page.waitForFunction(() => document.querySelector('#export')?.hasAttribute('disabled') === false, null, { timeout: 5000 });

  const exportDisabled = await page.$eval('#export', el => el.hasAttribute('disabled'));
  expect(exportDisabled).toBe(false);
  expect(errors).toEqual([]);
});

test('renders user-provided PDF without blank canvas', async ({ page }) => {
  const errors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto(fileUrl);
  await page.waitForFunction(() => window.pdfjsLib !== undefined, null, { timeout: 5000 });

  const input = await page.$('#file');
  if (!input) throw new Error('file input not found');
  await input.setInputFiles({
    name: 'contenido.pdf',
    mimeType: 'application/pdf',
    buffer: SAMPLE_PDF_BUFFER,
  });

  await page.waitForFunction(() => document.querySelector('#pagesContainer .pageView .pdfPageCanvas') !== null, null, { timeout: 5000 });
  await page.waitForTimeout(500);

  const hasContent = await page.evaluate(() => {
    const canvas = document.querySelector('#pagesContainer .pageView .pdfPageCanvas');
    if (!(canvas instanceof HTMLCanvasElement)) return false;
    if (canvas.width === 0 || canvas.height === 0) return false;
    const ctx = canvas.getContext('2d');
    if (!ctx) return false;
    for (let y = 20; y < canvas.height; y += 40) {
      for (let x = 20; x < canvas.width; x += 40) {
        const [r, g, b, a] = ctx.getImageData(x, y, 1, 1).data;
        if (a !== 0 && !(r === 255 && g === 255 && b === 255)) {
          return true;
        }
      }
    }
    return false;
  });

  expect({ errors, hasContent }).toEqual({ errors: [], hasContent: true });
});
