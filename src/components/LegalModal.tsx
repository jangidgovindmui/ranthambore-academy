import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isPrivacy ? 'Privacy Policy' : 'Terms of Demonstration'}
      className="fixed inset-0 z-50 bg-[#070F1E]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-xl w-full bg-white rounded-3xl shadow-2xl border-2 border-[#C5A059] overflow-hidden my-8 p-7 sm:p-9 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/30 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#070F1E] flex items-center justify-center text-[#E5C782] border border-[#C5A059]">
              <Shield className="w-5 h-5 text-[#E5C782]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#070F1E]">
              {isPrivacy ? 'Privacy & Data Protection Charter' : 'Terms of Demonstration Presentation'}
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close legal modal"
            className="p-1.5 rounded-lg text-[#5A6475] hover:text-[#070F1E] hover:bg-[#F9F7F2]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="text-xs sm:text-sm text-[#121A26]/85 space-y-4 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Fictional Showcase Context</strong>
                <br />
                Ranthambore International Academy (Sawai Madhopur) is a fictional conceptual demonstration created to showcase world-class academic web design, information architecture, and digital experience standards.
              </p>
              <p>
                <strong>2. User Data & Telemetry</strong>
                <br />
                No personal information, student records, phone numbers, or emails entered on this site are stored on external commercial databases or sold to third parties. Form inputs are processed locally on the client to demonstrate realistic response flows.
              </p>
              <p>
                <strong>3. Security Standards</strong>
                <br />
                Production deployments of this architectural template are engineered to integrate with secure, encrypted school management information systems (SMIS) and compliant student records databases.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Demonstration Scope</strong>
                <br />
                This website is presented solely as a digital capabilities demonstration for educational institutions, school boards, and potential education clients.
              </p>
              <p>
                <strong>2. Institutional Representation</strong>
                <br />
                All names, curricula descriptions, faculty references (including Dr. Ananya Sharma), and student figures are representative demo content crafted to reflect best practices in school portal design.
              </p>
              <p>
                <strong>3. Intellectual Property</strong>
                <br />
                Design patterns, custom CSS tokens, layouts, and typography pairings are crafted according to the highest web craftsmanship benchmarks for client presentation.
              </p>
            </>
          )}
        </div>

        <div className="pt-6 mt-6 border-t border-[#C5A059]/30 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#070F1E] text-white text-xs font-bold hover:bg-[#0D1A30] border border-[#C5A059]/40"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
