/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link'
import { HtmlInput } from '@ikea/components/atoms/HtmlInput'
import { HtmlLabel } from '@ikea/components/atoms/HtmlLabel'
import { HtmlSelect } from '@ikea/components/atoms/HtmlSelect'
import { HtmlTextArea } from '@ikea/components/atoms/HtmlTextArea'
import { Button } from '@ikea/components/atoms/Button/Button'
import {
  MySupportsDocument,
  useCreateSupportMutation,
} from '@ikea/generated/types'
import { useAppSelector } from '@ikea/store'
import { useFormContact } from '@ikea/forms/contactForm'
import { IconCircleCheck } from '@tabler/icons-react'

export interface IFormIKEAChatProps {}
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

export const FormIKEAChat = () => {
  const uid = useAppSelector((state) => state.user?.uid)
  const displayName = useAppSelector((state) => state.user?.displayName)
  const email = useAppSelector((state) => state.user?.email)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContact()

  const [createSupport, { loading, error, data: completedData }] =
    useCreateSupportMutation({
      refetchQueries: [{ query: MySupportsDocument }],
      awaitRefetchQueries: true,
    })

  const onSubmit = handleSubmit((formData) => {
    if (uid)
      createSupport({
        variables: {
          createSupportInput: {
            uid,
            ...formData,
          },
        },
      })
  })

  return (
    <div className="w-full max-w-sm ">
      <form onSubmit={onSubmit} className="space-y-3">
        <HtmlLabel title="Title" error={errors.message?.message}>
          <HtmlInput
            placeholder="Type something here."
            {...register('title')}
          />
        </HtmlLabel>
        <HtmlLabel title="Message" error={errors.message?.message}>
          <HtmlTextArea
            placeholder="Type something here."
            {...register('message')}
          />
        </HtmlLabel>
        <HtmlLabel title="Category" error={errors.category?.message}>
          <HtmlSelect {...register('category')}>
            <option value="Select category" disabled hidden>
              Select category
            </option>
            <option value="General Store Information">
              General Store Information
            </option>
            <option value="After Sales Support: Exchange/Refunds/Missing Spares/Parts">
              After Sales Support: Exchange/Refunds/Missing Spares/Parts
            </option>
            <option value="After Sales Support: Double Billing/Oversold/Partial Delivery">
              After Sales Support: Double Billing/Oversold/Partial Delivery
            </option>
            <option value="Assembly Service : Request/Instructions/Reschedule">
              Assembly Service : Request/Instructions/Reschedule
            </option>
            <option value="Assembly Service : Cancellation/Complaint/Feedback">
              Assembly Service : Cancellation/Complaint/Feedback
            </option>
            <option value="Home Furnishing Consulting Request/Feedback/Complaint">
              Home Furnishing Consulting Request/Feedback/Complaint
            </option>
            <option value="Kitchen Planning Appointment">
              Kitchen Planning Appointment
            </option>
            <option value="Kitchen Appliances / Installation Request">
              Kitchen Appliances / Installation Request
            </option>
            <option value="Kitchen Appliances :Complaint/Feedback">
              Kitchen Appliances :Complaint/Feedback
            </option>
            <option value="Measurement Service : Request/Feedback/Complaint">
              Measurement Service : Request/Feedback/Complaint
            </option>
            <option value="IKEA Campaign">IKEA Campaign</option>
            <option value="IKEA Family login issue / IKEA Family Membership">
              IKEA Family login issue / IKEA Family Membership
            </option>
            <option value="IKEA Business login issue / IKEA Business Membership">
              IKEA Business login issue / IKEA Business Membership
            </option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="B2B Customer Request/Feedback/Complaint">
              B2B Customer Request/Feedback/Complaint
            </option>
            <option value="GATI Delivery : Update /Reschedule/Cancellation/Feedback/Complaint">
              GATI Delivery : Update /Reschedule/Cancellation/Feedback/Complaint
            </option>
            <option value="GST changes in Bill">GST changes in Bill</option>
            <option value="Lost &amp; Found (Non IKEA Article)">
              Lost &amp; Found (Non IKEA Article)
            </option>
            <option value="Urban Clap Service Feedback/Complaint">
              Urban Clap Service Feedback/Complaint
            </option>
            <option value="IKEA Supplier Tie up">IKEA Supplier Tie up</option>
            <option value="IKEA Food">IKEA Food</option>
            <option value="Job Requirement">Job Requirement</option>
            <option value="Others">Others</option>
          </HtmlSelect>
        </HtmlLabel>
        <HtmlLabel title="Location" error={errors.location?.message}>
          <HtmlSelect {...register('location')}>
            <option value="Select location" disabled>
              Select location
            </option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Surat">Surat</option>
            <option value="Pune">Pune</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Lucknow">Lucknow</option>
          </HtmlSelect>
        </HtmlLabel>

        <div className="flex items-center justify-between mt-6">
          <Link
            href="/support"
            className="text-sm hover:underline underline-offset-4"
          >
            Go to support page
          </Link>
          <Button loading={loading} type="submit">
            {completedData ? (
              <div className="flex items-center gap-2">
                <IconCircleCheck className="w-4 h-4" /> Message sent
              </div>
            ) : (
              'Send'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
