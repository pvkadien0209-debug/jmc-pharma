"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { events } from "@/data/data";

const IPV = 3;   // items per view desktop
const GAP = 24;  // gap-6

// ── Clone arrays for infinite loop ──────────────────────────────────────────
// Desktop: prepend last IPV items, append first IPV items
const dExt = [...events.slice(-IPV), ...events, ...events.slice(0, IPV)];
// Mobile: prepend last item, append first item
const mExt = [events[events.length - 1], ...events, events[0]];

export default function Events() {
  const sectionRef  = useRef<HTMLElement>(null);
  const dTrackRef   = useRef<HTMLDivElement>(null);
  const dWrapRef    = useRef<HTMLDivElement>(null);

  // ── Desktop state ──────────────────────────────────────────────────────────
  const [dIdx,  setDIdx]  = useState(IPV);     // start at first real item
  const [dAnim, setDAnim] = useState(true);
  const [stepPx, setStepPx] = useState(0);     // pixel step per slide

  // ── Mobile state ───────────────────────────────────────────────────────────
  const [mIdx,  setMIdx]  = useState(1);       // start at first real item
  const [mAnim, setMAnim] = useState(true);
  const touchX = useRef(0);

  // ── IntersectionObserver ───────────────────────────────────────────────────
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".animate-on-scroll").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ── Measure desktop container → compute step ──────────────────────────────
  useEffect(() => {
    const measure = () => {
      const w = dWrapRef.current?.clientWidth ?? 0;
      if (w) setStepPx((w - (IPV - 1) * GAP) / IPV + GAP);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (dWrapRef.current) ro.observe(dWrapRef.current);
    return () => ro.disconnect();
  }, []);

  // ── Helpers: jump without animation ──────────────────────────────────────
  const dJump = useCallback((to: number) => {
    setDAnim(false);
    setDIdx(to);
  }, []);
  const mJump = useCallback((to: number) => {
    setMAnim(false);
    setMIdx(to);
  }, []);

  // Re-enable animation after a jump (2 rAFs ensures browser painted first)
  useEffect(() => {
    if (!dAnim) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setDAnim(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [dAnim]);
  useEffect(() => {
    if (!mAnim) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setMAnim(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [mAnim]);

  // ── Desktop: infinite loop on transition end ──────────────────────────────
  const handleDEnd = useCallback(() => {
    if (dIdx < IPV)                       dJump(dIdx + events.length);
    else if (dIdx > IPV + events.length - 1) dJump(dIdx - events.length);
  }, [dIdx, dJump]);

  // ── Mobile: infinite loop on transition end ───────────────────────────────
  const handleMEnd = useCallback(() => {
    if (mIdx <= 0)                 mJump(events.length);
    else if (mIdx >= events.length + 1) mJump(1);
  }, [mIdx, mJump]);

  // ── Nav ───────────────────────────────────────────────────────────────────
  const dPrev = () => { setDAnim(true); setDIdx((c) => c - 1); };
  const dNext = () => { setDAnim(true); setDIdx((c) => c + 1); };
  const mPrev = () => { setMAnim(true); setMIdx((c) => c - 1); };
  const mNext = () => { setMAnim(true); setMIdx((c) => c + 1); };

  // ── Touch ─────────────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const d = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) d > 0 ? mNext() : mPrev();
  };

  // ── Dot highlights ────────────────────────────────────────────────────────
  const realD = ((dIdx - IPV) % events.length + events.length) % events.length;
  const realM = ((mIdx - 1)   % events.length + events.length) % events.length;

  return (
    <section id="events" ref={sectionRef} className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 animate-on-scroll">
          <div>
            <span className="inline-block bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Hội nghị khoa học
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
              Sự kiện đã <span className="gradient-text">tham gia</span>
            </h2>
          </div>
          {/* Desktop arrows */}
          <div className="hidden md:flex gap-2">
            {[{ icon: ChevronLeft, fn: dPrev }, { icon: ChevronRight, fn: dNext }].map(({ icon: Icon, fn }, i) => (
              <button key={i} onClick={fn}
                className="w-11 h-11 rounded-xl border-2 border-slate-200 hover:border-primary-300 hover:bg-primary-50 flex items-center justify-center text-slate-600 hover:text-primary-600 transition-all">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* ── Desktop slider ── */}
        <div ref={dWrapRef} className="hidden md:block overflow-hidden animate-on-scroll">
          <div
            ref={dTrackRef}
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: stepPx ? `translateX(-${dIdx * stepPx}px)` : undefined,
              transition: dAnim ? "transform 500ms ease-in-out" : "none",
              willChange: "transform",
            }}
            onTransitionEnd={handleDEnd}
          >
            {dExt.map((event, i) => (
              <div
                key={i}
                style={{ width: stepPx ? `${stepPx - GAP}px` : `calc((100% - ${(IPV-1)*GAP}px) / ${IPV})`, flexShrink: 0 }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {events.map((_, i) => (
            <button key={i}
              onClick={() => { setDAnim(true); setDIdx(i + IPV); }}
              className={`h-2 rounded-full transition-all duration-300 ${i === realD ? "w-8 bg-primary-600" : "w-2 bg-slate-300"}`}
            />
          ))}
        </div>

        {/* ── Mobile slider ── */}
        <div className="md:hidden overflow-hidden animate-on-scroll"
          onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div
            className="flex"
            style={{
              transform: `translateX(-${mIdx * 100}%)`,
              transition: mAnim ? "transform 500ms ease-in-out" : "none",
              willChange: "transform",
            }}
            onTransitionEnd={handleMEnd}
          >
            {mExt.map((event, i) => (
              <div key={i} className="min-w-full">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile controls + dots */}
        <div className="md:hidden flex items-center justify-center gap-3 mt-6">
          <button onClick={mPrev}
            className="w-9 h-9 rounded-xl border-2 border-slate-200 hover:border-primary-300 hover:bg-primary-50 flex items-center justify-center text-slate-600 hover:text-primary-600 transition-all">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {events.map((_, i) => (
              <button key={i}
                onClick={() => { setMAnim(true); setMIdx(i + 1); }}
                className={`h-2 rounded-full transition-all duration-300 ${i === realM ? "w-8 bg-primary-600" : "w-2 bg-slate-300"}`}
              />
            ))}
          </div>
          <button onClick={mNext}
            className="w-9 h-9 rounded-xl border-2 border-slate-200 hover:border-primary-300 hover:bg-primary-50 flex items-center justify-center text-slate-600 hover:text-primary-600 transition-all">
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

function EventCard({ event }: { event: (typeof events)[0] }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
      <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
        <img src={event.images[0]} alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <Calendar size={12} className="text-primary-600" />
          <span className="text-xs font-bold text-slate-700">{event.date}</span>
        </div>
        {event.images.length > 1 && (
          <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            +{event.images.length - 1}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-slate-800 text-sm leading-snug mb-2">{event.title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{event.description}</p>
      </div>
    </div>
  );
}