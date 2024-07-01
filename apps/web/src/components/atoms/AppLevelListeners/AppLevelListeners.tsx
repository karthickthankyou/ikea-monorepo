import { useNotification } from '@ikea/hooks/notifications'
import { useUserListener } from '@ikea/hooks/user'

export interface IAppLevelListenersProps {}

export const AppLevelListeners = () => {
  useUserListener()
  useNotification()

  return null
}
