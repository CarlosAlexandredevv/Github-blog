import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonHome() {
  return (
    <div>
      <Skeleton className="-mt-20 flex flex-col items-center gap-8 rounded-[10px] bg-base-profile p-8 shadow-custom sm:flex-row">
        <div>
          <Skeleton className="size-[148px] self-center rounded-lg bg-base-label sm:self-auto" />
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
            <Skeleton className="h-8 w-44 bg-base-label" />
            <Skeleton className="mt-1 h-5 w-16 bg-base-label" />
          </div>
          <Skeleton className="h-5 w-36 bg-base-label" />
          <div className="mt-6 flex gap-3">
            <Skeleton className="mt-2 h-5 w-36 bg-base-label" />
            <Skeleton className="mt-2 h-5 w-36 bg-base-label" />
            <Skeleton className="mt-2 h-5 w-36 bg-base-label" />
          </div>
        </div>
      </Skeleton>

      <div className="mt-14 flex items-center justify-between">
        <Skeleton className="h-5 w-24 bg-base-label" />
        <Skeleton className="h-5 w-24 bg-base-label" />
      </div>

      <div className="mt-4">
        <Skeleton className="w-full bg-base-label p-6" />
      </div>

      <div className="mt-6 grid gap-3 pb-3 md:grid-cols-2">
        {[...Array(6)].map((_, index) => (
          <Skeleton
            key={index}
            className="h-[240px] w-full bg-base-label p-6"
          />
        ))}
      </div>
    </div>
  );
}
