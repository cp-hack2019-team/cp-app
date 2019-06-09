import {Schedule} from './schedule';

export interface ReceiptListElement {
    dose: number;
    id: string;
    medicineId: string;
    medicineName: string;
    schedule: Schedule;
    createdTime: string;
    days: number;
    daysCovered: number;
    stock: number;
}
