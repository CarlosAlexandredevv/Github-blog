import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonPost() {
  return (
    <div>
      <div className="-mt-20 flex flex-col rounded-[10px] bg-base-profile p-8 shadow-custom">
        <div className="flex w-full items-center justify-between">
          <Skeleton className="h-5 w-16 bg-base-label" />
          <Skeleton className="h-5 w-28 bg-base-label" />
        </div>
        <Skeleton className="mt-5 h-8 w-72 bg-base-label" />

        <div className="mt-3.5 flex flex-wrap gap-8">
          <Skeleton className="flex h-5 w-16 items-center gap-2 bg-base-label" />
          <div className="flex items-center gap-2">
            <Skeleton className="flex h-5 w-16 items-center gap-2 bg-base-label" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="flex h-5 w-16 items-center gap-2 bg-base-label" />
          </div>
        </div>
      </div>

      <div className="p-8">
        <Skeleton className="h-[500px] bg-base-label" />
      </div>
    </div>
  );
}
