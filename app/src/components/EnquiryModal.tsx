import { useState } from 'react'
import { X, Calendar } from 'lucide-react'
import { useApp } from '@/context/AppContext'

export default function EnquiryModal() {
  const { isEnquiryModalOpen, setEnquiryModalOpen } = useApp()
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    intention: 'meet', // 'meet' or 'visit'
    scheduleCall: false,
    date: '',
    time: '',
  })

  if (!isEnquiryModalOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `✦ *GULSHAN EMPIRE* ✦
_Ultra Luxury Living_
━━━━━━━━━━━━━━━━━━━━

👤 *Client Details*
Name: ${formData.name}
Contact: ${formData.phone}

🎯 *Enquiry Preferences*
Intent: ${formData.intention === 'meet' ? 'Want to meet advisor' : 'Want to visit site'}

📅 *Meeting Schedule*
Request: ${formData.scheduleCall ? 'Yes' : 'No'}
Date: ${formData.scheduleCall && formData.date ? formData.date : ''}
Time: ${formData.scheduleCall && formData.time ? formData.time : ''}

━━━━━━━━━━━━━━━━━━━━`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/917275575757?text=${encodedMessage}`, '_blank')
    setEnquiryModalOpen(false)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className="bg-ge-bg-primary w-full max-w-md rounded-2xl border border-ge-gold/20 shadow-2xl relative max-h-[95vh] sm:max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <button 
          onClick={() => setEnquiryModalOpen(false)}
          className="absolute top-4 right-4 text-ge-text-secondary hover:text-ge-gold transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="bg-ge-gold/5 p-5 sm:p-6 border-b border-ge-gold/10 shrink-0">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-ge-gold">
            Enquire Now
          </h2>
          <p className="text-ge-text-secondary mt-2 text-sm">
            Leave your details below and our luxury property advisor will get in touch with you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5 overflow-y-auto custom-scrollbar">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium text-ge-text-primary">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full bg-white/5 border border-ge-gold/30 rounded-lg px-4 py-2.5 text-ge-text-primary focus:outline-none focus:border-ge-gold focus:ring-1 focus:ring-ge-gold transition-all"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-ge-text-primary">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              required
              className="w-full bg-white/5 border border-ge-gold/30 rounded-lg px-4 py-2.5 text-ge-text-primary focus:outline-none focus:border-ge-gold focus:ring-1 focus:ring-ge-gold transition-all"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-sm font-medium text-ge-text-primary">I would like to:</span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, intention: 'meet' })}
                className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all ${
                  formData.intention === 'meet' 
                    ? 'bg-ge-gold text-ge-bg-primary border-ge-gold' 
                    : 'bg-transparent text-ge-text-secondary border-ge-gold/30 hover:border-ge-gold/60'
                }`}
              >
                Meet Advisor
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, intention: 'visit' })}
                className={`py-2 px-4 rounded-lg border text-sm font-medium transition-all ${
                  formData.intention === 'visit' 
                    ? 'bg-ge-gold text-ge-bg-primary border-ge-gold' 
                    : 'bg-transparent text-ge-text-secondary border-ge-gold/30 hover:border-ge-gold/60'
                }`}
              >
                Visit Site
              </button>
            </div>
          </div>

          <div className="pt-2">
            <label className="flex items-center gap-3 cursor-pointer group mb-4">
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                formData.scheduleCall ? 'bg-ge-gold border-ge-gold' : 'border-ge-gold/50 group-hover:border-ge-gold'
              }`}>
                {formData.scheduleCall && <Calendar className="w-3.5 h-3.5 text-ge-bg-primary" />}
              </div>
              <span className="text-sm text-ge-text-secondary group-hover:text-ge-text-primary transition-colors">
                Schedule a call with an advisor
              </span>
              <input
                type="checkbox"
                className="hidden"
                checked={formData.scheduleCall}
                onChange={(e) => setFormData({ ...formData, scheduleCall: e.target.checked })}
              />
            </label>

            {formData.scheduleCall && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="space-y-1.5">
                  <label htmlFor="date" className="text-xs font-medium text-ge-text-secondary">
                    Select Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    required={formData.scheduleCall}
                    className="w-full bg-white/5 border border-ge-gold/30 rounded-lg px-3 py-2 text-sm text-ge-text-primary focus:outline-none focus:border-ge-gold focus:ring-1 focus:ring-ge-gold transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="time" className="text-xs font-medium text-ge-text-secondary">
                    Select Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    required={formData.scheduleCall}
                    className="w-full bg-white/5 border border-ge-gold/30 rounded-lg px-3 py-2 text-sm text-ge-text-primary focus:outline-none focus:border-ge-gold focus:ring-1 focus:ring-ge-gold transition-all"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    style={{ colorScheme: 'dark' }}
                  />
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-ge-gold text-ge-bg-primary font-semibold tracking-widest py-3.5 rounded-lg mt-6 hover:bg-[#e6be76] transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] uppercase"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}
