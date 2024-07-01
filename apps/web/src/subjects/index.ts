import { NotificationType } from '@ikea/store/notifications'
import { Subject } from 'rxjs'

export const notification$ = new Subject<Omit<NotificationType, 'id'>>()
