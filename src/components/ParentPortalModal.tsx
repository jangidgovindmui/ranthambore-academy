import React, { useState } from 'react';
import { X, Lock, UserCheck, CreditCard } from 'lucide-react';

interface ParentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'fee';
}

export const ParentPortalModal: React.FC<ParentPortalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'login',
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'fee'>(initialTab);
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim()) return;
    setIsLoggedIn(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="RIA Parent ERP Portal"
      className="fixed inset-0 z-50 bg-[#070F1E]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl border-2 border-[#C5A059] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#070F1E] p-7 text-white relative border-b-2 border-[#C5A059]/40">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-5 right-5 p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-[10px] font-extrabold text-[#E5C782] uppercase tracking-[0.2em] mb-1">
            <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>RIA Campus ERP & Secretariat Gateway</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            {activeTab === 'login' ? 'Parent & Scholar ERP' : 'Online Fee Remittance Gateway'}
          </h3>
          <p className="text-xs text-[#F9F7F2]/80 mt-1">
            Official portal for candidate attendance, term report cards, and fee receipts.
          </p>
        </div>

        {/* Tab switch */}
        <div className="p-4 bg-[#F9F7F2] border-b border-[#C5A059]/20 flex gap-2">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'login'
                ? 'bg-[#1A382B] text-white shadow-md border border-[#C5A059]/40'
                : 'bg-white text-[#5A6475] hover:text-[#070F1E]'
            }`}
          >
            ERP Portal Access
          </button>
          <button
            onClick={() => setActiveTab('fee')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'fee'
                ? 'bg-[#1A382B] text-white shadow-md border border-[#C5A059]/40'
                : 'bg-white text-[#5A6475] hover:text-[#070F1E]'
            }`}
          >
            Quick Fee Remittance
          </button>
        </div>

        <div className="p-7">
          {isLoggedIn ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1A382B]/10 text-[#1A382B] flex items-center justify-center mx-auto border-2 border-[#C5A059]">
                <UserCheck className="w-7 h-7 text-[#1A382B]" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-[#070F1E]">
                  Welcome, Parent of Aarav Sharma
                </h4>
                <p className="text-xs text-[#5A6475]">Grade 6-B · Scholar Roll No: {studentId || 'RIA-2024-88'}</p>
              </div>

              <div className="p-4 bg-[#F9F7F2] rounded-2xl text-left text-xs space-y-2 border border-[#C5A059]/25">
                <div className="flex justify-between">
                  <span className="text-[#5A6475]">Term Attendance:</span>
                  <strong className="text-[#1A382B]">96.8% (Exemplary)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A6475]">Upcoming Assessment:</span>
                  <strong className="text-[#070F1E]">Mid-Term Colloquium (May 14)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#5A6475]">Fee Status (Q1 2026):</span>
                  <span className="text-[#1A382B] font-bold">Cleared (Receipt #8942)</span>
                </div>
              </div>

              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full py-2.5 bg-[#070F1E] text-white text-xs font-bold rounded-xl hover:bg-[#0D1A30] border border-[#C5A059]/40"
              >
                Sign Out of Demo Portal
              </button>
            </div>
          ) : activeTab === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1.5">
                  Scholar Roll Number / Parent ID
                </label>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="e.g. RIA-2024-88"
                  className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                />
              </div>

              <div className="text-[11px] text-[#5A6475] italic">
                Demo access: enter any user credentials to experience the portal.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#1A382B] hover:bg-[#2E5844] text-white text-xs font-bold border border-[#C5A059]/50 transition-all shadow-md"
              >
                Enter Parent Dashboard
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-[#F9F7F2] rounded-2xl border border-[#C5A059]/25 text-xs text-[#121A26] space-y-2">
                <span className="font-bold text-[#1A382B] block uppercase tracking-wider">
                  Direct Institutional Gateway
                </span>
                <p>
                  Instant digital receipt dispatch via UPI, NetBanking, and RuPay/Visa/MasterCard with institutional encryption.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#070F1E] uppercase tracking-wider mb-1.5">
                  Enter Scholar Admission Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. RIA-2025-104"
                  className="w-full px-4 py-3 rounded-xl border border-[#C5A059]/30 text-sm focus:outline-none focus:border-[#1A382B]"
                />
              </div>

              <button
                type="button"
                onClick={() => alert('Demo Mode: Navigating to simulated Secure University Payment Gateway.')}
                className="w-full py-3.5 rounded-xl bg-[#070F1E] hover:bg-[#0D1A30] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all border border-[#C5A059]/40 shadow-md"
              >
                <CreditCard className="w-4 h-4 text-[#E5C782]" />
                <span>Fetch Fee Voucher & Pay Online</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
