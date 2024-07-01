import MuiSwitch, { SwitchProps } from '@mui/material/Switch'

export const Switch = (props: SwitchProps) => {
  return (
    <MuiSwitch
      disableRipple
      classes={{
        thumb: 'bg-white shadow-none border',
        track: 'bg-gray-600',
        checked: 'border-black border',
      }}
      {...props}
    />
  )
}
