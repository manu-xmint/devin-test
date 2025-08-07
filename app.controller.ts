import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Health check endpoint' })
  @ApiResponse({ status: 200, description: 'API is running' })
  getHealth(): { message: string; timestamp: string; version: string } {
    return this.appService.getHealth();
  }

  @Get('status')
  @ApiOperation({ summary: 'Detailed status information' })
  @ApiResponse({ status: 200, description: 'Detailed API status' })
  getStatus(): { 
    status: string; 
    uptime: number; 
    environment: string;
    integrations: { rippling: string };
  } {
    return this.appService.getStatus();
  }
}

