import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import QuizForm from "../../components/quiz/admin/QuizForm"
import QuizSuccessToast from "../../components/quiz/admin/QuizSuccessToast"
import apiInstance from "../../config/apiInstance"

const CreateQuizPage = () => {
  const navigate = useNavigate()

  const [disasters, setDisasters] = useState([])
  const [loadingDisasters, setLoadingDisasters] = useState(true)

  const [formData, setFormData] = useState({
    disaster: "",
    disasterId: "",
    title: "",
    description: "",
    category: "Preparedness",
    difficulty: "Medium",
    duration: 10,
    totalQuestions: 15,
  })

  const [selectedDisaster, setSelectedDisaster] = useState(null)

  const [errors, setErrors] = useState({})

  const [isGenerating, setIsGenerating] = useState(false)

  const [toast, setToast] = useState(null)

  /* -------------------------------- */
  /* Get disasters from backend */
  /* -------------------------------- */

  useEffect(() => {
    const getDisasters = async () => {
      try {
        setLoadingDisasters(true)

        const response = await apiInstance.get("/disasters")

        if (response.data.success) {
          setDisasters(response.data.data || [])
        }
      } catch (error) {
        console.error("Failed to fetch disasters:", error)

        setDisasters([])
      } finally {
        setLoadingDisasters(false)
      }
    }

    getDisasters()
  }, [])

  /* -------------------------------- */
  /* Form field change */
  /* -------------------------------- */

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }))
  }

  /* -------------------------------- */
  /* Disaster selection */
  /* -------------------------------- */

  const handleDisasterChange = (slug) => {
    const disaster = disasters.find(
      (item) => item.slug === slug
    )

    if (!disaster) {
      setSelectedDisaster(null)

      setFormData((prev) => ({
        ...prev,
        disaster: "",
        disasterId: "",
      }))

      return
    }

    setSelectedDisaster(disaster)

    setFormData((prev) => ({
      ...prev,

      disaster: disaster.slug,

      disasterId: disaster._id,

      // Automatically suggest title
      title:
        !prev.title ||
        prev.title.includes("Quiz") ||
        prev.title.includes("Preparedness")
          ? `${disaster.name} Preparedness & Safety Protocol`
          : prev.title,
    }))

    setErrors((prev) => ({
      ...prev,
      disaster: "",
    }))
  }

  /* -------------------------------- */
  /* Validation */
  /* -------------------------------- */

  const validateForm = () => {
    const newErrors = {}

    if (!selectedDisaster) {
      newErrors.disaster = "Please select a disaster."
    }

    if (!formData.title.trim()) {
      newErrors.title = "Quiz title is required."
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required."
    }

    if (!formData.category) {
      newErrors.category = "Please select a category."
    }

    if (!formData.difficulty) {
      newErrors.difficulty = "Please select a difficulty."
    }

    const duration = Number(formData.duration)

    if (!duration || duration < 1) {
      newErrors.duration =
        "Duration must be at least 1 minute."
    }

    const questions = Number(formData.totalQuestions)

    if (
      !questions ||
      questions < 1 ||
      questions > 50
    ) {
      newErrors.totalQuestions =
        "Number of questions must be between 1 and 50."
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  /* -------------------------------- */
  /* Generate quiz */
  /* -------------------------------- */

  const handleGenerate = async () => {
  if (!validateForm()) return

  const payload = {
    title: formData.title.trim(),

    description: formData.description.trim(),

    disaster: selectedDisaster.slug,

    disasterId: selectedDisaster._id,

    category: formData.category,

    difficulty: formData.difficulty,

    duration: Number(formData.duration),

    totalQuestions: Number(formData.totalQuestions),
  }

  console.log("Quiz Payload:", payload)

  setIsGenerating(true)

  try {
    const response = await apiInstance.post(
      "/quiz/generate-quiz",
      payload
    )

    console.log("Quiz Generation Response:", response.data)

    if (response.data.success) {
      setToast({
        disaster: selectedDisaster.name,
        payload,
      })
    }
  } catch (error) {
    console.error(
      "Quiz generation failed:",
      error
    )

    setToast({
      error:
        error.response?.data?.message ||
        "Failed to generate quiz.",
    })
  } finally {
    setIsGenerating(false)
  }
}

  return (
    <main className="min-h-screen bg-[#0b1326] px-4 py-8 text-slate-100 sm:px-6 lg:px-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl">

        {/* Header */}

        <div className="mb-8">

          {/* Breadcrumb */}

          <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">

            <button
              onClick={() => navigate("/admin")}
              className="transition-colors hover:text-blue-400"
            >
              Admin
            </button>

            <span className="text-slate-600">
              /
            </span>

            <button
              onClick={() =>
                navigate("/admin/quizzes")
              }
              className="transition-colors hover:text-blue-400"
            >
              Quizzes
            </button>

            <span className="text-slate-600">
              /
            </span>

            <span className="font-medium text-slate-300">
              Create Quiz
            </span>

          </div>

          {/* Title */}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Create Quiz
                </h1>

                <span className="inline-flex items-center gap-1 rounded-full border border-indigo-500/25 bg-indigo-500/15 px-2.5 py-0.5 text-xs font-medium text-indigo-300">
                  ✨ Gemini Powered
                </span>

              </div>

              <p className="mt-1 text-sm text-slate-400 sm:text-base">
                Create an AI-powered disaster preparedness
                quiz using Gemini.
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                navigate("/admin/quizzes")
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 shadow-sm transition-all hover:bg-white/10 hover:text-white active:scale-95"
            >
              ← Back to Quizzes
            </button>

          </div>

        </div>

        {/* Quiz Form */}

        <QuizForm
          formData={formData}
          errors={errors}
          selectedDisaster={selectedDisaster}
          disasters={disasters}
          loadingDisasters={loadingDisasters}
          isGenerating={isGenerating}
          onChange={handleChange}
          onDisasterChange={handleDisasterChange}
          onGenerate={handleGenerate}
          onCancel={() =>
            navigate("/admin/quizzes")
          }
        />

      </div>

      {/* Success Toast */}

      <QuizSuccessToast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </main>
  )
}

export default CreateQuizPage