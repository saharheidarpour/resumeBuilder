import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.scss']
})
export class TemplateItemComponent implements OnInit {
  @ViewChild('fileInput') el: ElementRef;
  showSettings = false;
  imageUrl: string | ArrayBuffer | null = 'assets/images/svg/no-profile-img.gif';
  editFile = true;
  removeUpload = false;
  formGroup: FormGroup = new FormGroup({}, null, null);
  color = 'purple';
  experiences = [{title: '', startDate: null, endDate: null, description: ''}];
  educations = [{organization: '', city: '', eduStartDate: null, eduEndDate: null, eduDescription: ''}];
  skills = [
    {title: '', value: 0},
    {title: '', value: 0},
    {title: '', value: 0},
  ];
  achievements: any[] = [
    {achievementTitle: '', achievementDescription: ''},
    {achievementTitle: '', achievementDescription: ''},
  ];
  interests: any[] = [
    {interestTitle: '', interestDescription: ''},
    {interestTitle: '', interestDescription: ''},
  ];
  contacts: any[] = [
    {contactCity1: '', phone: '', mobile: '', email: '', address: ''}
  ];


  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
    this.createForm();
  }

  ngOnInit(): void {
  }


  toggleSettings(): void {
    this.showSettings = !this.showSettings;
  }

  createForm(): void {
    this.formGroup = this.fb.group({
      name: [null, [Validators.required]],
      surName: [null, [Validators.required]],
      aboutYourSelf: [null, [Validators.required]],
      jobTitle: [null, [Validators.required]],
      company1: [null, [Validators.required]],
      experienceTitle1: [null, [Validators.required]],
      startDate1: [null, [Validators.required]],
      endDate1: [null, [Validators.required]],
      description1: [null, [Validators.required]],
      education1: [null, [Validators.required]],
      organization1: [null, [Validators.required]],
      city1: [null, [Validators.required]],
      eduStartDate1: [null, [Validators.required]],
      eduEndDate1: [null, [Validators.required]],
      eduDescription1: [null, [Validators.required]],
      profileImage: [null, []],
      skillTitle1: [null, []],
      skillValue1: [20, []],
      skillTitle2: [null, []],
      skillValue2: [20, []],
      skillTitle3: [null, []],
      skillValue3: [20, []],
      achievementTitle1: [null, []],
      achievementDescription1: ['', []],
      achievementTitle2: [null, []],
      achievementDescription2: ['', []],
      interestTitle1: ['', []],
      interestDescription1: ['', []],
      interestTitle2: ['', []],
      interestDescription2: ['', []],
      address1: ['', []],
      phone1: ['', []],
      mobile1: ['', []],
      contactCity1: ['', []],
      email1: ['', []],
    });
  }

  addExperience(): void {
    this.experiences.push({title: '', startDate: null, endDate: null, description: ''});
    this.formGroup.addControl('experienceTitle' + this.experiences.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('startDate' + this.experiences.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('endDate' + this.experiences.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('description' + this.experiences.length.toString(), new FormControl('', []));
  }

  addEducations(): void {
    this.educations.push({organization: '', city: '', eduStartDate: null, eduEndDate: null, eduDescription: ''});
    this.formGroup.addControl('organization' + this.educations.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('city' + this.educations.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('eduStartDate' + this.educations.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('eduEndDate' + this.educations.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('eduDescription' + this.educations.length.toString(), new FormControl('', []));
  }

  uploadFile(event: any): void {
    const reader = new FileReader(); // HTML5 FileReader API
    const file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.formGroup.patchValue({
          profileImage: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cdr.markForCheck();
    }
  }

  // Function to remove uploaded file


  removeUploadedFile(): void {
    const newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.formGroup.patchValue({
      profileImage: [null]
    });
  }

  addSkill(): void {
    this.skills.push({title: '', value: 20});
    this.formGroup.addControl('skillTitle' + this.skills.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('skillValue' + this.skills.length.toString(), new FormControl('', Validators.required));
  }

  addAchievements(): void {
    this.achievements.push({achievementTitle: '', achievementDescription: ''});
    this.formGroup.addControl('achievementTitle' + this.achievements.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('achievementDescription' + this.achievements.length.toString(), new FormControl('', []));
  }

  addInterest(): void {
    this.interests.push({interestTitle: '', interestDescription: ''});
    this.formGroup.addControl('interestTitle' + this.interests.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('interestDescription' + this.interests.length.toString(), new FormControl('', []));
  }

  addContactInfo(): void {
    this.contacts.push({contactCity: '', phone: '', mobile: '', email: '', address: ''});
    this.formGroup.addControl('contactCity' + this.contacts.length.toString(), new FormControl('', Validators.required));
    this.formGroup.addControl('phone' + this.contacts.length.toString(), new FormControl('', []));
    this.formGroup.addControl('mobile' + this.contacts.length.toString(), new FormControl('', []));
    this.formGroup.addControl('email' + this.contacts.length.toString(), new FormControl('', []));
    this.formGroup.addControl('address' + this.contacts.length.toString(), new FormControl('', []));
  }

  changeColor(color: string): void {
    this.color = color;
    this.cdr.detectChanges();
  }

  print():void {
    const divToPrint = document.getElementById('cv-form-container');
    const newWin = window.open('', 'Print-Window');
    if (newWin && divToPrint) {
      newWin.document.open();
      newWin.document.write('<html><body onload="window.print()">' + divToPrint.innerHTML + '</body></html>');
      newWin.document.close();
      setTimeout(() => {
        newWin.close();
      }, 10);
    }
  }
}
