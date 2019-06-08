import {Schedule} from './schedule';

export interface ReceiptListElement {
    dose: number;
    id: string;
    medicineId: string;
    schedule: Schedule;
}
