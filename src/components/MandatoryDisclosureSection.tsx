import React, { useState } from 'react';
import { MANDATORY_DOCUMENTS, SCHOOL_INFO, FEE_STRUCTURE_SAMPLE } from '../data/schoolData';
import { FileText, Download, CheckCircle, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';

export const MandatoryDisclosureSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'docs' | 'general' | 'fee'>('docs');
  const [previewDoc, setPreviewDoc] = useState<string | null>(null);

  return (
    <section id="disclosure" className="py-20 md:py-28 bg-white relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[2px] bg-[#C5A059]"></span>
            <span>REGULATORY DISCLOSURE & SARAS COMPLIANCE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15] mb-4">
            Mandatory Public <br />
            <span className="italic font-normal text-[#C5A059]">Disclosure Registry.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#121A26]/85 leading-relaxed font-normal">
            As mandated by national education bylaws, Ranthambore International Academy provides transparent, unrestricted access to institutional charters, land titles, safety affidavits, and fee structures.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 border-b border-[#C5A059]/30 mb-8 pb-3 overflow-x-auto">
          {[
            { id: 'docs', label: 'Section B: Statutory Clearances & Documents (11)' },
            { id: 'general', label: 'Section A: General Information' },
            { id: 'fee', label: 'Section C: Approved Fee Schedule (2026-27)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#070F1E] text-[#E5C782] border border-[#C5A059] shadow-md'
                  : 'bg-[#F9F7F2] text-[#5A6475] hover:text-[#070F1E] border border-[#C5A059]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Documents & Information */}
        {activeTab === 'docs' && (
          <div className="overflow-x-auto rounded-2xl border-2 border-[#C5A059]/30 bg-[#F9F7F2] shadow-sm">
            <table className="w-full text-left text-xs text-[#121A26]">
              <thead className="bg-[#070F1E] text-[#E5C782] uppercase text-[11px] tracking-wider font-bold">
                <tr>
                  <th className="py-4 px-5 w-20">Sl. No.</th>
                  <th className="py-4 px-5">Statutory Document / Clearance Record</th>
                  <th className="py-4 px-5 w-36">Format</th>
                  <th className="py-4 px-5 w-40">Status</th>
                  <th className="py-4 px-5 text-right w-40">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C5A059]/20 bg-white">
                {MANDATORY_DOCUMENTS.map((doc) => (
                  <tr key={doc.slNo} className="hover:bg-[#F9F7F2]/80 transition-colors">
                    <td className="py-3.5 px-5 font-bold text-[#5A6475]">{doc.slNo}</td>
                    <td className="py-3.5 px-5 font-semibold text-[#070F1E]">{doc.title}</td>
                    <td className="py-3.5 px-5 text-[#5A6475]">{doc.documentType}</td>
                    <td className="py-3.5 px-5">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1A382B]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <button
                        onClick={() => setPreviewDoc(doc.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A382B] hover:text-[#070F1E] underline underline-offset-4"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>Inspect Affidavit</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: General Information */}
        {activeTab === 'general' && (
          <div className="bg-[#F9F7F2] rounded-2xl p-8 sm:p-10 border border-[#C5A059]/30 shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-[#070F1E] mb-6">
              Institutional Registry & Accreditations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-5 bg-white rounded-xl border border-[#C5A059]/25 shadow-sm">
                <span className="text-[11px] font-bold text-[#5A6475] uppercase tracking-wider block">Official Institution Name</span>
                <p className="font-bold text-[#070F1E] mt-1">{SCHOOL_INFO.name}</p>
              </div>
              <div className="p-5 bg-white rounded-xl border border-[#C5A059]/25 shadow-sm">
                <span className="text-[11px] font-bold text-[#5A6475] uppercase tracking-wider block">Affiliation / Registration Status</span>
                <p className="font-bold text-[#070F1E] mt-1">{SCHOOL_INFO.affiliationNo}</p>
              </div>
              <div className="p-5 bg-white rounded-xl border border-[#C5A059]/25 shadow-sm">
                <span className="text-[11px] font-bold text-[#5A6475] uppercase tracking-wider block">Institution Code</span>
                <p className="font-bold text-[#070F1E] mt-1">{SCHOOL_INFO.schoolCode}</p>
              </div>
              <div className="p-5 bg-white rounded-xl border border-[#C5A059]/25 shadow-sm">
                <span className="text-[11px] font-bold text-[#5A6475] uppercase tracking-wider block">Principal & Executive Head</span>
                <p className="font-bold text-[#070F1E] mt-1">Dr. Ananya Sharma, Ph.D. (Oxon. Fellow)</p>
              </div>
              <div className="p-5 bg-white rounded-xl border border-[#C5A059]/25 shadow-sm">
                <span className="text-[11px] font-bold text-[#5A6475] uppercase tracking-wider block">Estate Location</span>
                <p className="font-bold text-[#070F1E] mt-1">{SCHOOL_INFO.address}</p>
              </div>
              <div className="p-5 bg-white rounded-xl border border-[#C5A059]/25 shadow-sm">
                <span className="text-[11px] font-bold text-[#5A6475] uppercase tracking-wider block">Official Electronic Dispatch</span>
                <p className="font-bold text-[#070F1E] mt-1">{SCHOOL_INFO.email} · {SCHOOL_INFO.phone}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Fee Schedule */}
        {activeTab === 'fee' && (
          <div className="bg-[#F9F7F2] rounded-2xl p-8 sm:p-10 border border-[#C5A059]/30 shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-[#C5A059]/25 mb-6 gap-2">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#070F1E]">
                  Approved Fee Schedule (Academic Session 2026–27)
                </h3>
                <p className="text-xs text-[#5A6475] mt-1">
                  Transparent quarterly installments with no hidden capital expenditure levying.
                </p>
              </div>
              <span className="text-xs bg-[#1A382B] text-white px-3.5 py-1.5 rounded-lg font-bold border border-[#C5A059]/40">
                SMC Ratified
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#C5A059]/20">
              <table className="w-full text-left text-xs bg-white">
                <thead className="bg-[#070F1E] text-[#E5C782] uppercase text-[10px] tracking-wider font-bold">
                  <tr>
                    <th className="py-3.5 px-4">Faculty Division / Grade Level</th>
                    <th className="py-3.5 px-4">One-Time Registration & Admission</th>
                    <th className="py-3.5 px-4">Composite Tuition (Quarterly)</th>
                    <th className="py-3.5 px-4">Annual Laboratory & Activity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C5A059]/20 text-[#121A26]">
                  {FEE_STRUCTURE_SAMPLE.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F9F7F2]/80">
                      <td className="py-3.5 px-4 font-bold text-[#070F1E]">{row.grade}</td>
                      <td className="py-3.5 px-4 text-[#5A6475]">{row.admissionOneTime}</td>
                      <td className="py-3.5 px-4 font-bold text-[#1A382B]">{row.tuitionQuarterly}</td>
                      <td className="py-3.5 px-4 text-[#5A6475]">{row.activityAnnual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#5A6475] mt-4 italic">
              * Transport charges vary according to bus route zones (₹ 1,500 – ₹ 2,800 / month). Sibling concessions are evaluated as per RIA Trust bylaws.
            </p>
          </div>
        )}
      </div>

      {/* Document View Simulation Modal */}
      {previewDoc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#070F1E]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="max-w-md w-full bg-white rounded-2xl p-7 shadow-2xl border-2 border-[#C5A059] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#070F1E] text-[#E5C782] flex items-center justify-center mx-auto mb-4 border border-[#C5A059]">
              <FileText className="w-7 h-7 text-[#E5C782]" />
            </div>
            <h4 className="font-serif text-xl font-bold text-[#070F1E] mb-2">
              Statutory Clearance Verified
            </h4>
            <p className="text-xs text-[#5A6475] mb-4">
              <strong>{previewDoc}</strong>
            </p>
            <div className="p-4 bg-[#F9F7F2] rounded-xl text-xs text-[#121A26] mb-6 text-left space-y-1.5 border border-[#C5A059]/25">
              <p>✔ State Authority Attestation: Verified</p>
              <p>✔ Validity: Academic Session 2026–27</p>
              <p>✔ Certified by: Office of the District Education Officer & RIA Trust</p>
            </div>
            <button
              onClick={() => setPreviewDoc(null)}
              className="px-6 py-2.5 rounded-xl bg-[#070F1E] text-white text-xs font-bold hover:bg-[#0D1A30] border border-[#C5A059]/40"
            >
              Close Verification
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
