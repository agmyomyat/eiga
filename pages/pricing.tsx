import { useState } from 'react'
import { GetStaticProps } from 'next'
import { Container, Box, Stepper, Step, StepLabel } from '@mui/material'
import { steps } from '@helpers/pricingSteps'
import { useAuth } from '@contexts/AuthContext'
import { plans, Plan } from '@helpers/plans'
import PricingTable from '@components/movies/PricingTable'
import Voucher from '@components/movies/Voucher'

const STEP_ONE = 0
const STEP_TWO = 1

export default function Pricing() {
   const [activeStep, setActiveStep] = useState<number>(0)
   const { userData } = useAuth()

   // user selected plan(handle click buy now)
   const [currentPlan, setCurrentPlan] = useState<Plan | null>(null)
   const [month, setMonth] = useState<number>(1)
   const selectedPlan = plans.find((plan) => plan.id === month)
   // plan from select button

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
   }

   const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
   }

   const handlePurchase = () => {
      setCurrentPlan(selectedPlan)
      handleNext()
   }

   const isStepTwo = (index: number) => {
      return index === STEP_TWO
   }

   return (
      <Container>
         <Box sx={{ width: 1 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
               {steps.map((step, index) => {
                  const labelProps: {
                     error?: boolean
                  } = {}
                  // Check error when currentStep is '2' and not loggedIn and assign error to only step 2
                  if (activeStep === 1 && !userData && isStepTwo(index)) {
                     labelProps.error = true
                  }

                  return (
                     <Step key={step}>
                        <StepLabel {...labelProps}>{step}</StepLabel>
                     </Step>
                  )
               })}
            </Stepper>
         </Box>
         {activeStep === STEP_ONE && (
            <PricingTable
               plans={plans}
               month={month}
               setMonth={setMonth}
               selectedPlan={selectedPlan}
               onPurchase={handlePurchase}
            />
         )}
         {activeStep === STEP_TWO && (
            <Voucher
               currentPlan={currentPlan}
               handleBack={handleBack}
               isLoggedIn={!!userData}
            />
         )}
         {/* {activeStep === STEP_THREE && (
            <HowToSubscribe handleNext={handleNext} handleBack={handleBack} />
         )} */}
      </Container>
   )
}

export const getStaticProps: GetStaticProps = () => {
   return {
      props: {
         title: `Pricing`,
      },
   }
}
