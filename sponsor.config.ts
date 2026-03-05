import { defineConfig, tierPresets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "TheEdoRan",
    type: "user",
  },
  tiers: [
    {
      title: "Past Sponsors",
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: "Supporters",
      preset: tierPresets.small,
    },
    {
      title: "Backers",
      monthlyDollars: 10,
      preset: tierPresets.base,
    },
    {
      title: "Enthusiasts (Bronze)",
      monthlyDollars: 25,
      preset: tierPresets.medium,
    },
    {
      title: "Advocates (Silver)",
      monthlyDollars: 100,
      preset: tierPresets.large,
    },
    {
      title: "Patrons (Gold)",
      monthlyDollars: 250,
      preset: tierPresets.xl,
    },
  ],
  outputDir: ".",
  formats: ["svg"],
});
