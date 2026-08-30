import React, { useState } from "react";
import { Filter } from "lucide-react";
import Container from "../ui/Container.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";
import LEADERBOARD from "../data/leaderboard.js";

const rankStyle = (rank) => {
  if (rank === 1) return "text-[#FFD84A] border-[#5A4E1E] bg-[#1D1A0E]";
  if (rank === 2) return "text-[#D4DEEA] border-[#3A4250] bg-[#141A22]";
  if (rank === 3) return "text-[#E0A672] border-[#5A3A1E] bg-[#1D160E]";
  return "text-[#AEB9C7] border-transparent";
};

const Leaderboard = () => {
  const [filter, setFilter] = useState("All Time");
  const filters = ["All Time", "This Year", "Monthly", "Contest"];

  return (
    <section id="leaderboard" className="border-b border-[#1C2734] bg-[#080D14]">
      <Container className="py-20 lg:py-24">
        <SectionLabel index={4} total={10} title="Contest Leaderboard" />
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <Filter size={14} className="text-[#556275]" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-1.5 font-mono text-[11.5px] transition-colors ${
                filter === f
                  ? "border-[#4AFFC4] bg-[#0E1D18] text-[#4AFFC4]"
                  : "border-[#2A3341] text-[#8B95A7] hover:text-[#EDF2F7]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="scrollbar-thin overflow-x-auto rounded-lg border border-[#1C2734]">
          <table className="w-full min-w-[640px] border-collapse font-mono text-[13px]">
            <thead>
              <tr className="border-b border-[#1C2734] bg-[#0C1420] text-left text-[11px] uppercase tracking-wide text-[#556275]">
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Year</th>
                <th className="px-4 py-3 text-right">Score</th>
                <th className="px-4 py-3 text-right">Solved</th>
                <th className="px-4 py-3 text-right">Penalty</th>
              </tr>
            </thead>
            <tbody>
              {LEADERBOARD.map((row) => (
                <tr key={row.rank} className="border-b border-[#151E29] last:border-0 hover:bg-[#0C1420]">
                  <td className="px-4 py-3.5">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-md border font-semibold ${rankStyle(row.rank)}`}>
                      {row.rank}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-[#EDF2F7]">{row.name}</td>
                  <td className="px-4 py-3.5 text-[#8B95A7]">{row.year}</td>
                  <td className="px-4 py-3.5 text-right text-[#4AFFC4]">{row.score}</td>
                  <td className="px-4 py-3.5 text-right text-[#AEB9C7]">{row.solved}</td>
                  <td className="px-4 py-3.5 text-right text-[#8B95A7]">{row.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default Leaderboard;
