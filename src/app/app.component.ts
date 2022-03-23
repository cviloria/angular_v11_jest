import { Component } from "@angular/core";
import { BcHeaderNavItem } from "bancolombia-design-system/bc-header";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	title = "codigoAsesor";
	orientation = "";
	selected = "valorPrueba1";
	companyList: BcHeaderNavItem[] = [
		{ icon: "store", text: "Company 1", subText: "Nit: 1111111-1" },
		{ icon: "store", text: "Company 2", subText: "Nit: 2222222-2" },
		{ icon: "store", text: "Company 3", subText: "Nit: 3333333-3" }
	];

	logout() {
		console.log("salir");
	}

	changeCompany(res: CustomEvent) {
		alert("company: " + JSON.stringify(res.detail));
	}
	onChangeTab(ev){}

	showSelected(event: any) {
		console.log(event)
		this.selected = event;
	}
}
