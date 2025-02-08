import { reviews } from '@/constants/reviews';
import {Marquee} from '@/components/ui/marquee';
import ReviewCard from '@/components/review/ReviewCard';

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewDemo = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
};
export default ReviewDemo;
