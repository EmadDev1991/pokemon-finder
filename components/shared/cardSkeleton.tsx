import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <Skeleton className=" h-96 rounded-lg bg-muted col-span-12 py-4 sm:col-span-6 md:col-span-4 lg:col-span-3  flex flex-col items-center gap-4" />
  );
};

export default CardSkeleton;
