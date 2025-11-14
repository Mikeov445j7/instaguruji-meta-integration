import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { HomeService } from '../../../service/api/home.service';
import { IonModal } from '@ionic/angular';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-panchang-city-modal',
  templateUrl: './city-modal.page.html',
  styleUrls: ['./city-modal.page.scss']
})
export class CityModalPage {
  isModalOpen = false;
  OriginalCitiesList = [];
  FilteredCitiesList = [];
  coords = {} as any;
  @ViewChild(IonModal) modal: IonModal;
  @Output() close = new EventEmitter<any>();
  @Output() onInit = new EventEmitter<any>();
  nameFormControl = new FormControl(null);
  selectedFormControl = new FormControl();


  constructor(private _homeService: HomeService) {
    this.getCities();
    this.selectedFormControl.setValue(this.getLocation());
    this.nameFormControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value => {
        const searchValue = value.toLowerCase();
        this.FilteredCitiesList = this.OriginalCitiesList.filter(city => city.name.toLowerCase().includes(searchValue));
      });
  }

  onInitialization(flag: boolean) {
    if (flag) {
      const getPos = this.getLocation();
      const searchValue = getPos ? getPos.toLowerCase() : 'Current';
      const choosenCity = this.OriginalCitiesList.find(city => city.name.toLowerCase() == searchValue);
      if (choosenCity) {
        this.onInit.emit({
          latitude: choosenCity.latitude,
          longitude: choosenCity.longitude,
          name: choosenCity.name
        });
      } else {
        this.printCurrentPosition();
      }
    } else {
      this.printCurrentPosition();
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  getCities() {
    this._homeService.GetCitiesJSON().subscribe((result) => {
      this.OriginalCitiesList = result.data;
      this.FilteredCitiesList = result.data;
      this.onInitialization(true);
    }, (error) => {
      this.onInitialization(false);
      console.log("couldn't load");
    })
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.nameFormControl.value, 'confirm');
  }

  onWillDismiss(event: Event) {
    this.isModalOpen = false;
    const ev = event as CustomEvent<any>;
    if (ev.detail.role === 'confirm') {
      this.setLocation();
    }
  }

  async setLocation() {
    const searchValue = this.selectedFormControl.value.toLowerCase();
    const choosenCity = this.OriginalCitiesList.find(city => city.name.toLowerCase() == searchValue);
    let setCoords = null;
    if (choosenCity && !choosenCity.id) {
      setCoords = {
        latitude: choosenCity.latitude,
        longitude: choosenCity.longitude,
        name: choosenCity.name
      };
      localStorage.setItem('selectedLocation', choosenCity.name);
    } else {
      localStorage.setItem('selectedLocation', 'Current');
      const coordinates = await Geolocation.getCurrentPosition();
      setCoords = {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        name: 'Current Location'
      };
    }
    this.close.emit(setCoords);
  }

  getLocation() {
    return localStorage.getItem('selectedLocation') ?? 'Current';
  }

  printCurrentPosition = async () => {
    const checkLocationPermission = await Geolocation.checkPermissions();
    if (checkLocationPermission.location != 'granted') {
      alert("Your geo location is not enabled");
    } else {


      // console.log(checkLocationPermission.location);
      // if (checkLocationPermission.location != 'granted') {
      //   await Geolocation.requestPermissions().then(async result => {
      //     await this.getCurrentPosition();
      //   }).catch(error => {
      //     console.log("Panchang will not work");
      //   })
      // } else {
      //   await this.getCurrentPosition();
      // }
      const coordinates = await Geolocation.getCurrentPosition();
      this.onInit.emit({
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude,
        name: 'Current Location'
      });
    }
  };
}