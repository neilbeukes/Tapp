import { AcronymService } from "../../service/acronyms/acronym.service";
import { ToastrService } from "ngx-toastr";
import { GeneralLinksService } from "../../service/links/general-links/general-links.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-acronym-modal",
  templateUrl: "./acronym-modal.component.html",
  styleUrls: ["./acronym-modal.component.css"]
})
export class AcronymModalComponent implements OnInit {
  title = "Add acronym";
  acronym: any = {};
  constructor(
    public activeModal: NgbActiveModal,
    private as: AcronymService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  submit() {
    this.addLink();
  }

  addLink() {
    this.as.add(this.acronym).subscribe(res => {
      this.toastr.success("Acronym added succesfully", "Acronym buster");
      this.activeModal.close({ alertText: "Acronym added" });
    });
  }
}
