import { PrinterService } from 'src/printer/printer.service';
export declare class ReportsService {
    private readonly printer;
    constructor(printer: PrinterService);
    getBillReport(): Promise<PDFKit.PDFDocument>;
}
