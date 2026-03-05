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
      title: "Backers",
      preset: tierPresets.base,
    },
    {
      title: "Sponsors",
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 50,
      preset: tierPresets.large,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],
  formats: ["svg"],
});
