import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BcFooterModule } from "bancolombia-design-system/bc-footer";

import { BcIconModule } from "bancolombia-design-system/bc-icon";
import { BcHeaderModule } from "bancolombia-design-system/bc-header";
import { BcButtonModule } from "bancolombia-design-system/bc-button";
import { BcInputModule } from "bancolombia-design-system/bc-input";
import { BcBtnGroupModule } from "bancolombia-design-system/bc-button-group";
import { BcTabsModule } from "bancolombia-design-system/bc-tabs-group";
import { BcLoaderModule } from "bancolombia-design-system/bc-loader";
import { BcNotificationModule } from "bancolombia-design-system/bc-notification";


@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BcFooterModule,
		BcIconModule.forRoot({
			path: "https://library-sdb.apps.bancolombia.com/bds/2.1.3"
		}),
		BcHeaderModule,
		BcButtonModule,
		BcInputModule,
		BcButtonModule,
		BcBtnGroupModule,
		BcTabsModule,
		BcLoaderModule,
		BcNotificationModule

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
