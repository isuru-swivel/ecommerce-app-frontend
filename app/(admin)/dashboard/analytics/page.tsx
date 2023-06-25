"use client";

import withAuth from "@/components/HOC/withAuth";
import { Analytics } from "@/components";

const AnalyticsPage = () => {
  return (
    <div className="dashboard-page">
      <Analytics />
    </div>
  );
};

export default withAuth(AnalyticsPage);
