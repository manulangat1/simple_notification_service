import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailtrapModule } from './mailtrap/mailtrap.module';
import { AppConfigModule } from './app-config/app-config.module';

@Module({
  imports: [MailtrapModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
