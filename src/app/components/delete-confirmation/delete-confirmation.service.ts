import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DeleteConfirmationComponent } from './delete-confirmation.component';

@Injectable()
export class ConfirmationDialogService {

    constructor(private modalService: NgbModal) { }

    public confirm(
        title: string,
        message: string,
        btnOkText: string = 'OK',
        btnCancelText: string = 'Cancel',
        dialogSize: 'sm' | 'lg' = 'lg'): Promise<boolean> {
        const modalRef = this.modalService.open(DeleteConfirmationComponent, { size: dialogSize });
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        modalRef.componentInstance.btnOkText = btnOkText;
        modalRef.componentInstance.btnCancelText = btnCancelText;

        return modalRef.result;
    }

}
