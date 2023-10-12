import Image from "next/image";
import Link from "next/link";

interface IMetric {
  title: string;
  value: number | string;
  imgUrl: string;
  alt: string;
  textStyles?: string;
  href?: string;
  isAuthor?: boolean;
}
const Metric = ({
  title,
  value,
  imgUrl,
  alt,
  textStyles,
  href,
  isAuthor,
}: IMetric) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`invert-colors object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}{" "}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );
  if (href) {
    return (
      <div>
        <Link href={href} className="flex-center flex-wrap gap-1">
          {metricContent}
        </Link>
      </div>
    );
  }
  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
