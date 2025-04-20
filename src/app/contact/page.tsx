"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormSchema = z.infer<typeof formSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: FormSchema) {
    setIsSubmitting(true)

    try {
      const response = await emailjs.sendForm(
        "service_185m7xb",
        "template_jhrfdll",
        formRef.current!,
        "OPzKfISUUk4p8vW-B"
      )

      if (response.status === 200) {
        console.log(values)
        reset()
        alert("Thank you for your message. We'll get back to you soon!")
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Message failed to send. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-black text-white pt-28 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Get in Touch</h2>
          <p className="text-sm text-gray-400">
          Feel free to reach out, I’ll get back to you soon.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                {...register("name")}
                placeholder="John Doe"
                className="mt-1 block w-full py-3 px-4 bg-[#1a1a1a] text-white font-medium border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="john@example.com"
                className="mt-1 block w-full py-3 px-4 bg-[#1a1a1a] text-white font-medium border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                {...register("message")}
                placeholder="Tell us about your project..."
                className="mt-1 block w-full py-3 px-4 min-h-[120px] bg-[#1a1a1a] text-white font-medium border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 placeholder-gray-500"
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-5 text-black cursor-pointer font-bold bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 py-3 px-6 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
