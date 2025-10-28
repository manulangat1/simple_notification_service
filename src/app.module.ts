import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResendModule } from './resend/resend.module';

@Module({
  imports: [ResendModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
