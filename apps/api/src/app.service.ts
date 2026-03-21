/* biome-ignore-all assist/source/organizeImports: Nest DI requires runtime class imports */
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
	getHello(): string {
		return "Hello World!";
	}
}
