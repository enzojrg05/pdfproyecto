import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { PrinterModule } from './printer/printer.module';

@Module({
  imports: [ReportsModule, PrinterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
