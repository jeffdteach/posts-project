import Avatar from "@/components/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import type { Comment } from "../comments.types";

const initialOf = (email: string) => email.trim().charAt(0).toUpperCase() || "?";

const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <article className="border-t border-border py-6 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-3">
        <Avatar>{initialOf(comment.email)}</Avatar>

        <h3 className="min-w-0 text-[0.9375rem] leading-snug font-medium tracking-[-0.005em] first-letter:uppercase">
          {comment.name}
        </h3>
      </div>

      <p className="mt-3 max-w-[32rem] text-[0.9375rem] leading-[1.65] text-foreground/80">
        {comment.body}
      </p>
    </article>
  );
};

export default CommentItem;

export const CommentItemSkeleton = () => {
  return (
    <div className="border-t border-border py-6 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-3">
        <Skeleton className="size-8 shrink-0 rounded-full" />
        <Skeleton className="h-4 w-3/5 rounded-md" />
      </div>
      <div className="mt-4 flex max-w-[32rem] flex-col gap-2">
        <Skeleton className="h-4 rounded-md" />
        <Skeleton className="h-4 w-11/12 rounded-md" />
        <Skeleton className="h-4 w-2/3 rounded-md" />
      </div>
    </div>
  );
};
