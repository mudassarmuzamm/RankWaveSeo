import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  User,
  Mail,
  Globe,
  Check,
  Copy,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

interface HeroMeetingCalendarProps {
  id?: string;
  className?: string;
}

export const HeroMeetingCalendar: React.FC<HeroMeetingCalendarProps> = ({
  id = 'hero-calendar-widget',
  className = '',
}) => {
  // Step state: 1 = Choose Date & Time, 2 = Contact Info, 3 = Confirmation
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Selected date state
  const today = new Date();
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    // Default to tomorrow or next business day
    const next = new Date(today);
    next.setDate(today.getDate() + 1);
    return next;
  });

  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [selectedTopic, setSelectedTopic] = useState<string>('Free SEO Audit & Growth Strategy');

  // User details
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [attendeeWebsite, setAttendeeWebsite] = useState('');
  const [attendeeNotes, setAttendeeNotes] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Available Time Slots
  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '07:00 PM',
    '09:00 PM',
  ];

  // Month navigation
  const nextMonth = () => {
    setCurrentMonthDate(
      new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1)
    );
  };

  const prevMonth = () => {
    const prev = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1);
    if (prev.getMonth() >= today.getMonth() || prev.getFullYear() > today.getFullYear()) {
      setCurrentMonthDate(prev);
    }
  };

  // Calendar days generator
  const year = currentMonthDate.getFullYear();
  const month = currentMonthDate.getMonth();
  const monthName = currentMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays: Array<{ day: number; date: Date; isPast: boolean; isClosed: boolean }> = [];
  
  for (let i = 1; i <= daysInMonth; i++) {
    const d = new Date(year, month, i);
    // Compare without time
    const isPast = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dayOfWeek = d.getDay(); // 5 = Fri, 6 = Sat
    const isClosed = dayOfWeek === 5 || dayOfWeek === 6; // Fri/Sat closed as per schedule
    calendarDays.push({ day: i, date: d, isPast, isClosed });
  }

  const isSameDay = (d1: Date, d2: Date) => {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const handleCopyMeetLink = () => {
    navigator.clipboard.writeText(COMPANY_INFO.googleMeet.url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeeEmail) return;
    setStep(3);
  };

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`RankWave SEO 1-on-1 Call with ${COMPANY_INFO.founder}`);
    const details = encodeURIComponent(
      `Google Meet Strategy Call with Mudassar Ali (RankWave SEO).\n\nTopic: ${selectedTopic}\nWebsite: ${attendeeWebsite || 'N/A'}\nNotes: ${attendeeNotes || 'N/A'}\n\nGoogle Meet Link: ${COMPANY_INFO.googleMeet.url}`
    );
    const location = encodeURIComponent(COMPANY_INFO.googleMeet.url);

    // Format start time
    const start = new Date(selectedDate);
    const [timeStr, ampm] = selectedTime.split(' ');
    const [hoursStr, minsStr] = timeStr.split(':');
    let h = parseInt(hoursStr, 10);
    if (ampm === 'PM' && h < 12) h += 12;
    if (ampm === 'AM' && h === 12) h = 0;
    start.setHours(h, parseInt(minsStr, 10), 0);

    const end = new Date(start.getTime() + 30 * 60000); // 30 mins later

    const formatGCalDate = (d: Date) =>
      d.toISOString().replace(/-|:|\.\d+/g, '');

    const dates = `${formatGCalDate(start)}/${formatGCalDate(end)}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  return (
    <div
      id={id}
      className={`bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-blue-950/5 overflow-hidden transition-all text-slate-900 ${className}`}
    >
      {/* Top Google Meet Branding Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-4 sm:px-6 py-3.5 text-white flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-white/15 text-white backdrop-blur-sm">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm tracking-tight">Google Meet Consultation</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-400/20 text-emerald-200 border border-emerald-300/30">
                1-on-1
              </span>
            </div>
            <p className="text-[11px] text-blue-100/90">
              30-Min Strategy with SEO Specialist
            </p>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-1 text-xs font-semibold text-blue-100">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 1 ? 'bg-white text-blue-700' : 'bg-blue-800 text-blue-200'}`}>
            1
          </span>
          <span className="text-blue-300">/</span>
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? 'bg-white text-blue-700' : 'bg-blue-800 text-blue-200'}`}>
            2
          </span>
          <span className="text-blue-300">/</span>
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? 'bg-white text-blue-700' : 'bg-blue-800 text-blue-200'}`}>
            3
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* STEP 1: Date & Time Selection */}
        {step === 1 && (
          <div className="space-y-4">
            {/* Month Header & Controls */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">{monthName}</h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prevMonth}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="p-1 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Days of Week Header */}
            <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-slate-500">
              <span>Su</span>
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span className="text-slate-400">Fr</span>
              <span className="text-slate-400">Sa</span>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Empty offset padding cells */}
              {Array.from({ length: firstDayIndex }).map((_, idx) => (
                <div key={`pad-${idx}`} className="h-8" />
              ))}

              {calendarDays.map(({ day, date, isPast, isClosed }) => {
                const selected = isSameDay(date, selectedDate);
                const disabled = isPast;

                return (
                  <button
                    key={`day-${day}`}
                    type="button"
                    disabled={disabled}
                    onClick={() => {
                      setSelectedDate(date);
                    }}
                    className={`h-8 rounded-lg text-xs font-semibold flex items-center justify-center transition-all relative ${
                      selected
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                        : isClosed
                        ? 'text-slate-400 hover:bg-slate-100'
                        : disabled
                        ? 'text-slate-300 cursor-not-allowed'
                        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <span>{day}</span>
                    {isSameDay(date, today) && !selected && (
                      <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-blue-600" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Date Notice */}
            <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
              <span className="font-medium text-slate-800">
                {selectedDate.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <span className="text-[11px] text-slate-500">PKT Standard Time</span>
            </div>

            {/* Time Slot Picker */}
            <div>
              <div className="flex items-center gap-1.5 mb-2 text-xs font-bold text-slate-700">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Select Meeting Time:</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                      selectedTime === time
                        ? 'bg-blue-50 text-blue-700 border-2 border-blue-600 font-bold'
                        : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-all"
            >
              <span>Next: Enter Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Attendee Details */}
        {step === 2 && (
          <form onSubmit={handleBookingSubmit} className="space-y-3.5">
            <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3 text-xs flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 block">
                  {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}{' '}
                  at {selectedTime}
                </span>
                <span className="text-slate-500 text-[11px]">30-Min Google Meet Call</span>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-blue-600 hover:underline font-semibold"
              >
                Change
              </button>
            </div>

            <div>
              <label htmlFor="calendar-name" className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  id="calendar-name"
                  type="text"
                  required
                  placeholder="e.g., John Smith"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="calendar-email" className="block text-xs font-semibold text-slate-700 mb-1">
                Work Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  id="calendar-email"
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={attendeeEmail}
                  onChange={(e) => setAttendeeEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="calendar-website" className="block text-xs font-semibold text-slate-700 mb-1">
                Website URL / Brand
              </label>
              <div className="relative">
                <Globe className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  id="calendar-website"
                  type="text"
                  placeholder="https://example.com"
                  value={attendeeWebsite}
                  onChange={(e) => setAttendeeWebsite(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:bg-white text-slate-900 placeholder-slate-400"
                />
              </div>
            </div>

            <div>
              <label htmlFor="calendar-topic" className="block text-xs font-semibold text-slate-700 mb-1">
                Strategy Focus
              </label>
              <select
                id="calendar-topic"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:bg-white text-slate-900"
              >
                <option>Free SEO Audit & Growth Strategy</option>
                <option>Technical SEO & Core Web Vitals</option>
                <option>Local SEO & Google Maps 3-Pack</option>
                <option>E-Commerce SEO Architecture</option>
                <option>Authority & Backlink Outreach</option>
              </select>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Confirm Google Meet Call</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmed & Join Google Meet */}
        {step === 3 && (
          <div className="space-y-4 text-center py-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-6 h-6 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-1.5">
                Meeting Reserved
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                You're Scheduled on Google Meet!
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                A calendar invitation for <strong className="text-slate-900">{attendeeName}</strong> has been prepared.
              </p>
            </div>

            {/* Session Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-left text-xs space-y-2">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Date & Time:</span>
                <span className="font-bold text-slate-900">
                  {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })}{' '}
                  @ {selectedTime} PKT
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Topic:</span>
                <span className="font-semibold text-slate-900">{selectedTopic}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Meet Link:</span>
                <span className="font-mono text-[11px] text-blue-600 font-semibold truncate max-w-[180px]">
                  {COMPANY_INFO.googleMeet.url}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              {/* Join Google Meet Button */}
              <a
                href={COMPANY_INFO.googleMeet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all"
              >
                <Video className="w-4 h-4 text-blue-200" />
                <span>Open Google Meet Room</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Add to Google Calendar Button */}
              <a
                href={generateGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-white border border-slate-300 hover:border-blue-400 hover:bg-slate-50 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <CalendarIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Add to Google Calendar</span>
              </a>

              {/* Copy Meet Link Button */}
              <button
                type="button"
                onClick={handleCopyMeetLink}
                className="w-full py-2 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Google Meet link copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Google Meet Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Restart button */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setAttendeeName('');
                  setAttendeeEmail('');
                  setAttendeeWebsite('');
                }}
                className="text-[11px] text-slate-400 hover:text-slate-600 flex items-center justify-center gap-1 mx-auto"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Schedule another time</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
