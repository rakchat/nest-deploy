import 'dotenv/config';
import { connectDatabase } from './database/database';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { PhotoModule } from './photo/photo.module';
import { UsersModule } from './users/users.module';

@Module({
  // ~! database
  imports: [
    ...connectDatabase,
    UsersModule,
    // PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
