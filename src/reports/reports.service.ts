import { Injectable } from '@nestjs/common';
import {billReport} from './documents/bill.report';
import {PrinterService} from 'src/printer/printer.service';

@Injectable()
export class ReportsService {
    constructor(private readonly printer: PrinterService) {}

    async getBillReport(): Promise<PDFKit.PDFDocument> {
        const docDefinition = billReport();
        
        return this.printer.createPdf(docDefinition);
    }
    
}
