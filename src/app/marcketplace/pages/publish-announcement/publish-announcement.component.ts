import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-announcement',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './publish-announcement.component.html',
  styleUrls: ['./publish-announcement.component.scss']
})
export class PublishAnnouncementComponent {
  currentStep = 1;
  basicInfoForm: FormGroup;
  detailsForm: FormGroup;
  contactForm: FormGroup;
  selectedFiles: any[] = [];
  isSubmitting = false;
  showSuccessMessage = false;
  
  categories: string[] = ['Electronics', 'Clothing', 'Home', 'Sports', 'Other'];
  cities: string[] = ['Casablanca', 'Rabat', 'Marrakech', 'Fes', 'Tangier'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.basicInfoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      category: ['', Validators.required],
      condition: ['', Validators.required]
    });

    this.detailsForm = this.fb.group({
      description: ['', [Validators.required, Validators.minLength(20)]],
      price: ['', [Validators.required, Validators.min(0)]],
      images: ['']
    });

    this.contactForm = this.fb.group({
      city: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  nextStep() {
    if (this.canProceed()) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  canProceed(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.basicInfoForm.valid;
      case 2:
        return this.detailsForm.valid;
      default:
        return false;
    }
  }

  canSubmit(): boolean {
    return this.basicInfoForm.valid && 
           this.detailsForm.valid && 
           this.contactForm.valid;
  }

  async onSubmit() {
    if (this.canSubmit()) {
      this.isSubmitting = true;
      
      try {
        // Collect all form data
        const formData = {
          ...this.basicInfoForm.value,
          ...this.detailsForm.value,
          ...this.contactForm.value
        };
        
        console.log('Submitting form data:', formData);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        this.showSuccessMessage = true;
        
        // Reset and redirect after delay
        setTimeout(() => {
          this.resetForms();
          this.router.navigate(['/']);
        }, 2000);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Une erreur est survenue lors de la publication. Veuillez réessayer.');
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  private resetForms() {
    this.basicInfoForm.reset();
    this.detailsForm.reset();
    this.contactForm.reset();
    this.selectedFiles = [];
    this.currentStep = 1;
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length && this.selectedFiles.length < 5; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.selectedFiles.push({
              file: file,
              preview: e.target.result,
              name: file.name
            });
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }

  removeFile(fileToRemove: any) {
    this.selectedFiles = this.selectedFiles.filter(file => file !== fileToRemove);
  }
}
