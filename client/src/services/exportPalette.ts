import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import convert from 'color-convert';

export const exportPalette = async (colors: string[]) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const { height } = page.getSize();

  colors.forEach((hex, i) => {
    const y = height - 40 - i * 40;
    const [r, g, b] = convert.hex.rgb(hex).map(c => c / 255); // 0–1 range for pdf-lib

    // Color swatches
    page.drawRectangle({
      x: 10, y: y - 12,
      width: 15, height: 22,
      color: rgb(r, g, b),
    });

    // Color codes
    page.drawText(`HEX: ${hex}`, { x: 30, y, size: 11, font });
    page.drawText(`CMYK: ${convert.hex.cmyk(hex)}`, { x: 30, y: y - 12, size: 11, font });
  });
  
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'palette.pdf';
  a.click();
  URL.revokeObjectURL(url);
};