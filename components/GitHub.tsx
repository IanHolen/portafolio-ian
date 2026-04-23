"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, GitFork, ExternalLink, GitCommit, GitPullRequest, Eye } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { useLocale } from "./I18nProvider";
import { t } from "@/lib/translations";

interface Profile {
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

interface Activity {
  type: string;
  repo_name: string;
  created_at: string;
  action: string | null;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  "C#": "#178600",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Go: "#00ADD8",
};

function relativeTime(iso: string, locale: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (locale === "es") {
    if (mins < 60) return `hace ${mins}m`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `hace ${hrs}h`;
    const days = Math.floor(hrs / 24);
    if (days < 30) return `hace ${days}d`;
    return `hace ${Math.floor(days / 30)}mo`;
  }
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function eventLabel(type: string, action: string | null) {
  switch (type) {
    case "PushEvent": return "Push";
    case "CreateEvent": return "Created";
    case "PullRequestEvent": return action ? `PR ${action}` : "PR";
    case "IssuesEvent": return action ? `Issue ${action}` : "Issue";
    case "WatchEvent": return "Starred";
    case "ForkEvent": return "Forked";
    case "DeleteEvent": return "Deleted";
    default: return type.replace("Event", "");
  }
}

function eventIcon(type: string) {
  switch (type) {
    case "PushEvent": return <GitCommit className="h-3 w-3" />;
    case "PullRequestEvent": return <GitPullRequest className="h-3 w-3" />;
    case "WatchEvent": return <Star className="h-3 w-3" />;
    case "ForkEvent": return <GitFork className="h-3 w-3" />;
    default: return <Eye className="h-3 w-3" />;
  }
}

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();
    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

function Skeleton({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-white/10 ${className ?? ""}`} />;
}

export default function GitHub() {
  const { locale } = useLocale();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [activity, setActivity] = useState<Activity[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("/api/github/profile").then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch("/api/github/repos").then((r) => (r.ok ? r.json() : Promise.reject())),
      fetch("/api/github/activity").then((r) => (r.ok ? r.json() : Promise.reject())),
    ])
      .then(([p, r, a]) => {
        setProfile(p);
        setRepos(r);
        setActivity(a);
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <section id="github" className="relative px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeader index="06" kicker={t("github.kicker", locale)} title={t("github.title", locale)} />
          <p className="mt-8 text-center text-white/40">{t("github.unavailable", locale)}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="relative px-6 py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-violet/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="06" kicker={t("github.kicker", locale)} title={t("github.title", locale)} />

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-8"
        >
          {profile ? (
            <>
              <Image
                src={profile.avatar_url}
                alt={profile.name}
                width={56}
                height={56}
                className="rounded-full border border-white/10"
              />
              <div className="flex flex-wrap items-center gap-8">
                {[
                  { label: "Repos", value: profile.public_repos },
                  { label: "Followers", value: profile.followers },
                  { label: "Following", value: profile.following },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-8">
                    {i > 0 && <div className="hidden h-8 w-px bg-white/10 md:block" />}
                    <div>
                      <p className="font-mono text-2xl font-light text-white">
                        <AnimatedCounter value={s.value} />
                      </p>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-8">
              <Skeleton className="h-14 w-14 rounded-full" />
              <Skeleton className="h-10 w-48" />
            </div>
          )}
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          {/* Repos grid — 2/3 width */}
          <div className="lg:col-span-2">
            {repos ? (
              <div className="grid gap-4 md:grid-cols-2">
                {repos.map((repo, i) => (
                  <motion.a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-mono text-sm font-medium text-white group-hover:text-accent-violet transition">
                        {repo.name}
                      </h4>
                      <ExternalLink className="h-3.5 w-3.5 text-white/30 transition group-hover:text-white/60" />
                    </div>
                    {repo.description && (
                      <p className="mt-2 line-clamp-2 text-xs text-white/50">{repo.description}</p>
                    )}
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/40">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: LANG_COLORS[repo.language] ?? "#666" }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" /> {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" /> {repo.forks_count}
                        </span>
                      )}
                      <span className="ml-auto">{relativeTime(repo.updated_at, locale)}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-32 w-full rounded-2xl" />
                ))}
              </div>
            )}
          </div>

          {/* Activity feed — 1/3 width */}
          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              {t("github.recentActivity", locale)}
            </h3>
            {activity ? (
              <div className="relative space-y-0">
                {/* vertical line */}
                <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10" />
                {activity.slice(0, 8).map((ev, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative flex items-start gap-4 py-2.5"
                    style={{ opacity: 1 - i * 0.08 }}
                  >
                    <div className="relative z-10 mt-0.5 flex h-[11px] w-[11px] items-center justify-center rounded-full border border-white/20 bg-ink-950 text-accent-violet">
                      {eventIcon(ev.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-xs text-white/70">
                        <span className="font-medium text-white/90">{eventLabel(ev.type, ev.action)}</span>
                        {" "}
                        <span className="text-white/50">{ev.repo_name.split("/")[1]}</span>
                      </p>
                      <p className="text-[10px] text-white/30">{relativeTime(ev.created_at, locale)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-full" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
