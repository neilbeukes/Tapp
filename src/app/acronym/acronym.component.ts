import { ToastrService } from "ngx-toastr";
import { AcronymModalComponent } from "../modals/acronym-modal/acronym-modal.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AcronymService } from "../service/acronyms/acronym.service";
import { Component, OnInit } from "@angular/core";
import { ConfirmationModalComponent } from "../modals/confirmation-modal/confirmation-modal.component";
import { Toast } from "ngx-toastr";

@Component({
  selector: "app-acronym",
  templateUrl: "./acronym.component.html",
  styleUrls: ["./acronym.component.css"]
})
export class AcronymComponent implements OnInit {
  acronyms;
  dataLoaded = false;

  constructor(
    private as: AcronymService,
    private ngModel: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAcronyms();
  }

  getAcronyms() {
    this.as.getAll().subscribe(response => {
      console.log(response);
      this.acronyms = response;
      this.dataLoaded = true;
    });
  }

  addAcronyms() {
    const modalRef = this.ngModel.open(AcronymModalComponent);
    modalRef.result
      .then(result => {
        this.getAcronyms();
      })
      .catch(err => {
        console.log("modal dissmisssed");
      });
  }

  deleteAcronymsConfirmation(id) {
    const modalRef = this.ngModel.open(ConfirmationModalComponent);
    modalRef.componentInstance.setContent(
      "Delete",
      "Are you sure you want to delete this acronym?"
    );
    modalRef.result
      .then(result => {
        if (result) {
          this.deleteAcronym(id);
        }
      })
      .catch(err => {
        console.log("modal dissmisssed");
      });
  }

  deleteAcronym(id) {
    this.as.delete(id).subscribe(res => {
      this.toastr.success("Acronym deleted successfully", "Acronym deleted");
      this.getAcronyms();
    });
  }
}
