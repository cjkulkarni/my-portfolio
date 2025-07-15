import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
      <p className="text-center text-gray-600 mb-10">
        Have a question or want to work together? Fill out the form below and I’ll get back to you!
      </p>
      <ContactForm />
    </div>
  )
}
