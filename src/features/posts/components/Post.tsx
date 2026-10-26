import { Link } from "react-router";

import { Skeleton } from "@/components/ui/skeleton";
import { gutter } from "@/lib/layout";
import type { Post } from "../posts.types";

const PostRow = ({ post }: { post: Post }) => {
  return (
    <article className={`relative border-t border-border py-7 ${gutter}`}>
      <p className="text-sm tabular-nums text-muted-foreground sm:mt-1.5 sm:text-right">
        #{post.id}
      </p>

      <div className="min-w-0">
        <h2 className="font-reading text-[1.375rem] leading-[1.25] tracking-[-0.01em] text-balance">
          <Link
            to={`/posts/${post.id}`}
            className="underline-offset-[0.2em] before:absolute before:inset-0 before:content-[''] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mt-2 line-clamp-2 text-[0.9375rem] leading-[1.6] text-muted-foreground">
          {post.body}
        </p>
      </div>
    </article>
  );
};

export default PostRow;

export const PostRowSkeleton = () => {
  return (
    <div className={`border-t border-border py-7 ${gutter}`}>
      <Skeleton className="h-4 w-8 rounded-md sm:mt-1.5 sm:ml-auto" />
      <div className="min-w-0">
        <Skeleton className="h-6 rounded-md" />
        <Skeleton className="mt-2 h-6 w-2/3 rounded-md" />
        <div className="mt-4 flex flex-col gap-2">
          <Skeleton className="h-4 rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
        </div>
      </div>
    </div>
  );
};
