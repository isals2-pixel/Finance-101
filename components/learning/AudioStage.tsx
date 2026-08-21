'use client';
// Audio player: speeds, 15/30s rewind, resume position, completion tracking,
// Media Session for lock-screen controls, transcript. A missing audio file is
// shown honestly with the production steps, never faked.
import { useEffect, useRef, useState } from 'react';
import type { Lesson } from '@/lib/types';
import { getLessonState, putLessonState } from '@/lib/db';

const SPEEDS = [0.75, 1.0, 1.25, 1.5, 1.75, 2.0];

export function AudioStage({
  lesson,
  audioUrl,
  onComplete,
}: {
  lesson: Lesson;
  audioUrl: string;
  onComplete: (skipped: boolean) => void;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1.0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [failed, setFailed] = useState(!audioUrl);
  const [showTranscript, setShowTranscript] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioUrl) return;
    getLessonState(lesson.slug).then((s) => {
      if (s.audioPositionSec) audio.currentTime = s.audioPositionSec;
    });
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: lesson.title,
        artist: 'Finance Academy',
        album: `Lesson ${lesson.lesson}`,
      });
      navigator.mediaSession.setActionHandler('play', () => audio.play());
      navigator.mediaSession.setActionHandler('pause', () => audio.pause());
      navigator.mediaSession.setActionHandler('seekbackward', () => {
        audio.currentTime = Math.max(0, audio.currentTime - 15);
      });
    }
  }, [audioUrl, lesson]);

  async function savePosition(sec: number) {
    const state = await getLessonState(lesson.slug);
    await putLessonState({ ...state, audioPositionSec: sec });
  }

  function rewind(sec: number) {
    const audio = audioRef.current;
    if (audio) audio.currentTime = Math.max(0, audio.currentTime - sec);
  }

  function setRate(rate: number) {
    setSpeed(rate);
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }

  if (failed) {
    return (
      <div className="space-y-4 rounded-lg border border-dashed border-[var(--border)] bg-[var(--card)] p-5">
        <p className="text-sm font-medium">Audio not yet produced for this lesson.</p>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-[var(--muted)]">
          <li>Run <code>npm run export:pack -- {String(lesson.lesson).padStart(2, '0')}</code></li>
          <li>Create a NotebookLM notebook with that single file as the source</li>
          <li>Generate an Audio Overview with the standing instruction</li>
          <li>Convert to mono mp3 and add it as <code>public/audio/{lesson.slug}.mp3</code></li>
          <li>Fill the audio fields in the lesson frontmatter and push</li>
        </ol>
        <p className="text-sm text-[var(--muted)]">
          You can read the transcript below and continue to the retrieval flow; the skipped audio is
          recorded in your lesson history.
        </p>
        <TranscriptToggle
          body={lesson.body}
          show={showTranscript}
          onToggle={() => setShowTranscript((v) => !v)}
        />
        <button
          onClick={() => onComplete(true)}
          className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
        >
          Continue without audio
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => {
          const t = e.currentTarget.currentTime;
          setPosition(t);
          if (Math.floor(t) % 5 === 0) void savePosition(t);
        }}
        onEnded={() => onComplete(false)}
        onError={() => setFailed(true)}
      />
      <div className="flex items-center gap-3">
        <button
          onClick={() => (playing ? audioRef.current?.pause() : audioRef.current?.play())}
          className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button onClick={() => rewind(15)} className="rounded-md border border-[var(--border)] px-3 py-2 text-sm">
          -15s
        </button>
        <button onClick={() => rewind(30)} className="rounded-md border border-[var(--border)] px-3 py-2 text-sm">
          -30s
        </button>
        <span className="ml-auto text-sm tabular-nums text-[var(--muted)]">
          {fmt(position)} / {duration ? fmt(duration) : '–:––'}
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-[var(--border)]">
        <div
          className="h-full bg-[var(--accent)] transition-[width]"
          style={{ width: duration ? `${(position / duration) * 100}%` : '0%' }}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {SPEEDS.map((s) => (
          <button
            key={s}
            onClick={() => setRate(s)}
            className={`rounded-md px-2 py-1 text-xs ${
              s === speed ? 'bg-[var(--accent)] text-white' : 'border border-[var(--border)] text-[var(--muted)]'
            }`}
          >
            {s}x
          </button>
        ))}
      </div>
      <TranscriptToggle
        body={lesson.body}
        show={showTranscript}
        onToggle={() => setShowTranscript((v) => !v)}
      />
      <p className="text-xs text-[var(--muted)]">
        When the audio ends, the prediction step opens automatically. Screen can be locked while
        listening where your browser supports it.
      </p>
    </div>
  );
}

function TranscriptToggle({ body, show, onToggle }: { body: string; show: boolean; onToggle: () => void }) {
  return (
    <div>
      <button onClick={onToggle} className="text-sm text-[var(--accent)] underline">
        {show ? 'Hide transcript' : 'Show transcript'}
      </button>
      {show && (
        <div className="mt-3 max-h-96 overflow-y-auto whitespace-pre-wrap rounded-md border border-[var(--border)] p-4 text-sm leading-relaxed">
          {body}
        </div>
      )}
    </div>
  );
}

function fmt(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}
