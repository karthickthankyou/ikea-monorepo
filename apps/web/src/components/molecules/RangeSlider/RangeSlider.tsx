import Slider from '@mui/material/Slider'
import React from 'react'

export interface ISliderMuiProps {
  initialData: [number, number]
  step: number
  onChange: (event: Event, value: number | number[]) => void
  className?: string
  marks?: boolean
  labelFormat?: (value: number) => string
  value: number[]
}

export const RangeSlider = ({
  onChange,
  initialData,
  step,
  className = 'px-4 mt-4',
  labelFormat,
  value,
  marks = false,
}: ISliderMuiProps) => (
  <div className={`${className}`}>
    <Slider
      data-testid="slider"
      defaultValue={initialData}
      min={initialData[0]}
      max={initialData[1]}
      step={step}
      value={value}
      marks={marks}
      onChange={onChange}
      valueLabelDisplay="on"
      valueLabelFormat={labelFormat}
      classes={{
        root: `h-0.5 w-full border-0 `,
        thumb:
          'rounded-sm border-black border w-5 h-5 bg-white hover:shadow-none hover:border-black hover:bg-gray-50 focus:bg-gray-50',
        track: 'text-gray-800',
        rail: 'bg-gray-400',
        mark: 'bg-black',
        valueLabel:
          'text-black px-1 py-0.5 text-sm shadow-md bg-white border before:border-b before:border-r active:shadow-none before:pt-1',
      }}
    />
  </div>
)

RangeSlider.displayName = 'SliderMui'
