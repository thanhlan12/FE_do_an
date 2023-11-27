import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { RoomStatus } from 'src/app/commons/constants/status';
import { BuildingDto, BuildingRequest, RoomRequest } from './../../../../commons/dto/room';
import { RoomService } from './../../../../services/room.service';

@Component({
  selector: 'app-modal-admin-create-room',
  templateUrl: './modal-admin-create-room.component.html',
  styleUrls: ['./modal-admin-create-room.component.scss']
})
export class ModalAdminCreateRoomComponent {
  createRoomRequest: RoomRequest = new RoomRequest();
  validateForm!: FormGroup;
  buildings: BuildingDto[] = [];
  filteredBuildings: BuildingDto[] = [];

  constructor(
    private modal: NzModalRef,
    private fb: FormBuilder,
    private roomService: RoomService,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      type: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
      buildingId: [null, [Validators.required]],
      roomArea: [null, [Validators.required]],
    });

    this.getBuildings();
  }

  destroyModal(): void {
    this.modal.close();
  }

  getBuildings(): void {
    this.roomService.getAllBuilding().subscribe(response => {
      this.buildings = response.data;
    });
  }

  createRoom(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);

      const buildingId: number = this.validateForm.value.buildingId;
      const building: BuildingDto | undefined = this.buildings.find(b => b.id === buildingId);

      if (building) {
        const buildingRequest: BuildingRequest = {
          id: building.id,
          name: building.name,
          address: building.address,
          description: building.description,
        };

        const createRoomRequest: RoomRequest = {
          name: this.validateForm.value.name,
          type: this.validateForm.value.type,
          price: this.validateForm.value.price,
          roomArea: this.validateForm.value.roomArea,
          status: RoomStatus.AVAILABLE,
          description: this.validateForm.value.description,
          buildingRequest: buildingRequest,
        };

        this.roomService.createRoom(createRoomRequest).subscribe(response => {
          console.log('create room response', response);
          this.notification.create(
            'success',
            'Tạo phòng thành công',
            ''
          );
          this.modal.destroy();
        }, error => {
          console.log('create room error', error);
          this.notification.create(
            'error',
            'Lỗi máy chủ',
            'Có lỗi xảy ra khi tạo phòng'
          );
        });
      }
    }
  }

  searchBuilding(value: string): void {
    console.log('searchBuilding', value);
    if (value) {
      const filterValue = value.toLowerCase();
      this.filteredBuildings = this.buildings.filter(b => b.name.toLowerCase().includes(filterValue) || b.address.toLowerCase().includes(filterValue));
    } else {
      this.filteredBuildings = this.buildings;
    }
  }
}
