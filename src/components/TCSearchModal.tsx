import React, { useState } from 'react';
import { X, Search, FileText } from 'lucide-react';

interface TCSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TCSearchModal: React.FC<TCSearchModalProps> = ({ isOpen, onClose }) => {
  const [admissionNo, setAdmissionNo] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!admissionNo.trim()) return;

    setSearched(true);
    setResult({
      studentName: 'Yashvardhan Singh Rathore',
      admissionNo: admissionNo.toUpperCase(),
      fatherName: 'Mahaveer Singh Rathore',
      motherName: 'Sunita Rathore',
      classLastStudied: 'Grade 10 (Senior Secondary Promoted)',
      dateOfLeaving: 'March 28, 2026',
      reasonForLeaving: 'Relocation of Parents to Jaipur',
      conduct: 'Exemplary',
      tcSerialNo: 'RIA/TC/2026/0412',
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Transfer Certificate Search Portal"
      className="fixed inset-0 z-50 bg-[#070F1E]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-lg w-full bg-white rounded-3xl shadow-2xl border-2 border-[#C5A059] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#070F1E] p-7 text-white relative border-b-2 border-[#C5A059]/40">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-[#E5C782] uppercase block mb-1">
            Official Secretariat Verification
          </span>
          <h3 className="font-serif text-2xl font-bold text-white">
            Transfer Certificate (TC) Archive
          </h3>
          <p className="text-xs text-[#F9F7F2]/80 mt-1">
            Verify candidate credentials as per national education guidelines.
          </p>
        </div>

        <div className="p-7">
          <form onSubmit={handleSearch} className="mb-6">
            <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-2">
              Enter Scholar / Candidate Roll Number
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={admissionNo}
                onChange={(e) => setAdmissionNo(e.target.value)}
                placeholder="e.g. RIA-2025-104 or 104"
                className="flex-1 px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#1A382B] hover:bg-[#2E5844] text-white text-xs font-bold flex items-center gap-1.5 transition-colors border border-[#C5A059]/40 shadow-sm"
              >
                <Search className="w-4 h-4 text-[#E5C782]" />
                <span>Search</span>
              </button>
            </div>
            <span className="text-[11px] text-[#5A6475] block mt-1.5">
              Tip: Enter any demo roll number to preview institutional certificate generation.
            </span>
          </form>

          {searched && result && (
            <div className="p-6 bg-[#F9F7F2] rounded-2xl border-2 border-[#C5A059]/35 text-xs text-[#121A26] space-y-2.5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#C5A059]/25">
                <span className="font-bold text-[#1A382B] text-xs">TC Digitally Verified & Attested</span>
                <span className="text-[11px] font-bold text-[#C5A059]">{result.tcSerialNo}</span>
              </div>
              <p><strong>Candidate:</strong> {result.studentName}</p>
              <p><strong>Roll No:</strong> {result.admissionNo}</p>
              <p><strong>Parents:</strong> {result.fatherName} & {result.motherName}</p>
              <p><strong>Class Last Attended:</strong> {result.classLastStudied}</p>
              <p><strong>Date of Issue:</strong> {result.dateOfLeaving}</p>
              <p><strong>Conduct:</strong> {result.conduct}</p>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => alert(`Demo Mode: Simulated downloading of digital certificate ${result.tcSerialNo}`)}
                  className="px-5 py-2.5 bg-[#070F1E] text-white rounded-xl text-xs font-bold hover:bg-[#0D1A30] flex items-center gap-2 border border-[#C5A059]/40 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#E5C782]" />
                  <span>Download TC Copy (PDF)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
