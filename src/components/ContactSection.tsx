import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    grade: 'Primary School (Grades 1-5)',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Please enter student or parent name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (formData.phone.length < 7) {
      errs.phone = 'Phone number is too short';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please write a brief query or note';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        grade: 'Primary School (Grades 1-5)',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[2px] bg-[#C5A059]"></span>
            <span>OFFICE OF THE REGISTRAR & ADMISSIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15] mb-4">
            Connect With Our <br />
            <span className="italic font-normal text-[#C5A059]">Admissions Secretariat.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#121A26]/85 leading-relaxed font-normal">
            Whether inquiring into boarding facilities, scheduling an interactive campus tour, or requesting prospectus folios, our secretariat is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: School Information & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-9 rounded-2xl bg-[#F9F7F2] border-2 border-[#C5A059]/30 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#070F1E] mb-6">
                Ranthambore International Academy
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#070F1E] flex items-center justify-center text-[#C5A059] border border-[#C5A059]/40 shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4 text-[#E5C782]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#070F1E] uppercase tracking-wider">Campus Estate</h4>
                    <p className="text-sm text-[#121A26]/80 mt-1 leading-relaxed font-medium">
                      {SCHOOL_INFO.address}
                    </p>
                    <span className="text-xs text-[#1A382B] font-bold block mt-1">
                      Adjacent to Ranthambore Buffer Reserve
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#070F1E] flex items-center justify-center text-[#C5A059] border border-[#C5A059]/40 shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-4 h-4 text-[#E5C782]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#070F1E] uppercase tracking-wider">Admissions Directorate</h4>
                    <p className="text-sm text-[#070F1E] mt-1 font-bold">{SCHOOL_INFO.phone}</p>
                    <span className="text-xs text-[#5A6475]">Direct Board Line: General Admissions</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#070F1E] flex items-center justify-center text-[#C5A059] border border-[#C5A059]/40 shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-4 h-4 text-[#E5C782]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#070F1E] uppercase tracking-wider">Electronic Dispatch</h4>
                    <p className="text-sm text-[#070F1E] mt-1 font-bold">{SCHOOL_INFO.email}</p>
                    <span className="text-xs text-[#5A6475]">Official response within 24 working hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#070F1E] flex items-center justify-center text-[#C5A059] border border-[#C5A059]/40 shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-4 h-4 text-[#E5C782]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#070F1E] uppercase tracking-wider">Secretariat Hours</h4>
                    <p className="text-sm text-[#121A26]/80 mt-1 font-medium">{SCHOOL_INFO.hours}</p>
                    <span className="text-xs text-[#5A6475]">Sunday & Public Holidays Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Note Disclaimer Box */}
            <div className="p-4 rounded-xl bg-[#F9F7F2] border border-dashed border-[#C5A059]/40 text-xs text-[#5A6475]">
              <p className="font-bold text-[#070F1E] mb-1">Demonstration Showcase Note</p>
              <p>
                Live client-side input validation and simulated application dispatch for prospective client review.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#F9F7F2] rounded-3xl p-8 sm:p-10 border-2 border-[#C5A059]/30 shadow-md">
            <h3 className="font-serif text-2xl font-bold text-[#070F1E] mb-2">
              Dispatch An Admissions Dossier Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6475] mb-8">
              Complete the registry below to receive prospectus folios or arrange a meeting with the Academic Dean.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-white border-2 border-[#C5A059]/40 text-center animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#1A382B]/10 text-[#1A382B] flex items-center justify-center mx-auto mb-4 border border-[#C5A059]">
                  <CheckCircle2 className="w-9 h-9 text-[#1A382B]" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#070F1E] mb-2">
                  Dossier Request Received
                </h4>
                <p className="text-sm text-[#121A26]/80 max-w-md mx-auto mb-6">
                  Thank you for your interest in Ranthambore International Academy. In this demonstration mode, your submission has been validated and recorded.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-7 py-3 rounded-xl bg-[#070F1E] text-white text-xs font-bold hover:bg-[#0D1A30] border border-[#C5A059]/40"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="parentName" className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-2">
                    Student / Parent Name *
                  </label>
                  <input
                    id="parentName"
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => {
                      setFormData({ ...formData, parentName: e.target.value });
                      if (errors.parentName) setErrors({ ...errors, parentName: '' });
                    }}
                    placeholder="e.g. Vikramaditya Rathore"
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-[#070F1E] placeholder-[#5A6475]/60 focus:outline-none transition-colors ${
                      errors.parentName ? 'border-red-500 focus:border-red-500' : 'border-[#C5A059]/30 focus:border-[#1A382B]'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="parent@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-[#070F1E] placeholder-[#5A6475]/60 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#C5A059]/30 focus:border-[#1A382B]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-[#070F1E] placeholder-[#5A6475]/60 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-500 focus:border-red-500' : 'border-[#C5A059]/30 focus:border-[#1A382B]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="grade" className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-2">
                    Academic Level of Interest
                  </label>
                  <select
                    id="grade"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#C5A059]/30 text-sm text-[#070F1E] focus:outline-none focus:border-[#1A382B]"
                  >
                    <option value="Early Years / Nursery / KG">Early Years (Nursery, LKG, UKG)</option>
                    <option value="Primary School (Grades 1-5)">Primary School (Grades 1 – 5)</option>
                    <option value="Middle School (Grades 6-8)">Middle School (Grades 6 – 8)</option>
                    <option value="Senior School (Grades 9-11)">Senior School (Grades 9 – 11)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-2">
                    Scholastic Inquiries / Notes *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell us about your scholar's current grade, intellectual interests, or queries regarding campus visits..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-white border text-sm text-[#070F1E] placeholder-[#5A6475]/60 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-[#C5A059]/30 focus:border-[#1A382B]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl text-sm font-bold text-white bg-[#1A382B] hover:bg-[#2E5844] active:scale-[0.98] transition-all shadow-md border border-[#C5A059]/50 hover:border-[#E5C782] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A382B] disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-[#E5C782]" />
                  <span>{isSubmitting ? 'Transmitting Dossier...' : 'Dispatch Admissions Enquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
