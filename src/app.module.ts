import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResendModule } from './resend/resend.module';
import { AppconfigModule } from './appconfig/appconfig.module';

@Module({
  imports: [ResendModule, AppconfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
