import { Button, IButtonProps } from '@ikea/components/atoms/Button/Button'

import { Dispatch, SetStateAction, useState } from 'react'
import { Sidebar } from '@ikea/components/organisms/Sidebar'

import { Controller, useFormContext } from 'react-hook-form'

import { RadioGroup } from '@headlessui/react'

import { RangeSlider } from '@ikea/components/molecules/RangeSlider/RangeSlider'
import { IconCircleCheck, IconFilter } from '@tabler/icons-react'
import { filterDefaultValues, sortTypesArray } from '@ikea/forms/productsFilter'

export interface IProductFilterProps {}

const FilterHeading = ({
  title,
  dirty = true,
}: {
  title: string
  dirty: boolean
}) => (
  <div className="relative inline-block mb-6 text-xl font-semibold underline underline-offset-4">
    {dirty && (
      <div className="absolute top-0 w-3 h-3 rounded-full left-full animate-pulse bg-yellow" />
    )}
    {title}
  </div>
)

const SidebarFilter = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const {
    control,
    formState: { dirtyFields },
    reset,
  } = useFormContext()

  return (
    <Sidebar overlayBlur={false} open={open} setOpen={setOpen}>
      <Sidebar.Header>
        <div>Filter</div>
      </Sidebar.Header>
      <Sidebar.Body className="space-y-12">
        <div>
          <FilterHeading dirty={'sort' in dirtyFields} title="Sort by" />
          <Controller
            name="sort"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup value={value} onChange={onChange}>
                <div className="flex flex-col gap-4">
                  {sortTypesArray.map((item) => (
                    <RadioGroup.Option key={item} value={`${item}`}>
                      {({ checked }) => (
                        <span
                          className={`flex select-none items-center bg-white  ${
                            checked
                              ? 'border-primary font-bold text-primary'
                              : 'cursor-pointer text-black '
                          }`}
                        >
                          {item}
                          {checked && (
                            <IconCircleCheck className="w-4 h-4 ml-2" />
                          )}
                        </span>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            )}
          />
        </div>
        <div>
          <FilterHeading dirty={'ratings' in dirtyFields} title="Rating" />
          <Controller
            name="rating"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onChange={onChange}
                className="space-y-2 "
              >
                <div className="flex flex-col gap-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <RadioGroup.Option key={item} value={`${item}`}>
                      {({ checked }) => (
                        <span
                          className={`flex select-none items-center bg-white  ${
                            checked
                              ? 'border-primary font-bold text-primary'
                              : 'cursor-pointer text-black '
                          }`}
                        >
                          {Array(item)
                            .fill('★')
                            .map((i) => i)}
                          {checked && (
                            <IconCircleCheck className="w-4 h-4 ml-2" />
                          )}
                        </span>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <div>
          <FilterHeading dirty={'price' in dirtyFields} title="Price" />
          <Controller
            name="price"
            control={control}
            render={({ field: { onChange, value } }) => (
              <RangeSlider
                step={1000}
                marks
                onChange={onChange}
                value={value}
                initialData={filterDefaultValues.price}
                labelFormat={(sliderValue) =>
                  `Rs.${sliderValue.toLocaleString()}`
                }
              />
            )}
          />
        </div>

        {/* <div>
          <FilterHeading dirty={'category' in dirtyFields} title="Category" />
          <Controller
            name="category"
            control={control}
            render={({ field: { onChange, value } }) => (
              <fieldset className="flex flex-col gap-4">
                {filterDefaultValues.category.map((c) => (
                  <label key={c} className="flex items-start whitespace-nowrap">
                    <input
                      onChange={() => {
                        const exists = value.includes(c)
                        const newArr = exists
                          ? value.filter((item: string) => item !== c)
                          : [...value, c]
                        onChange(newArr.sort())
                      }}
                      checked={value.includes(c)}
                      type="checkbox"
                      className="flex-shrink-0 w-4 h-4 mr-1"
                      value={value[c as any]}
                    />
                    <div className="text-sm leading-tight select-none">{c}</div>
                  </label>
                ))}
              </fieldset>
            )}
          />
        </div> */}
      </Sidebar.Body>

      <Sidebar.Footer show={Object.keys(dirtyFields).length > 0}>
        <Button color="white" onClick={() => reset()}>
          Reset
        </Button>
      </Sidebar.Footer>
    </Sidebar>
  )
}

const FilterButton = ({
  title,
  onClick,
}: {
  title: string
  onClick: IButtonProps['onClick']
}) => (
  <Button
    onClick={onClick}
    className="flex items-center justify-center gap-1"
    color="white"
  >
    <div className="hidden whitespace-nowrap md:block ">{title}</div>
    <IconFilter className="w-4 h-4 text-black" />
  </Button>
)

export const ProductFilter = ({
  defaultOpen = false,
}: {
  defaultOpen?: boolean
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div>
      <SidebarFilter open={open} setOpen={setOpen} />

      <FilterButton title="Filter results" onClick={() => setOpen(true)} />
    </div>
  )
}
