import { TDocumentDefinitions } from 'pdfmake/interfaces';
export declare class PrinterService {
    private printer;
    createPdf(docDefinition: TDocumentDefinitions): PDFKit.PDFDocument;
}
