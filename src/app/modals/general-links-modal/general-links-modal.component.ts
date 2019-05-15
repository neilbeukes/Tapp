import { ToastrService } from "ngx-toastr";
import { GeneralLinksService } from "../../service/links/general-links/general-links.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-general-links-modal",
  templateUrl: "./general-links-modal.component.html",
  styleUrls: ["./general-links-modal.component.css"]
})
export class GeneralLinksModalComponent implements OnInit {
  title = "Add general url";
  generalLink: any = {};
  constructor(
    public activeModal: NgbActiveModal,
    private generalLinksService: GeneralLinksService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  submit() {
    this.addLink();
  }

  addLink() {
    this.generalLinksService.add(this.generalLink).subscribe(res => {
      this.toastr.success("Link added successfully", "Link");
      this.activeModal.close({ alertText: "Link added" });
    });
  }
}
