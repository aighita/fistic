import { Skeleton } from "@/components/ui/skeleton";

const pistachioTint = "rgba(147, 197, 114, 0.18)";
const raspberryTint = "rgba(224, 64, 102, 0.14)";

export default function Loading() {
  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: "#FAF0E6", color: "#3D2314" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-6 lg:px-10">
        <div className="flex justify-start">
          <Skeleton
            className="h-14 w-full max-w-md rounded-full"
            style={{ backgroundColor: "rgba(61, 35, 20, 0.08)" }}
          />
        </div>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-8">
          <div className="space-y-6">
            <Skeleton
              className="h-10 w-44 rounded-full"
              style={{ backgroundColor: raspberryTint }}
            />
            <Skeleton
              className="h-16 w-full max-w-2xl"
              style={{ backgroundColor: "rgba(61, 35, 20, 0.08)" }}
            />
            <Skeleton
              className="h-24 w-full max-w-xl"
              style={{ backgroundColor: "rgba(61, 35, 20, 0.06)" }}
            />
            <div className="flex flex-wrap gap-3">
              <Skeleton
                className="h-12 w-44 rounded-full"
                style={{ backgroundColor: pistachioTint }}
              />
              <Skeleton
                className="h-12 w-40 rounded-full"
                style={{ backgroundColor: "rgba(61, 35, 20, 0.08)" }}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Skeleton
              className="h-56 rounded-[32px] sm:col-span-2"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.72)" }}
            />
            <Skeleton
              className="h-48 rounded-[28px]"
              style={{ backgroundColor: pistachioTint }}
            />
            <Skeleton
              className="h-48 rounded-[28px]"
              style={{ backgroundColor: raspberryTint }}
            />
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((item) => (
            <Skeleton
              key={item}
              className="h-56 rounded-[30px]"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
            />
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Skeleton
            className="h-80 rounded-[32px]"
            style={{ backgroundColor: "rgba(61, 35, 20, 0.08)" }}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[0, 1, 2, 3].map((item) => (
              <Skeleton
                key={item}
                className="h-52 rounded-[28px]"
                style={{
                  backgroundColor:
                    item === 1 ? raspberryTint : "rgba(255, 255, 255, 0.72)",
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
