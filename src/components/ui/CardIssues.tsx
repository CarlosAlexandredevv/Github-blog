import React from "react";

interface CardIssues {
  title: string;
  created_at: string;
  body: React.ReactNode;
}

export function CardIssues({ title, created_at, body }: CardIssues) {
  return (
    <div className="h-full w-full cursor-pointer rounded-[10px] border-2 border-transparent bg-base-post px-8 py-6 duration-300 hover:border-base-label">
      <div className="flex justify-between gap-3">
        <h3 className="flex-1 text-xl font-bold leading-[1.6] text-base-title">
          {title}
        </h3>
        <span className="mt-1.5 text-sm leading-[1.6] text-base-span">
          {created_at}
        </span>
      </div>
      <p className="mt-4 leading-[1.6] text-base-text">{body}</p>
    </div>
  );
}
