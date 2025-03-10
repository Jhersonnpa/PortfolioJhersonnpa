import {DotPattern} from '@/components/ui/dot-pattern';
import ReviewDemo from '@/components/review/ReviewDemo';

const Reviews = () => {
  return (
    <section className="relative py-24">
      <div className="z-10 flex flex-col px-6 md:items-center md:justify-center">
        <h3 className="h3-bold">Palabras sinceras de gente increíble</h3>
      </div>

      <ReviewDemo />

      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="dot-pattern opacity-50"
      />
    </section>
  );
};
export default Reviews;
