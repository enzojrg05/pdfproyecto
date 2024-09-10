import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { PrinterService} from 'src/printer/printer.service';
import { PrinterModule} from 'src/printer/printer.module';

@Module({
  controllers: [ReportsController],
  providers: [ReportsService, PrinterService],
  imports: [PrinterModule],
})
export class ReportsModule {}
