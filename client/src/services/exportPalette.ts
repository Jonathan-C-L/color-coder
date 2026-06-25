import type { PaletteColors } from '../types/Color';

export const exportPalette = async (palette: PaletteColors) => {
  const [{ jsPDF }, { default: convert }] = await Promise.all([
    import('jspdf'),
    import('color-convert')
  ]);

  const doc = new jsPDF();

  palette.forEach((hex, i) => {
    const y = 20 + i * 20;
    doc.setFillColor(hex);
    doc.rect(10, y, 15, 22, 'F');
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text(`HEX: ${hex}`, 30, y + 8);
    doc.text(`CMYK: ${convert.hex.cmyk(hex)}`, 30, y + 16);
  });

  doc.save('palette.pdf');
};