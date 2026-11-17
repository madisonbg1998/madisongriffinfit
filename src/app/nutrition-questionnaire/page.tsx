import type { Metadata } from 'next'
import NutritionQuestionnaireForm from './_form'

export const metadata: Metadata = {
  title: 'Nutrition Questionnaire | Sweat Equity',
  robots: { index: false, follow: false },
}

export default function NutritionQuestionnairePage() {
  return <NutritionQuestionnaireForm />
}
