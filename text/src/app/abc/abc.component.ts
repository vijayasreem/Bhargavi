import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {
  transactionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit(): void {
    this.transactionForm = this.formBuilder.group({
      creditAmount: ['', [Validators.required, Validators.min(0), Validators.max(50000)]]
    });
  }

  submitTransaction(): void {
    if (this.transactionForm.invalid) {
      return;
    }

    // Call API service to submit transaction
    this.apiService.submitTransaction(this.transactionForm.value).subscribe(
      response => {
        // Handle success response
      },
      error => {
        // Handle error response
      }
    );
  }
}