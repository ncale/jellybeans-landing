import { TELEGRAM_LINK } from "@/constants/links";

export default function Hero() {
  return (
    <section>
      <h1 className="mb-4 font-sugar text-center text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl">
        Make predictions, Win OP.
      </h1>
      <p className="mb-6 text-lg font-normal text-center lg:text-xl px-0 md:px-20">
        We&apos;re launching soon, but in the meantime, join our{" "}
        <a href={TELEGRAM_LINK}>telegram</a> group to stay up to date on
        announcements.
      </p>
      <div className="flex justify-center">
        <a
          href={TELEGRAM_LINK}
          className="inline-flex bg-blue-500 text-white hover:bg-blue-700 ease-in-out transition w-48 items-center justify-center px-5 py-3 text-base font-semibold text-center rounded-lg focus:ring-4"
        >
          Join Telegram
        </a>
      </div>
    </section>
  );
}
