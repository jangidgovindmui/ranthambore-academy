import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, User, Phone, Mail, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'apply' | 'visit';
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'apply',
}) => {
  const [mode, setMode] = useState<'apply' | 'visit'>(defaultMode);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade 1',
    preferredDate: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.studentName.trim()) {
      errs.studentName = 'Student name is required';
    }
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent or guardian name is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email is required';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Valid phone number is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Admissions & Campus Visit Registration"
      className="fixed inset-0 z-50 bg-[#070F1E]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl border-2 border-[#C5A059] overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#070F1E] p-7 text-white relative border-b-2 border-[#C5A059]/40">
          <button
            onClick={onClose}
            type="button"
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs text-[#E5C782] font-bold tracking-[0.2em] uppercase mb-1.5">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>Academic Session 2026–27 Dossier</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-white">
            {mode === 'apply' ? 'Official Online Admission Registry' : 'Schedule A Guided Collegiate Tour'}
          </h3>
          <p className="text-xs text-[#F9F7F2]/80 mt-1">
            Ranthambore International Academy · Sawai Madhopur, Rajasthan
          </p>

          {/* Toggle Tabs */}
          <div className="mt-5 flex rounded-xl p-1 bg-[#0D1A30] border border-[#C5A059]/30 w-fit">
            <button
              type="button"
              onClick={() => {
                setMode('apply');
                setSubmitted(false);
              }}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                mode === 'apply'
                  ? 'bg-[#1A382B] text-white shadow-md border border-[#C5A059]/40'
                  : 'text-[#F9F7F2]/75 hover:text-white'
              }`}
            >
              Apply for Admission
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('visit');
                setSubmitted(false);
              }}
              className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                mode === 'visit'
                  ? 'bg-[#1A382B] text-white shadow-md border border-[#C5A059]/40'
                  : 'text-[#F9F7F2]/75 hover:text-white'
              }`}
            >
              Book Campus Tour
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-7 sm:p-9 bg-white">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#1A382B]/10 text-[#1A382B] flex items-center justify-center mx-auto mb-4 border-2 border-[#C5A059]">
                <CheckCircle2 className="w-10 h-10 text-[#1A382B]" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#070F1E] mb-2">
                Dossier Successfully Registered
              </h4>
              <p className="text-sm text-[#121A26]/80 max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.parentName}</strong>. In this demonstration portal, your candidate dossier has been verified and registered. The admissions coordinator will contact you promptly.
              </p>
              <div className="p-4 rounded-xl bg-[#F9F7F2] max-w-sm mx-auto text-xs text-[#5A6475] mb-6 text-left space-y-1.5 border border-[#C5A059]/25">
                <p><strong>Candidate:</strong> {formData.studentName}</p>
                <p><strong>Faculty Division:</strong> {formData.grade}</p>
                <p><strong>Dispatch:</strong> {formData.email} · {formData.phone}</p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-7 py-3 rounded-xl bg-[#070F1E] text-white text-xs font-bold hover:bg-[#0D1A30] border border-[#C5A059]/40"
              >
                Close Preview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                  />
                  {errors.studentName && <span className="text-xs text-red-600">{errors.studentName}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1">
                    Grade Applying For *
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                  >
                    <option value="Nursery / Kindergarten">Nursery / Kindergarten</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Grade 11 (Science / Commerce / Humanities)">Grade 11 (Science / Commerce / Humanities)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                  />
                  {errors.parentName && <span className="text-xs text-red-600">{errors.parentName}</span>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 00000"
                    className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                  />
                  {errors.phone && <span className="text-xs text-red-600">{errors.phone}</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="parent.email@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                />
                {errors.email && <span className="text-xs text-red-600">{errors.email}</span>}
              </div>

              {mode === 'visit' && (
                <div>
                  <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1">
                  Candidate Interests & Scholastic Background
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Artistic pursuits, athletic interests, mathematics aptitudes..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#5A6475] hover:text-[#070F1E]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-[#1A382B] hover:bg-[#2E5844] text-white text-xs font-bold border border-[#C5A059]/50 hover:border-[#E5C782] shadow-md transition-all"
                >
                  {mode === 'apply' ? 'Submit Admission Dossier' : 'Confirm Tour Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
