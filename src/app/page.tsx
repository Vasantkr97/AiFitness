import TerminalOverlay from "@/components/TerminalOverlay";
import { Button } from "@/components/ui/button";
import UserPrograms from "@/components/UsersPrograms";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { DumbbellIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
      <section className="relative z-10 py-24 flex-grow">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            {/* CORNER DECARATION */}
            <div className="absolute -top-10 left-0 w-40 h-40 border-l-2 border-t-2" />

            {/* LEFT SIDE CONTENT */}
            <div className="lg:col-span-7 space-y-8 relative">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-2 h-16 bg-primary rounded-full"></div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <div className="flex items-center gap-4">
                    <span className="text-foreground">Transform</span>
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <DumbbellIcon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <span className="text-primary">Your Body</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-foreground">With Advanced</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-foreground">AI</span>
                    <span className="text-primary"> Technology</span>
                  </div>
                </h1>
              </div>

              {/* SEPERATOR LINE */}
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>

              <p className="text-xl text-muted-foreground w-2/3">
                Talk to our AI assistant and get personalized diet plans and workout routines
                designed just for you
              </p>

              {/* STATS */}
              <div className="flex items-center gap-10 py-6">
                <div className="flex flex-col">
                  <div className="text-2xl text-primary font-bold">500+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">ACTIVE USERS</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary font-bold">3min</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">GENERATION</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                <div className="flex flex-col">
                  <div className="text-2xl text-primary font-bold">100%</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">PERSONALIZED</div>
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  asChild
                  className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  <Link href={"/generate-program"} className="flex items-center">
                    Build Your Program
                    <ArrowRightIcon className="ml-2 size-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="lg:col-span-5 relative">
              {/* CORNER PIECES */}
              <div className="absolute -inset-4 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-border" />
              </div>

              {/* IMAGE CONTAINER */}
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-2xl bg-card">
                  <img
                    src="/aiImage.avif"
                    alt="AI Fitness Coach"
                    className="size-full object-cover object-center"
                  />

                  {/* DECORATIONS */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 right-4 h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg backdrop-blur-sm"></div>
                    <div className="absolute bottom-4 left-4 right-4 h-12 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg backdrop-blur-sm"></div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                </div>

                {/* TERMINAL OVERLAY */}
                <TerminalOverlay />
              </div>
            </div>
          </div>
        </div>
      </section>

      <UserPrograms />
    </div>
  );
};
export default HomePage;